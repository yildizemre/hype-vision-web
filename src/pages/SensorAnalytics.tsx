import React, { useState } from 'react';
import { Cpu, Activity, Thermometer, Zap, Wifi, Database, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SensorAnalyticsPage = () => {
  const [activeMetric, setActiveMetric] = useState('temperature');
  const { t } = useLanguage();

  const sensorTypes = [
    {
      id: 'temperature',
      name: 'Sıcaklık Sensörü',
      icon: Thermometer,
      color: 'red',
      value: '23.5°C',
      status: 'Normal',
      trend: '+2.1%',
      description: 'Çevre sıcaklığı izleme ve kontrol'
    },
    {
      id: 'humidity',
      name: 'Nem Sensörü',
      icon: Activity,
      color: 'blue',
      value: '68%',
      status: 'Normal',
      trend: '-1.3%',
      description: 'Bağıl nem seviyeleri ölçümü'
    },
    {
      id: 'pressure',
      name: 'Basınç Sensörü',
      icon: Zap,
      color: 'purple',
      value: '1013 hPa',
      status: 'Uyarı',
      trend: '+0.8%',
      description: 'Atmosferik basınç okumaları'
    },
    {
      id: 'vibration',
      name: 'Titreşim Sensörü',
      icon: Activity,
      color: 'green',
      value: '0.3 mm/s',
      status: 'Normal',
      trend: '-5.2%',
      description: 'Mekanik titreşim analizi'
    }
  ];

  const iotDevices = [
    {
      title: 'Endüstriyel IoT Gateway',
      description: 'Çoklu protokol desteği ile sensör verilerini toplar ve buluta gönderir',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['WiFi, Bluetooth, LoRaWAN', '4G/5G Bağlantı', 'Edge Computing', 'Güvenli Veri İletimi'],
      specs: { range: '10km', battery: '5 yıl', sensors: '100+' }
    },
    {
      title: 'Akıllı Sensör Modülü',
      description: 'Çoklu sensör desteği ile çevre koşullarını izler ve analiz eder',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Sıcaklık, Nem, Basınç', 'Hareket Tespiti', 'Ses Seviyesi', 'Hava Kalitesi'],
      specs: { accuracy: '±0.1°C', response: '1s', power: '3.3V' }
    },
    {
      title: 'Kablosuz Veri Logger',
      description: 'Uzun süreli veri kayıt ve analiz için tasarlanmış akıllı cihaz',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Büyük Depolama', 'Otomatik Senkronizasyon', 'Alarm Sistemi', 'Uzaktan Konfigürasyon'],
      specs: { storage: '1GB', interval: '1s-24h', wireless: 'WiFi/BLE' }
    }
  ];

  const applications = [
    {
      title: 'Akıllı Fabrika',
      description: 'Üretim hatları ve ekipman sağlığını gerçek zamanlı izleme',
      icon: Cpu,
      metrics: ['Makine Verimliliği: %94', 'Enerji Tüketimi: -15%', 'Bakım Maliyeti: -30%']
    },
    {
      title: 'Akıllı Binalar',
      description: 'Enerji tüketimi ve konfor optimizasyonu',
      icon: Thermometer,
      metrics: ['Enerji Tasarrufu: %25', 'Konfor Skoru: %92', 'İşletme Maliyeti: -20%']
    },
    {
      title: 'Çevre İzleme',
      description: 'Hava kalitesi ve çevresel koşulların takibi',
      icon: Activity,
      metrics: ['Hava Kalitesi: İyi', 'Gürültü Seviyesi: Normal', 'Uyarı Sistemi: Aktif']
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'Normal': 'text-green-600 bg-green-100',
      'Uyarı': 'text-yellow-600 bg-yellow-100',
      'Kritik': 'text-red-600 bg-red-100'
    };
    return colors[status as keyof typeof colors] || 'text-green-600 bg-green-100';
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      'Normal': CheckCircle,
      'Uyarı': AlertTriangle,
      'Kritik': AlertTriangle
    };
    const Icon = icons[status as keyof typeof icons] || CheckCircle;
    return <Icon className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Activity className="h-4 w-4" />
                <span>Hype Vision Sensor Analytics</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                IoT Sensör
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Analitik</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Binlerce IoT sensörden gerçek zamanlı veri toplama, analiz ve görselleştirme. 
                Akıllı algoritmalar ile öngörülü bakım ve operasyonel verimlilik.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Ücretsiz Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Demo Video</span>
                </button>
              </div>
            </div>

            {/* Live Sensor Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Sensör Paneli</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">8,429 Bağlı</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600">CANLI</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {sensorTypes.slice(0, 4).map((sensor) => (
                    <div
                      key={sensor.id}
                      onClick={() => setActiveMetric(sensor.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        activeMetric === sensor.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <sensor.icon className={`h-6 w-6 ${
                          sensor.color === 'red' ? 'text-red-600' :
                          sensor.color === 'blue' ? 'text-blue-600' :
                          sensor.color === 'purple' ? 'text-purple-600' :
                          'text-green-600'
                        }`} />
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sensor.status)}`}>
                          {getStatusIcon(sensor.status)}
                          <span>{sensor.status}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-gray-900">{sensor.value}</p>
                          <span className={`text-xs font-medium ${
                            sensor.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {sensor.trend}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{sensor.name}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">Sensör Trendleri</h4>
                    <div className="flex space-x-2">
                      <button className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded font-medium">1S</button>
                      <button className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded">24S</button>
                    </div>
                  </div>
                  
                  <div className="h-32 bg-white rounded border border-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">Gerçek Zamanlı Grafik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Devices Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IoT <span className="text-green-600">Cihazlarımız</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Endüstriyel kalitede IoT cihazları ile her türlü ortamda güvenilir veri toplama
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {iotDevices.map((device, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={device.image}
                  alt={device.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{device.title}</h3>
                  <p className="text-gray-600 mb-4">{device.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Özellikler:</p>
                    <div className="space-y-1">
                      {device.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-2 bg-green-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(device.specs).map(([key, value], specIndex) => (
                      <div key={specIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-green-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                    Teknik Detaylar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Uygulama <span className="text-green-600">Alanları</span>
            </h2>
            <p className="text-xl text-gray-600">
              IoT sensör analitik çözümlerimizin kullanıldığı başlıca alanlar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <app.icon className="h-8 w-8 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{app.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{app.description}</p>
                
                <div className="space-y-2">
                  {app.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">{metric.split(':')[0]}:</span>
                      <span className="text-sm font-bold text-green-600">{metric.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Sorunsuz Entegrasyon</h2>
            <p className="text-green-100 text-lg">Herhangi bir sensör, herhangi bir protokol, her yerde bağlantı</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Kablosuz Protokoller</h4>
                <p className="text-green-100 text-sm">WiFi, Bluetooth, LoRaWAN, Zigbee</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Veri Depolama</h4>
                <p className="text-green-100 text-sm">Bulut, Edge, Hibrit çözümler</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Gerçek Zamanlı İşleme</h4>
                <p className="text-green-100 text-sm">Edge bilişim, Akış analitik</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">AI Analitik</h4>
                <p className="text-green-100 text-sm">Makine öğrenmesi, Öngörülü içgörüler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            IoT Altyapınızı Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Hype Vision Sensor Analytics ile operasyonel verimliliğinizi %45 artırın ve bakım maliyetlerinizi %30 azaltın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-semibold">
              Ücretsiz Demo Talep Et
            </button>
            <button className="text-gray-700 px-8 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 font-semibold">
              IoT Cihaz Kataloğu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SensorAnalyticsPage;