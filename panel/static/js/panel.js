const STATUS_LABELS = {
  open: 'Açık',
  investigating: 'İnceleniyor',
  resolved: 'Çözüldü',
};

const SEV_LABELS = {
  critical: 'Kritik',
  high: 'Yüksek',
  medium: 'Orta',
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  initHourlyChart();
  initAlarmChart();
  initLogScroll();
  initNotifications();
  initAlarmPage();
  initMonitor();
});

function initHourlyChart() {
  const data = window.CHART_DATA || {};
  const el = document.getElementById('hourly-chart');
  if (!el || !data.labels || !data.datasets) return;

  const datasets = data.datasets.map((ds) => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: ds.color,
    borderColor: ds.color,
    borderWidth: 0,
    borderRadius: 3,
    stack: 'stack',
  }));

  if (data.target) {
    datasets.push({
      type: 'line',
      label: 'Hedef',
      data: data.target,
      borderColor: '#3b82f6',
      borderWidth: 2,
      borderDash: [4, 4],
      pointRadius: 0,
      fill: false,
      stack: 'target',
    });
  }

  new Chart(el, {
    type: 'bar',
    data: { labels: data.labels, datasets },
    options: chartOptions(false),
  });
}

function initAlarmChart() {
  const data = window.ALARM_CHART || {};
  const el = document.getElementById('alarm-chart');
  if (!el || !data.labels) return;

  new Chart(el, {
    type: 'bar',
    data: {
      labels: data.labels.map((h) => `${h}:00`),
      datasets: [{
        label: 'Alarm',
        data: data.data,
        backgroundColor: 'rgba(0, 202, 220, 0.55)',
        borderColor: '#00cadc',
        borderWidth: 1,
        borderRadius: 4,
      }],
    },
    options: chartOptions(true),
  });
}

function chartOptions(compact) {
  return {
    responsive: true,
    maintainAspectRatio: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        display: !compact,
        position: 'bottom',
        labels: { color: '#8b9cb3', boxWidth: 12, font: { size: 11 } },
      },
      tooltip: {
        backgroundColor: '#1e2836',
        titleColor: '#e8edf4',
        bodyColor: '#8b9cb3',
        borderColor: '#2d3748',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        stacked: !compact,
        grid: { color: '#1e2836' },
        ticks: { color: '#8b9cb3', font: { size: 10 } },
      },
      y: {
        stacked: !compact,
        grid: { color: '#1e2836' },
        ticks: { color: '#8b9cb3', font: { size: 10 }, stepSize: compact ? 2 : undefined },
        title: compact ? { display: false } : { display: true, text: 'dk', color: '#8b9cb3' },
      },
    },
  };
}

function initLogScroll() {
  const track = document.getElementById('log-track');
  if (track) track.innerHTML += track.innerHTML;
}

function initNotifications() {
  const wrap = document.getElementById('notif-wrap');
  const btn = document.getElementById('notif-btn');
  const dropdown = document.getElementById('notif-dropdown');
  if (!wrap || !btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.hidden = !dropdown.hidden;
  });

  document.addEventListener('click', () => {
    dropdown.hidden = true;
  });

  wrap.addEventListener('click', (e) => e.stopPropagation());

  if (typeof EventSource !== 'undefined') {
    const source = new EventSource('/api/stream');
    source.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.type === 'alarm') {
          showToast(payload.data);
          bumpNotifCount();
          prependDropdownItem(payload.data);
          if (window.prependFeedItem) {
            window.prependFeedItem(payload.data);
          }
          if (window.prependActivity) {
            window.prependActivity(payload.data);
          }
        }
      } catch (_) { /* ignore */ }
    };
    source.onerror = () => source.close();
  }
}

function bumpNotifCount() {
  const el = document.getElementById('notif-count');
  if (el) {
    el.textContent = String(parseInt(el.textContent, 10) + 1);
    return;
  }
  const btn = document.getElementById('notif-btn');
  if (!btn) return;
  const span = document.createElement('span');
  span.className = 'notif-count';
  span.id = 'notif-count';
  span.textContent = '1';
  btn.appendChild(span);
}

function prependDropdownItem(alarm) {
  const list = document.querySelector('.nd-list');
  if (!list) return;
  const a = document.createElement('a');
  a.href = '/izleme';
  a.className = `nd-item sev-${alarm.severity}`;
  a.innerHTML = `
    <i data-lucide="${alarm.icon || 'bell'}"></i>
    <div>
      <span class="nd-title">${escapeHtml(alarm.title)}</span>
      <span class="nd-meta">${escapeHtml(alarm.camera)} · Az önce</span>
    </div>`;
  list.prepend(a);
  if (window.lucide) lucide.createIcons({ nodes: [a] });
  while (list.children.length > 6) list.lastElementChild.remove();
}

function showToast(alarm) {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;

  const toast = document.createElement('div');
  toast.className = `toast sev-${alarm.severity}`;
  toast.innerHTML = `
    <div class="toast-icon"><i data-lucide="${alarm.icon || 'bell-ring'}"></i></div>
    <div class="toast-body">
      <h4>${escapeHtml(alarm.type)} — ${escapeHtml(alarm.title)}</h4>
      <p>${escapeHtml(alarm.camera)}</p>
    </div>
    <button type="button" class="toast-close" aria-label="Kapat">&times;</button>`;

  toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
  stack.prepend(toast);
  if (window.lucide) lucide.createIcons({ nodes: [toast] });

  setTimeout(() => toast.remove(), 8000);
  while (stack.children.length > 4) stack.lastElementChild.remove();
}

function initAlarmPage() {
  const jsonEl = document.getElementById('alarms-json');
  const feed = document.getElementById('alarm-feed');
  if (!jsonEl || !feed) return;

  let alarms = JSON.parse(jsonEl.textContent);
  let selectedId = alarms[0]?.id;

  const feedItems = () => feed.querySelectorAll('.feed-item');

  feedItems().forEach((item) => {
    item.addEventListener('click', () => selectAlarm(parseInt(item.dataset.id, 10)));
  });

  if (feedItems()[0]) {
    feedItems()[0].classList.add('active');
    selectAlarm(alarms[0].id);
  }

  document.getElementById('type-filters')?.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#type-filters .chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    applyFilters();
  });

  document.getElementById('severity-filter')?.addEventListener('change', applyFilters);
  document.getElementById('status-filter')?.addEventListener('change', applyFilters);

  document.getElementById('btn-assign')?.addEventListener('click', () => updateStatus('investigating', 'Emre Y.'));
  document.getElementById('btn-resolve')?.addEventListener('click', () => updateStatus('resolved'));
  document.getElementById('btn-dismiss')?.addEventListener('click', () => updateStatus('resolved'));

  function selectAlarm(id) {
    selectedId = id;
    const alarm = alarms.find((a) => a.id === id);
    if (!alarm) return;

    feedItems().forEach((el) => el.classList.toggle('active', parseInt(el.dataset.id, 10) === id));
    elSet('detail-type', alarm.type);
    setBadge('detail-sev', SEV_LABELS[alarm.severity] || alarm.severity, `badge-sev sev-${alarm.severity}`);
    setBadge('detail-status', STATUS_LABELS[alarm.status] || alarm.status, `badge-status st-${alarm.status}`);
    elSet('detail-title', alarm.title);
    elSet('detail-desc', alarm.desc || '');
    elSet('detail-camera', alarm.camera);
    elSet('detail-zone', alarm.zone || '—');
    elSet('detail-conf', `%${alarm.confidence}`);
    elSet('detail-assignee', alarm.assignee || '—');
    elSet('detail-time', alarm.time);
    const img = document.getElementById('detail-img');
    if (img && alarm.thumb) img.src = `/static/img/${alarm.thumb}`;
  }

  function elSet(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function setBadge(id, text, className) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    el.className = className;
  }

  function applyFilters() {
    const type = document.querySelector('#type-filters .chip.active')?.dataset.filterType || 'all';
    const sev = document.getElementById('severity-filter')?.value || 'all';
    const status = document.getElementById('status-filter')?.value || 'all';
    let visible = 0;

    feedItems().forEach((item) => {
      const match =
        (type === 'all' || item.dataset.type === type) &&
        (sev === 'all' || item.dataset.severity === sev) &&
        (status === 'all' || item.dataset.status === status);
      item.classList.toggle('hidden', !match);
      if (match) visible += 1;
    });

    const countEl = document.getElementById('feed-count');
    if (countEl) countEl.textContent = `${visible} kayıt`;
  }

  function updateStatus(status, assignee) {
    const alarm = alarms.find((a) => a.id === selectedId);
    if (!alarm) return;
    alarm.status = status;
    if (assignee) alarm.assignee = assignee;
    const item = feed.querySelector(`[data-id="${selectedId}"]`);
    if (item) item.dataset.status = status;
    selectAlarm(selectedId);
    applyFilters();
  }

  window.prependFeedItem = function prependFeedItem(alarm) {
    alarms.unshift(alarm);
    const article = document.createElement('article');
    article.className = `feed-item sev-${alarm.severity} is-new active`;
    article.dataset.id = alarm.id;
    article.dataset.type = alarm.type;
    article.dataset.severity = alarm.severity;
    article.dataset.status = alarm.status;
    article.innerHTML = `
      <div class="fi-icon"><i data-lucide="${alarm.icon || 'bell'}"></i></div>
      <div class="fi-body">
        <div class="fi-top">
          <span class="fi-type">${escapeHtml(alarm.type)}</span>
          <span class="fi-new">YENİ</span>
          <span class="fi-time">Az önce</span>
        </div>
        <h3>${escapeHtml(alarm.title)}</h3>
        <p>${escapeHtml(alarm.camera)}</p>
      </div>
      <span class="fi-sev">${alarm.severity}</span>`;
    article.addEventListener('click', () => selectAlarm(alarm.id));
    feed.prepend(article);
    feedItems().forEach((el) => {
      if (parseInt(el.dataset.id, 10) !== alarm.id) el.classList.remove('active');
    });
    if (window.lucide) lucide.createIcons({ nodes: [article] });
    selectAlarm(alarm.id);
    const countEl = document.getElementById('feed-count');
    if (countEl) countEl.textContent = `${feed.querySelectorAll('.feed-item:not(.hidden)').length} kayıt`;
  };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function initMonitor() {
  const feed = document.getElementById('video-feed');
  if (!feed) return;

  document.querySelectorAll('.spark').forEach((canvas) => {
    const raw = canvas.dataset.series;
    if (!raw) return;
    const series = raw.split(',').map(Number);
    const color = canvas.dataset.color || '#00cadc';
    const ctx = canvas.getContext('2d');
    const w = canvas.width = 72;
    const h = canvas.height = 24;
    const max = Math.max(...series, 1);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    series.forEach((v, i) => {
      const x = (i / (series.length - 1)) * w;
      const y = h - (v / max) * (h - 4) - 2;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  const track = document.getElementById('timeline-track');
  const playhead = document.getElementById('tl-playhead');
  if (track && playhead) {
    track.addEventListener('click', (e) => {
      const rect = track.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      playhead.style.left = `${pct}%`;
    });
  }

  feed.querySelectorAll('.toggle-row input').forEach((input) => {
    input.addEventListener('change', () => {
      const layer = input.dataset.layer;
      feed.querySelectorAll('.bbox').forEach((box) => {
        if (layer === 'people' && box.classList.contains('bbox-yellow')) {
          box.style.opacity = input.checked ? '1' : '0.15';
        }
        if (layer === 'vehicles' && box.classList.contains('bbox-blue')) {
          box.style.opacity = input.checked ? '1' : '0.15';
        }
      });
    });
  });

  const list = document.getElementById('activity-list');
  const typeFilter = document.getElementById('activity-type-filter');

  function bindActivityCards() {
    list?.querySelectorAll('.activity-card').forEach((card) => {
      card.addEventListener('click', () => {
        list.querySelectorAll('.activity-card').forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        card.classList.remove('is-new');
      });
    });
  }

  bindActivityCards();

  typeFilter?.addEventListener('change', () => {
    const val = typeFilter.value;
    list?.querySelectorAll('.activity-card').forEach((card) => {
      card.classList.toggle('hidden', val !== 'all' && card.dataset.type !== val);
    });
  });

  window.prependActivity = function prependActivity(alarm) {
    if (!list) return;
    const subject = alarm.subject || alarm.title;
    const module = alarm.module || alarm.type;
    const location = alarm.zone || alarm.camera;
    const article = document.createElement('article');
    article.className = `activity-card sev-${alarm.severity} is-new active`;
    article.dataset.id = alarm.id;
    article.dataset.type = alarm.type;
    article.innerHTML = `
      <div class="event-thumb sev-${alarm.severity}"><i data-lucide="${alarm.icon || 'bell'}"></i></div>
      <div class="ac-content">
        <div class="ac-top"><strong>${escapeHtml(subject)}</strong><time>${escapeHtml(alarm.time)}</time></div>
        <p>${escapeHtml(location)}</p>
        <span class="ac-module">${escapeHtml(module)}</span>
      </div>
      <button type="button" class="ac-menu" aria-label="Menü"><i data-lucide="more-horizontal"></i></button>`;
    article.addEventListener('click', () => {
      list.querySelectorAll('.activity-card').forEach((c) => c.classList.remove('active'));
      article.classList.add('active');
      article.classList.remove('is-new');
    });
    list.prepend(article);
    list.querySelectorAll('.activity-card').forEach((c) => {
      if (c !== article) c.classList.remove('active');
    });
    if (window.lucide) lucide.createIcons({ nodes: [article] });
  };
}
