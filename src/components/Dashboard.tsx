import React, { useMemo, useState } from 'react';
import { TrendingUp, TrendingDown, Factory, Eye, Activity, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Üretim trend verisi — Kalite ve Verimlilik serileri
const generateProductionTrend = (points: number, baseQ: number, baseE: number) => {
  const quality: number[] = [];
  const efficiency: number[] = [];
  let q = baseQ;
  let e = baseE;
  for (let i = 0; i < points; i++) {
    q = Math.max(85, Math.min(99, q + (Math.random() - 0.45) * 3));
    e = Math.max(88, Math.min(98, e + (Math.random() - 0.4) * 2.5));
    quality.push(q);
    efficiency.push(e);
  }
  return { quality, efficiency };
};

const ProductionTrendChart = ({ range }: { range: '1S' | '24S' | '7G' }) => {
  const points = range === '1S' ? 12 : range === '24S' ? 24 : 7;
  const { quality, efficiency } = useMemo(() => generateProductionTrend(points, 95, 92), [points]);
  const width = 560;
  const height = 220;
  const padding = { top: 20, right: 20, bottom: 32, left: 44 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const all = [...quality, ...efficiency];
  const min = Math.min(...all);
  const max = Math.max(...all);
  const rangeVal = max - min || 1;
  const xScale = (i: number) => padding.left + (i / Math.max(1, quality.length - 1)) * chartW;
  const yScale = (v: number) => padding.top + chartH - ((v - min) / rangeVal) * chartH;

  const pathQuality = quality.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(v)}`).join(' ');
  const pathEfficiency = efficiency.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(v)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full min-h-[220px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="prodQualityGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="prodEffGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={padding.left} y1={padding.top + (i / 4) * chartH} x2={width - padding.right} y2={padding.top + (i / 4) * chartH} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4" />
      ))}
      {[0, 0.25, 0.5, 0.75, 1].map((i, idx) => (
        <line key={idx} x1={padding.left + i * chartW} y1={padding.top} x2={padding.left + i * chartW} y2={height - padding.bottom} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4" />
      ))}
      {/* Y labels */}
      {[min, (min + max) / 2, max].map((v, i) => (
        <text key={i} x={padding.left - 6} y={yScale(v) + 4} textAnchor="end" fill="#6b7280" style={{ fontSize: 10 }}>{v.toFixed(0)}%</text>
      ))}
      {/* Kalite alan */}
      <path d={`${pathQuality} L ${xScale(quality.length - 1)} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`} fill="url(#prodQualityGrad)" />
      {/* Verimlilik alan */}
      <path d={`${pathEfficiency} L ${xScale(efficiency.length - 1)} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`} fill="url(#prodEffGrad)" />
      {/* Çizgiler */}
      <path d={pathQuality} fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={pathEfficiency} fill="none" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4" />
      {/* Noktalar */}
      {quality.map((v, i) => (
        <circle key={`q-${i}`} cx={xScale(i)} cy={yScale(v)} r="2.5" fill="#2563eb" stroke="white" strokeWidth="1" />
      ))}
      {efficiency.map((v, i) => (
        <circle key={`e-${i}`} cx={xScale(i)} cy={yScale(v)} r="2.5" fill="#9333ea" stroke="white" strokeWidth="1" />
      ))}
      {/* Legend */}
      <g transform={`translate(${width - padding.right - 100}, ${padding.top - 2})`}>
        <line x1="0" y1="0" x2="14" y2="0" stroke="#2563eb" strokeWidth="2.5" />
        <text x="18" y="4" fill="#374151" style={{ fontSize: 10 }}>Kalite Skoru</text>
        <line x1="0" y1="14" x2="14" y2="14" stroke="#9333ea" strokeWidth="2" strokeDasharray="4 3" />
        <text x="18" y="18" fill="#374151" style={{ fontSize: 10 }}>Verimlilik</text>
      </g>
    </svg>
  );
};

const Dashboard = () => {
  const { t } = useLanguage();
  const [trendRange, setTrendRange] = useState<'1S' | '24S' | '7G'>('1S');

  const metrics = [
    {
      title: 'Aktif Üretim Hattı',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: Factory,
      color: 'green'
    },
    {
      title: 'Kalite Uyarısı',
      value: '3',
      change: '-5',
      trend: 'down',
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      title: 'Kalite Skoru',
      value: '98.7%',
      change: '+2.3%',
      trend: 'up',
      icon: Eye,
      color: 'blue'
    },
    {
      title: 'Üretim Verimliliği',
      value: '94.2%',
      change: '+8.7%',
      trend: 'up',
      icon: Activity,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-50 text-green-600 border-green-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            MES Kontrol
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Paneli</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Üretim süreçlerinizi gerçek zamanlı izleyin ve yönetin
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">MES Üretim Kontrol Paneli</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Son güncelleme: 2 dakika önce</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Canlı</span>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${getColorClasses(metric.color)}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="h-8 w-8" />
                    <div className={`flex items-center space-x-1 text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{metric.change}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Main Chart */}
              <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Üretim Trendleri</h4>
                  <div className="flex items-center gap-1">
                    {(['1S', '24S', '7G'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setTrendRange(r)}
                        className={`min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 px-4 py-2.5 sm:py-1.5 text-sm rounded-lg font-medium transition-colors ${
                          trendRange === r ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Gerçek zamanlı veri güncellemeleri</p>
                <div className="h-56 sm:h-64 bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <ProductionTrendChart range={trendRange} />
                </div>
              </div>

              {/* Side Panel */}
              <div className="space-y-4 sm:space-y-6">
                {/* Active Production Lines */}
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Aktif Üretim Hatları</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <Factory className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 1 - Elektronik</p>
                        <p className="text-xs text-gray-600">Verimlilik: %94</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 2 - Montaj</p>
                        <p className="text-xs text-gray-600">Kalite: %98.7</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 3 - Bakım</p>
                        <p className="text-xs text-gray-600">Planlı bakım: 2 saat</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Son Aktiviteler</h4>
                  <div className="space-y-3">
                    {[
                      { action: 'Yeni iş emri oluşturuldu', time: '2 dk önce', type: 'production' },
                      { action: 'Kalite raporu tamamlandı', time: '5 dk önce', type: 'quality' },
                      { action: 'ERP senkronizasyonu', time: '12 dk önce', type: 'integration' },
                      { action: 'Üretim hedefi güncellendi', time: '18 dk önce', type: 'planning' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          item.type === 'production' ? 'bg-green-500' :
                          item.type === 'quality' ? 'bg-blue-500' :
                          item.type === 'integration' ? 'bg-purple-500' : 'bg-orange-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{item.action}</p>
                          <p className="text-xs text-gray-500">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;