export default {
  categories: {
    genel: {
      label: 'General & System',
      items: [
        {
          q: 'How does the system work?',
          a: 'The Hype Vision image processing infrastructure analyzes live video streams from on-site IP cameras (RTSP/ONVIF compatible) in real time. Video is sent to an edge server or designated processing unit; deep learning algorithms detect objects, people, equipment, behavior, and operational flows. Data is processed not as raw video but as events, alarms, counters, durations, violation records, and performance metrics, then forwarded to a central dashboard. On the production side, efficiency, downtime, cycle time, and OEE are tracked; on the HSE side, PPE violations, hazardous area entry, and forklift-pedestrian risks are detected instantly. The API infrastructure can integrate with ERP, SAP, and other enterprise systems.',
        },
        {
          q: 'What sets you apart from competitors?',
          a: 'Hype Vision is not just a video monitoring system — it is an analytics platform that turns video into operational decisions. Rather than focusing on a single module, it combines MES and HSE scenarios on the same infrastructure. It is not dependent on raw video; it works with structured, production-focused data. It offers Edge, Cloud, and hybrid architecture flexibility. Project-based customization and model optimization deliver enterprise-grade solutions.',
        },
        {
          q: 'Do you own the model training?',
          a: 'Yes. Development and training of core AI models belong to our company. Standard modules come ready to use; for custom scenarios, additional data is collected within the project scope and models are fine-tuned. Model management is centralized, versioned, and updated on a planned schedule.',
        },
        {
          q: 'Can custom models be built?',
          a: 'Yes. For a specific line, product, machine, or custom HSE scenario, data collection, labeling, and model training can be planned. Custom models are integrated into the existing architecture, dashboard, and alarm infrastructure.',
        },
      ],
    },
    kamera: {
      label: 'Camera & Integration',
      items: [
        {
          q: 'Is a camera required? Can we use existing cameras?',
          a: 'The basic requirement is a video source; in most projects, existing IP cameras are used. We work with standard RTSP/ONVIF-compatible streams. For modules such as PPE detection and long-distance area violations, resolution, angle, lens, and lighting can be critical — if sufficient during discovery, we continue as-is; otherwise, optimization is recommended only at the necessary points.',
        },
        {
          q: 'Does it work with RTSP?',
          a: 'Yes. It works with RTSP by default; the stream from the camera is decoded and analyzed in real time. No additional proprietary camera brand or closed system is required.',
        },
        {
          q: 'Does it support ONVIF?',
          a: 'Yes. ONVIF enables camera discovery, stream information retrieval, and profile management. ONVIF is not mandatory because analysis runs over the video stream; all IP cameras with RTSP access are supported.',
        },
        {
          q: 'Which camera brands are supported?',
          a: 'Hikvision, Dahua, Axis, Bosch, Hanwha, Uniview, and other ONVIF/RTSP-compatible IP cameras. Brand does not matter.',
        },
      ],
    },
    mimari: {
      label: 'Architecture & Hardware',
      items: [
        {
          q: 'Edge or Cloud?',
          a: 'Both are possible. Edge is usually preferred in industrial facilities; video does not leave the site and latency stays low. Cloud offers centralized management advantages for multi-site operations. In a hybrid model, critical analysis can run on Edge while reporting stays in the Cloud. The decision is finalized after discovery.',
        },
        {
          q: 'What are the hardware requirements?',
          a: 'Determined by camera count, resolution, FPS, and number of modules. For small projects with 4–8 cameras, a GPU edge server (8–12 GB VRAM), 32 GB RAM, and NVMe SSD may be sufficient. At larger scale, higher VRAM and multi-disk architecture is recommended. The system is GPU-intensive.',
        },
        {
          q: 'What are the GPU requirements?',
          a: 'CUDA and VRAM capacity are critical. 8–12 GB VRAM may be enough for small projects; medium/large scale may need 16–24 GB+ or multiple GPUs. Capacity is calculated based on per-camera processing load.',
        },
        {
          q: 'How many cameras can be processed at once?',
          a: 'Depends on GPU, resolution, FPS, and active modules. On a single-GPU edge server at 1080p, typically 6–12 cameras can be analyzed in real time. With multiple GPUs or Cloud, it scales to dozens of cameras.',
        },
        {
          q: 'What is the FPS limit?',
          a: 'Theoretically up to the FPS provided by the camera; in practice, 10–15 FPS is sufficient for most HSE/production scenarios. For high-speed scenarios, 20–25 FPS may be preferred. Performance-accuracy balance is set per project.',
        },
        {
          q: 'Can it work offline?',
          a: 'Yes, in Edge architecture it can run fully offline. Internet is only needed for remote access or Cloud sync. Even if connectivity drops, analysis continues and data is stored locally.',
        },
      ],
    },
    veri: {
      label: 'Data & GDPR/KVKK',
      items: [
        {
          q: 'Where is data stored?',
          a: 'Determined by architecture and your KVKK/IT policies. Raw video is not stored unless required; event records, alarms, counters, and metrics are kept in the database. On Edge, data stays on-site; in Cloud, in the designated environment. Video recording is handled as a separate policy (NVR or 7/30/90 days).',
        },
        {
          q: 'Is it KVKK compliant?',
          a: 'Yes. Raw images are analyzed instantly rather than stored; only structured outputs are retained. Identification modules such as facial recognition are off by default. On Edge, video does not leave the facility; in Cloud, encryption, access control, and logging are applied.',
        },
        {
          q: 'How is logging handled?',
          a: 'System health, camera connections, alarm generation, user actions, and API calls are logged end to end. Retention is configured per IT/KVKK policy; SIEM integration is possible.',
        },
      ],
    },
    kurulum: {
      label: 'Installation & Licensing',
      items: [
        {
          q: 'How long does installation take?',
          a: '4–8 cameras, standard modules: 1–3 business days. Medium scale: 1–2 weeks. Large/multi-site: 3–6 weeks. Testing and calibration are performed after installation.',
        },
        {
          q: 'What is the licensing model?',
          a: 'Modular structure: per camera + active module. You pay only for the functions you need. Annual or multi-year contracts; enterprise packages available for large projects.',
        },
        {
          q: 'Is training required?',
          a: 'Advanced technical knowledge is not required. Operations teams receive 2–4 hours of role-based training; technical teams get separate admin training. Supported by documentation.',
        },
      ],
    },
    platform: {
      label: 'Platform & API',
      items: [
        {
          q: 'Is there an API?',
          a: 'Yes. A REST-based API provides alarm records, event logs, counter data, OEE/downtime metrics, and system status. ERP, SAP, MES, and BI tools can be integrated. Token-based security.',
        },
        {
          q: 'Can the dashboard be customized?',
          a: 'Yes. Role-based and modular; management, operations, and technical screens can be designed separately. KPIs, charts, shift filters, multi-site views, and corporate branding can be adapted.',
        },
        {
          q: 'How does the alarm mechanism work?',
          a: 'When a violation or critical condition is detected, a timestamped record is created. Thresholds, duration conditions, shift filters, and area rules are configured. Notifications go to the dashboard, email, or API.',
        },
        {
          q: 'What is the latency in ms?',
          a: 'In an optimized Edge setup, from image to alarm generation is typically 100–300 ms. Edge is preferred for critical HSE scenarios.',
        },
        {
          q: 'Is multi-site supported?',
          a: 'Yes. Different facilities are monitored from a central dashboard. Each location can run Edge; data is forwarded to the center. Location filtering with role-based permissions.',
        },
        {
          q: 'Is failover available?',
          a: 'Active-passive or active-active redundancy can be designed for critical projects. Automatic reconnection and status monitoring are available when cameras disconnect.',
        },
      ],
    },
  },
};
