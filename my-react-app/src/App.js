import React, { useState, useRef, useEffect } from 'react';
import { Globe, MapPin, Phone, Mail, Download, ChevronRight, ZoomIn, Calendar } from 'lucide-react';

const App = () => {
  const [language, setLanguage] = useState('ru');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const sections = {
    hero: useRef(null),
    about: useRef(null),
    products: useRef(null),
    clients: useRef(null),
    advantages: useRef(null),
    certificates: useRef(null),
    news: useRef(null),
    contact: useRef(null)
  };

  const t = (key) => {
    const translations = {
      // Navigation
      about: { ru: 'О компании', uz: 'Kompaniya haqida' },
      products: { ru: 'Продукция', uz: 'Mahsulotlar' },
      clients: { ru: 'Клиенты', uz: 'Mijozlar' },
      advantages: { ru: 'Преимущества', uz: 'Afzalliklar' },
      certificates: { ru: 'Сертификаты', uz: 'Sertifikatlar' },
      news: { ru: 'Новости', uz: 'Yangiliklar' },
      contact: { ru: 'Контакты', uz: 'Aloqa' },
      
      // Hero
      heroTitle: { 
        ru: 'TOP GOLD — надёжный поставщик для флексо- и глубокой печати', 
        uz: 'TOP GOLD — fleksografik va rotogravyur bosma uchun ishonchli hamkor' 
      },
      heroSubtitle: { 
        ru: 'Надежность • Качество • Инновации • Эффективность', 
        uz: 'Ishonchlilik • Sifat • Innovatsiyalar • Samaradorlik' 
      },
      learnMore: { ru: 'Узнать больше', uz: 'Batafsil ma’lumot' },
      
      // About
      aboutTitle: { ru: 'О компании', uz: 'Kompaniya haqida' },
      aboutContent: {
        ru: 'Основанная в 2015 году, LLC "Top Gold" является ведущим поставщиком печатных материалов и промышленных расходников в Узбекистане. Мы гордимся нашим собственным производством лаков и печатных красок в Ташкенте, что обеспечивает стабильное качество и оперативную доставку продукции нашим клиентам.',
        uz: '2015-yilda tashkil etilgan TOP GOLD MChJ O‘zbekistonda bosma materiallari va sanoat sarflarining yetakchi yetkazib beruvchisidir. Toshkentda lakkalar va bosma bo‘yoqlarni o‘zimiz ishlab chiqaramiz, bu mijozlarimizga barqaror sifat va tezkor yetkazib berishni ta\'minlaydi.'
      },
      mission: { ru: 'Наша миссия — обеспечивать инновационные решения для современной печатной индустрии, поддерживая стандарты качества мирового уровня.', uz: 'Bizning vazifamiz — zamonaviy bosish sanoatiga innovatsion yechimlarni taqdim etish va xalqaro sifat standartlarini qo‘llab-quvvatlash.' },
      industries: { ru: 'Отрасли применения', uz: 'Qo‘llash sohalari' },
      packaging: { ru: 'Упаковка', uz: 'Qadoqlash' },
      labels: { ru: 'Этикетки', uz: 'Yorliqlar' },
      food: { ru: 'Пищевая промышленность', uz: 'Oziq-ovqat sanoati' },
      pharma: { ru: 'Фармацевтика', uz: 'Farmatsevtika' },
      cosmetics: { ru: 'Косметика', uz: 'Kosmetika' },
      
      // Products
      productsTitle: { ru: 'Продукция и услуги', uz: 'Mahsulotlar va xizmatlar' },
      flexoPrinting: { ru: 'Флексопечать', uz: 'Fleksografik bosma' },
      gravurePrinting: { ru: 'Глубокая печать', uz: 'Rotogravyur' },
      flexoItems: {
        ru: ['Печатные краски', 'Анилоксовые валы', 'Средства для очистки', 'Добавки', 'Лаки', 'Монтажные ленты'],
        uz: ['Bosma bo‘yoqlar', 'Aniloks valiklar', 'Tozalash vositalari', 'Qo‘shimchalar', 'Lakkalar', 'Montaj lentlari']
      },
      gravureItems: {
        ru: ['Печатные краски', 'Моющие растворы', 'Грунтовки', 'Растворители', 'Расходники для цилиндров'],
        uz: ['Bosma bo‘yoqlar', 'Yuvish eritmalari', 'Gruntlovkalar', 'Erituvchilar', 'Tsilindr sarflari']
      },
      
      // Clients
      clientsTitle: { ru: 'Кому мы помогаем', uz: 'Kimlarga yordam beramiz' },
      clientTypes: {
        ru: [
          'Производители гибкой упаковки',
          'Производители этикеток',
          'Пищевая упаковка',
          'Косметическая и фармацевтическая упаковка',
          'Предприятия высококачественной печати'
        ],
        uz: [
          'Moslanuvchan qadoqlash ishlab chiqaruvchilari',
          'Yorliq ishlab chiqaruvchilari',
          'Oziq-ovqat qadoqlash',
          'Kosmetik va farmatsevtik qadoqlash kompaniyalari',
          'Yuqori sifatli bosish korxonalari'
        ]
      },
      
      // Advantages
      advantagesTitle: { ru: 'Наши преимущества', uz: 'Afzalliklarimiz' },
      wideAssortment: { ru: 'Широкий ассортимент', uz: 'Keng assortiment' },
      expertConsultation: { ru: 'Консультации специалистов', uz: 'Mutaxassislar maslahatlari' },
      fastDelivery: { ru: 'Быстрая доставка', uz: 'Tezkor yetkazib berish' },
      partnershipTerms: { ru: 'Партнёрские условия', uz: 'Hamkorlik shartlari' },
      testingSupport: { ru: 'Поддержка в тестировании', uz: 'Sinovda yordam' },
      
      // Certificates
      certificatesTitle: { ru: 'Сертификаты', uz: 'Sertifikatlar' },
      viewCertificate: { ru: 'Просмотреть сертификат', uz: 'Sertifikatni ko‘rish' },
      certificateAlt: { ru: 'Сертификат качества ISO 9001', uz: 'ISO 9001 sifat sertifikati' },
      
      // News
      newsTitle: { ru: 'Новости и обновления', uz: 'Yangiliklar va yangilanishlar' },
      newsItems: {
        ru: [
          { title: 'Новые технологии флексопечати', date: '15.03.2024', excerpt: 'Внедрение инновационных красок для пищевой упаковки.' },
          { title: 'Расширение производства', date: '02.02.2024', excerpt: 'Открытие нового цеха по производству лаков в Ташкенте.' },
          { title: 'Сертификация качества', date: '18.01.2024', excerpt: 'Получение международного сертификата ISO 9001.' }
        ],
        uz: [
          { title: 'Yangi fleksografik bosish texnologiyalari', date: '15.03.2024', excerpt: 'Oziq-ovqat qadoqlash uchun innovatsion bo‘yoqlarni joriy etish.' },
          { title: 'Ishlab chiqarishni kengaytirish', date: '02.02.2024', excerpt: 'Toshkentda lakkalar ishlab chiqarishning yangi sexini ochish.' },
          { title: 'Sifat sertifikatsiyasi', date: '18.01.2024', excerpt: 'Xalqaro ISO 9001 sertifikatini olish.' }
        ]
      },
      
      // Contact
      contactTitle: { ru: 'Контакты', uz: 'Aloqa' },
      companyInfo: { ru: 'Юридическая информация', uz: 'Yuridik ma’lumot' },
      legalName: { ru: 'LLC "Top Gold"', uz: 'TOP GOLD MChJ' },
      address: { 
        ru: 'Сергелийский район, МФЙ Кохна Кумарик, улица Ташкентская кольцевая автомобильная дорога, дом 152, Ташкент, Республика Узбекистан', 
        uz: 'Sergeli tumani, Koh’hna Qumariq MFY, Toshkent Halqa Avtomobil Yo’li Ko’chasi, 152-Uy, Toshkent, O‘zbekiston Respublikasi' 
      },
      nameLabel: { ru: 'Имя', uz: 'Ism' },
      emailLabel: { ru: 'Email', uz: 'Email' },
      phoneLabel: { ru: 'Телефон', uz: 'Telefon' },
      messageLabel: { ru: 'Сообщение', uz: 'Xabar' },
      sendButton: { ru: 'Отправить', uz: 'Yuborish' },
      directorInfo: { ru: 'Директор: LLC “Top Gold”', uz: 'Direktor: Ahmadov Ahmad' },
      
      // Footer
      allRights: { ru: 'Все права защищены', uz: 'Barcha huquqlar himoyalangan' }
    };
    
    return translations[key]?.[language] || key;
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const section = sections[sectionId].current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      Object.entries(sections).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(language === 'ru' ? 'Сообщение отправлено!' : 'Xabar yuborildi!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Certificate Modal */}
      {isCertificateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="text-lg font-semibold">{t('certificatesTitle')}</h3>
              <button
                onClick={() => setIsCertificateModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <img
                src="sertifikatgold.PNG"
                alt={t('certificateAlt')}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full"></div>
                <span className="text-xl font-bold text-gray-900">TOP GOLD</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: t('about') },
                { id: 'products', label: t('products') },
                { id: 'clients', label: t('clients') },
                { id: 'advantages', label: t('advantages') },
                { id: 'certificates', label: t('certificates') },
                { id: 'news', label: t('news') },
                { id: 'contact', label: t('contact') }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'ru' ? 'uz' : 'ru')}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'ru' ? 'UZ' : 'RU'}</span>
              </button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {[
                { id: 'about', label: t('about') },
                { id: 'products', label: t('products') },
                { id: 'clients', label: t('clients') },
                { id: 'advantages', label: t('advantages') },
                { id: 'certificates', label: t('certificates') },
                { id: 'news', label: t('news') },
                { id: 'contact', label: t('contact') }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={sections.hero} className="pt-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('heroSubtitle')}
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-yellow-600 transition-all flex items-center mx-auto text-lg"
            >
              {t('learnMore')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sections.about} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('aboutContent')}
              </p>
              <p className="text-lg text-gray-700 mb-8 font-medium">
                {t('mission')}
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('industries')}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[t('packaging'), t('labels'), t('food'), t('pharma'), t('cosmetics')].map((industry, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">TG</span>
                  </div>
                  <p className="text-gray-600 text-lg">Tashkent Production Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={sections.products} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('productsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Flexographic Printing */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t('flexoPrinting')}
              </h3>
              <ul className="space-y-3">
                {t('flexoItems').map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Gravure Printing */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t('gravurePrinting')}
              </h3>
              <ul className="space-y-3">
                {t('gravureItems').map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Product Gallery */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'ru' ? 'Галерея продукции' : 'Mahsulotlar galereyasi'}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img
                  src="product3.jpg"
                  alt={`Product ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600 text-center">
                    {language === 'ru' ? `Продукт ${item}` : `Mahsulot ${item}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section ref={sections.clients} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('clientsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('clientTypes').map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">{client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section ref={sections.advantages} className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('advantagesTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('wideAssortment'), icon: '📦' },
              { title: t('expertConsultation'), icon: '👨‍💼' },
              { title: t('fastDelivery'), icon: '🚚' },
              { title: t('partnershipTerms'), icon: '🤝' },
              { title: t('testingSupport'), icon: '🔬' }
            ].map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {advantage.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section ref={sections.certificates} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('certificatesTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <div 
              className="cursor-pointer group"
              onClick={() => setIsCertificateModalOpen(true)}
            >
              <img
                src="sertifikatgold.PNG"
                alt={t('certificateAlt')}
                className="w-full h-auto rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="mt-4 flex items-center justify-center text-blue-600 font-medium">
                <ZoomIn className="w-4 h-4 mr-2" />
                {t('viewCertificate')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section ref={sections.news} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('newsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('newsItems').map((news, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-600 font-medium mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sections.contact} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contactTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {t('companyInfo')}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('legalName')}
                  </h4>
                  <p className="text-gray-600">{t('legalName')}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Адрес
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('address')}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('directorInfo')}
                  </h4>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('nameLabel')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('messageLabel')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-yellow-600 transition-all"
                >
                  {t('sendButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full"></div>
              <span className="text-xl font-bold">TOP GOLD</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('heroSubtitle')}
            </p>
            <p className="text-sm text-gray-500">
              © 2024 {t('legalName')}. {t('allRights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;