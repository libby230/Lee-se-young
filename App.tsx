
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, Instagram, ArrowUpRight, Star, X, TrendingUp, Target, Rocket, Quote, MessageSquare, Terminal, Handshake } from 'lucide-react';
import { NAV_LINKS, PERFORMANCE_METRICS, CAREER_HISTORY, INTERVIEW_DATA } from './constants.tsx';

interface ModalContent {
  title: string;
  subtitle?: string;
  description: string;
  details: string[];
  type?: 'experience' | 'performance' | 'vision' | 'interview';
}

const Modal: React.FC<{ content: ModalContent; onClose: () => void }> = ({ content, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      <div 
        ref={modalRef}
        className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X size={24} className="text-gray-500" />
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2 block">
              {content.type || 'Details'}
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              {content.title}
            </h3>
            {content.subtitle && (
              <p className="text-lg font-bold text-gray-400 mt-2">{content.subtitle}</p>
            )}
          </div>

          <div className="space-y-8">
            <div className="prose prose-blue">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                {content.description}
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100">
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span> 핵심 포인트
              </h4>
              <ul className="space-y-4">
                {content.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-sm text-gray-700 leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC<{ onScroll: (id: string) => void }> = ({ onScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-black text-blue-600 tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SY.LEE
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.name} 
              onClick={() => onScroll(link.href)}
              className="text-sm font-semibold hover:text-blue-600 transition-colors uppercase"
            >
              {link.name}
            </button>
          ))}
          <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
             <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader: React.FC<{ title: string; index?: string }> = ({ title, index }) => (
  <div className="flex items-center gap-4 mb-12">
    <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
      <span className="text-blue-600">/</span> {title.toUpperCase()}
    </h2>
    <div className="flex-grow h-[1px] bg-gray-200"></div>
    {index && <span className="text-sm font-bold text-gray-400">[{index}]</span>}
  </div>
);

const CareerTimeline: React.FC = () => {
  return (
    <div className="w-full py-8">
      <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-12">CAREER TIMELINE</h4>
      <div className="relative">
        <div className="absolute top-[52px] left-0 w-full h-[2px] bg-gray-200"></div>
        <div className="grid grid-cols-2 relative">
          <div className="relative pt-20">
            <div className="absolute top-[52px] left-0 w-full h-[2px] bg-gray-300 z-10 flex items-center">
               <div className="w-4 h-4 rounded-full bg-blue-600 -ml-2 shrink-0 shadow-lg shadow-blue-600/20"></div>
               <div className="flex-grow"></div>
               <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-gray-300 border-b-[5px] border-b-transparent -mr-1"></div>
            </div>
            <div className="absolute top-0 left-0 flex w-full justify-between pr-4">
              <span className="text-base font-bold text-gray-900">2017</span>
            </div>
            <div className="pr-6">
              <h5 className="text-lg font-black text-gray-900 mb-1 leading-tight">영업기획팀 (광고전략팀), 4년</h5>
              <p className="text-xs font-bold text-gray-400 mb-6">2017 - 2020</p>
              <ul className="space-y-3">
                {[
                  '광고 시장 및 미디어 콘텐츠 분석',
                  '재원 관리 및 정기/상시 판매 가이드 셋팅',
                  '신유형 상품 기획',
                  '판매 시스템 개선'
                ].map((text, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-gray-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
                    <span className="text-sm font-bold text-gray-600">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative pt-20">
            <div className="absolute top-[52px] left-0 w-full h-[2px] bg-gray-300 z-10 flex items-center">
               <div className="w-4 h-4 rounded-full bg-blue-600 -ml-2 shrink-0 shadow-lg shadow-blue-600/20"></div>
               <div className="flex-grow"></div>
               <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-gray-300 border-b-[5px] border-b-transparent -mr-1"></div>
            </div>
            <div className="absolute top-0 left-0 flex w-full justify-between">
              <span className="text-base font-bold text-gray-900">2021</span>
              <span className="text-base font-bold text-gray-900">2025</span>
            </div>
            <div className="pl-6">
              <h5 className="text-lg font-black text-gray-900 mb-1 leading-tight">신규영업팀 (AGILE TF), 5년~ING</h5>
              <p className="text-xs font-bold text-gray-400 mb-6">2021 - PRESENT</p>
              <ul className="space-y-3">
                {[
                  '신규 영업 조직 창립 (AGILE TF로 촉발)',
                  '인/아웃바운드 세일즈 체계 구축',
                  '광고주 통합 매체 플래닝 제안, 세일즈 주력',
                  '캠페인 운영 및 성과 관리'
                ].map((text, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-gray-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
                    <span className="text-sm font-bold text-gray-600">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null);
  const [contactMessage, setContactMessage] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const openPerformanceModal = (index: number) => {
    const metric = PERFORMANCE_METRICS[index];
    setActiveModal({
      title: metric.label,
      subtitle: metric.value,
      description: metric.modalDescription || (metric.subtext + "에 대한 상세 데이터입니다."),
      details: metric.modalDetails || [metric.subtext + "에 대한 상세 데이터입니다."],
      type: 'performance'
    });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim()) {
      alert('메시지를 입력해주세요.');
      return;
    }
    const subject = encodeURIComponent("[Portfolio] 이세영 프로님께 드리는 제안");
    const body = encodeURIComponent(contactMessage);
    window.location.href = `mailto:yg00188@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] selection:bg-blue-600 selection:text-white">
      <Navbar onScroll={scrollToSection} />
      
      {activeModal && (
        <Modal content={activeModal} onClose={() => setActiveModal(null)} />
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 select-none">
          <h1 className="text-[12rem] md:text-[20rem] font-black leading-none outline-text whitespace-nowrap opacity-10">
            BUSINESS PARTNER
          </h1>
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-8 uppercase">Direct Application Portfolio</span>
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-8xl md:text-[11rem] font-black text-blue-600 leading-[0.85] tracking-tighter mb-4">
              LEE SE<br />YOUNG
            </h1>
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl -mt-16 md:-mt-24 cursor-pointer hover:scale-105 transition-transform bg-white">
              <img 
                src="https://github.com/libby230/Lee-se-young/blob/77ed9d2b38340e73e2e76b1eb7d356b83ceb2a8f/unnamed.jpg?raw=true" 
                alt="이세영 프로필" 
                className="w-full h-full object-cover object-center" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
          
          <div className="max-w-3xl space-y-4 px-6 mt-6">
            <p className="text-xl md:text-3xl font-black text-gray-900 leading-tight">
              배달의민족 <span className="text-blue-600">B2B 광고영업</span> 파트에 지원한<br />
              <span className="relative">
                이세영 입니다
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-600/10 -z-10"></span>
              </span>
            </p>
          </div>

          <button onClick={() => scrollToSection('#about')} className="mt-16 flex flex-col items-center gap-4 animate-bounce group">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Explore</span>
            <ChevronDown size={24} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 container mx-auto px-6">
        <SectionHeader title="About" index="01" />
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">
              광고 상품 기획·세일즈·운영 및<br />
              프로세스 고도화 <span className="text-blue-600">Full-Cycle</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              광고 상품 및 영업 전략 '기획' 업무로 커리어 시작하여, 직접 설계한 비대면 영업시스템을 계기로 2인 TF 참여, 연 매출 300억 규모의 10인 팀 성장에 기여했습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {['#돌파력', '#구조화', '#매출성과'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold border border-blue-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
            <CareerTimeline />
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-2 uppercase">
              <span className="text-blue-500">/</span> Performance
            </h2>
            <div className="flex-grow h-[1px] bg-white/10"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {PERFORMANCE_METRICS.map((metric, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => openPerformanceModal(i)}>
                <h3 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-blue-500">{metric.value}</h3>
                <p className="text-xl font-bold mb-1">{metric.label}</p>
                <p className="text-gray-400 text-sm">{metric.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 container mx-auto px-6">
        <SectionHeader title="Experience" index="02" />
        <div className="grid md:grid-cols-3 gap-8">
          {CAREER_HISTORY.map((item) => (
            <div key={item.id} className="bg-white p-10 shadow-xl rounded-3xl flex flex-col h-full border border-gray-100 hover:border-blue-500 transition-all group">
              <h4 className="text-2xl font-black mb-4 leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h4>
              <p className="text-gray-500 text-sm font-medium mb-8 flex-grow">{item.description}</p>
              <div className="pt-6 border-t border-gray-50">
                 <button onClick={() => setActiveModal({ title: item.title, description: item.description, details: item.points, type: 'experience' })} className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-2">Read More <ArrowUpRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Section */}
      <section id="interview" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Interview" index="03" />
          <div className="max-w-5xl mx-auto space-y-24">
            {/* Interview 01 */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
                    <MessageSquare size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-900">{INTERVIEW_DATA[0].name}</h4>
                    <p className="text-blue-600 font-bold">{INTERVIEW_DATA[0].role}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-400 leading-relaxed italic">{INTERVIEW_DATA[0].context}</p>
              </div>
              <div className="lg:col-span-8 bg-blue-50 p-12 md:p-20 rounded-[3rem] relative">
                <div className="absolute -top-10 -left-10 text-blue-600/10 rotate-180">
                  <Quote size={80} />
                </div>
                <p className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                  {INTERVIEW_DATA[0].quote}
                </p>
                <div className="flex gap-2 mt-10">
                  {INTERVIEW_DATA[0].tags.map(tag => <span key={tag} className="text-[10px] font-bold px-3 py-1 border border-blue-200 rounded-full text-blue-600 uppercase">{tag}</span>)}
                </div>
              </div>
            </div>

            {/* Interview 02 */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 order-2 lg:order-1 bg-gray-900 p-12 md:p-20 rounded-[3rem] relative text-white">
                <div className="absolute -bottom-10 -right-10 text-white/5">
                  <Terminal size={80} />
                </div>
                <p className="text-xl md:text-2xl font-black leading-tight">
                  {INTERVIEW_DATA[1].quote}
                </p>
                <div className="flex gap-2 mt-10">
                  {INTERVIEW_DATA[1].tags.map(tag => <span key={tag} className="text-[10px] font-bold px-3 py-1 border border-gray-700 rounded-full text-gray-400 uppercase">{tag}</span>)}
                </div>
              </div>
              <div className="lg:col-span-4 order-1 lg:order-2 sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-900">
                    <Terminal size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-900">{INTERVIEW_DATA[1].name}</h4>
                    <p className="text-gray-500 font-bold">{INTERVIEW_DATA[1].role}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-400 leading-relaxed italic">{INTERVIEW_DATA[1].context}</p>
              </div>
            </div>

            {/* Interview 03 */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <Handshake size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-900">{INTERVIEW_DATA[2].name}</h4>
                    <p className="text-blue-600 font-bold">{INTERVIEW_DATA[2].role}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-400 leading-relaxed italic">{INTERVIEW_DATA[2].context}</p>
              </div>
              <div className="lg:col-span-8 bg-blue-600 p-12 md:p-20 rounded-[3rem] relative text-white shadow-2xl shadow-blue-600/30">
                <p className="text-xl md:text-2xl font-black leading-tight">
                  {INTERVIEW_DATA[2].quote}
                </p>
                <div className="flex gap-2 mt-10">
                  {INTERVIEW_DATA[2].tags.map(tag => <span key={tag} className="text-[10px] font-bold px-3 py-1 border border-white/20 rounded-full text-white uppercase">{tag}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Vision" index="04" />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12">
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-gray-900">
                  배달의민족과 함께할<br />
                  <span className="text-blue-600 underline decoration-8 underline-offset-8 decoration-blue-600/30">데이터 솔루션</span>의 미래
                </h3>
                <div className="space-y-8">
                  {[
                    { title: "Scale-up System", desc: "B2B 리드 생성 영업 시스템의 고도화", icon: <TrendingUp /> },
                    { title: "Verification of Data", desc: "주문 데이터 기반의 마케팅 성과 입증", icon: <Target /> },
                    { title: "Consulting Partner", desc: "구매 맥락을 장악하는 데이터 솔루션 파트너", icon: <Rocket /> }
                  ].map((vision, idx) => (
                    <div key={idx} className="flex gap-6 group items-start">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {vision.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-black mb-1">{vision.title}</h4>
                        <p className="text-sm font-bold text-gray-600 leading-tight">
                          {vision.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative">
                <div className="aspect-square bg-blue-600 rounded-3xl rotate-3 flex items-center justify-center overflow-hidden shadow-2xl">
                   <img src="https://picsum.photos/seed/baemin/800/800" alt="Vision" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-900 rounded-3xl -z-10 -rotate-12"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 container mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">Let's Work Together</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xl font-bold"><Mail /> yg00188@gmail.com</div>
                <div className="flex items-center gap-4 text-xl font-bold"><Phone /> 010.7590.8883</div>
                <div className="flex items-center gap-4 text-xl font-bold"><Instagram /> @libby.230</div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 text-gray-900 shadow-2xl">
              <form className="space-y-6" onSubmit={handleSendEmail}>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 block mb-2">Message</label>
                  <textarea 
                    className="w-full bg-gray-50 border-none rounded-2xl p-6 h-32 text-gray-800 placeholder:text-gray-300 focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
                    placeholder="프로젝트 제안이나 커피챗 환영합니다."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.4em]">© 2025 LEE SE YOUNG. PROVEN PERFORMANCE & HUMOR.</p>
      </footer>
    </div>
  );
};

export default App;
