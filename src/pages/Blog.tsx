import React, { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight, TrendingUp, Zap, Brain, Eye, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState(null);

  const featuredPost = {
    title: 'Yapay Zeka ile Endüstriyel Dönüşüm: 2024 Trendleri',
    excerpt: 'Endüstriyel yapay zeka alanındaki en son gelişmeler ve 2024 yılında beklenen trendler. Üretim sektöründe AI\'nin geleceği ve işletmelere etkileri.',
    author: 'Dr. Ahmet Yılmaz',
    date: '15 Mart 2024',
    readTime: '8 dk okuma',
    category: 'AI Trends',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    featured: true
  };

  const blogPosts = [
    {
      title: 'İSG Güvenliğinde Yapay Zeka: Baret Tespiti Teknolojisi',
      excerpt: 'Şantiye güvenliğinde yapay zeka kullanımı ve baret tespiti sistemlerinin işletmelere sağladığı faydalar.',
      author: 'Mühendis Ayşe Demir',
      date: '12 Mart 2024',
      readTime: '6 dk okuma',
      category: 'Güvenlik',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      icon: Eye
    },
    {
      title: 'Kalite Kontrolde Computer Vision: Otomotiv Sektörü Örneği',
      excerpt: 'Otomotiv üretiminde görüntü işleme teknolojilerinin kullanımı ve kalite kontrol süreçlerindeki devrim.',
      author: 'Can Özkan',
      date: '10 Mart 2024',
      readTime: '7 dk okuma',
      category: 'Kalite',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      icon: Zap
    },
    {
      title: 'Tekstil Sektöründe AI: Kumaş Kalite Analizi',
      excerpt: 'Tekstil üretiminde yapay zeka ile kumaş kalite kontrolü ve uzunluk ölçümü sistemlerinin avantajları.',
      author: 'Prof. Dr. Elif Kaya',
      date: '8 Mart 2024',
      readTime: '5 dk okuma',
      category: 'Tekstil',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      icon: Brain
    },
    {
      title: 'IoT ve AI Entegrasyonu: Akıllı Fabrikalar',
      excerpt: 'Nesnelerin interneti ve yapay zeka teknolojilerinin entegrasyonu ile akıllı fabrika çözümleri.',
      author: 'Mühendis Mehmet Yılmaz',
      date: '5 Mart 2024',
      readTime: '9 dk okuma',
      category: 'IoT',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      icon: TrendingUp
    },
    {
      title: 'Gıda Güvenliğinde AI: Hijyen Kontrolü Sistemleri',
      excerpt: 'Gıda üretim tesislerinde yapay zeka destekli hijyen kontrolü ve personel güvenliği uygulamaları.',
      author: 'Dr. Fatma Arslan',
      date: '3 Mart 2024',
      readTime: '6 dk okuma',
      category: 'Gıda',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      icon: Eye
    },
    {
      title: 'Enerji Sektöründe Predictive Maintenance',
      excerpt: 'Enerji tesislerinde öngörülü bakım sistemleri ve yapay zeka ile ekipman izleme çözümleri.',
      author: 'Mühendis Okan Demir',
      date: '1 Mart 2024',
      readTime: '8 dk okuma',
      category: 'Enerji',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      icon: Zap
    }
  ];

  const categories = [
    { name: 'Tümü', count: 24, active: true },
    { name: 'AI Trends', count: 8 },
    { name: 'Güvenlik', count: 6 },
    { name: 'Kalite', count: 5 },
    { name: 'Tekstil', count: 3 },
    { name: 'IoT', count: 2 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <BookOpen className="h-4 w-4" />
              <span>Hype Vision AI Blog</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI ve Teknoloji
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> İçgörüleri</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Yapay zeka, endüstriyel otomasyon ve teknoloji dünyasından en güncel haberler, 
              derinlemesine analizler ve uzman görüşleri.
            </p>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Makale</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Okuyucu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Haftalık</div>
                <div className="text-sm text-gray-600">Yeni İçerik</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan <span className="text-purple-600">Makale</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Öne Çıkan
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{featuredPost.author}</div>
                      <div className="text-sm text-gray-500">{featuredPost.readTime}</div>
                    </div>
                  </div>
                  
                  <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
                    <span>Devamını Oku</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  category.active
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Son <span className="text-purple-600">Makaleler</span>
            </h2>
            <p className="text-xl text-gray-600">
              AI ve teknoloji dünyasından en güncel içerikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <post.icon className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.readTime}</div>
                      </div>
                    </div>
                    
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-1 group">
                      <span>Oku</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold">
              Daha Fazla Makale Yükle
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            AI Dünyasından Haberdar Olun
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Haftalık bültenimize abone olun ve en son AI trendlerini kaçırmayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;