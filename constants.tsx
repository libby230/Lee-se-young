
import { PerformanceMetric, CareerItem, NavLink, InterviewItem } from './types.ts';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Performance', href: '#performance' },
  { name: 'Experience', href: '#experience' },
  { name: 'Interview', href: '#interview' },
  { name: 'Vision', href: '#vision' },
  { name: 'Contact', href: '#contact' },
];

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
  { 
    label: 'Cumulative Sales', 
    value: '300억+', 
    subtext: '5년 누적 개인 매출',
    modalDescription: '개인 매출 누적 300억+ (팀 매출 1,200억+)',
    modalDetails: [
      '연평균 60억 이상의 개인 매출 달성',
      '팀 전체 매출 1,200억 달성에 핵심적 기여',
      '시장 침체기에도 매년 목표 대비 110% 이상 초과 달성'
    ]
  },
  { 
    label: 'New Clients', 
    value: '218개', 
    subtext: '신규 광고주 유치',
    modalDescription: '218개의 신규 대형 및 중소 광고주 직접 유치',
    modalDetails: [
      '산업군별 타겟팅 최적화로 신규 유입 경로 다각화',
      '초기 온보딩 프로세스 개선을 통한 계약 전환율 향상',
      '다양한 업종(F&B, 금융, 커머스 등)의 포트폴리오 확보'
    ]
  },
  { 
    label: 'Leads Secured', 
    value: '3,750건', 
    subtext: '잠재 리드 확보',
    modalDescription: '영업 시스템 고도화를 통한 고품질 잠재 리드 확보',
    modalDetails: [
      '비대면 영업 시스템 <컨택어스> 리뉴얼로 인바운드 문의 급증',
      '데이터 기반 리드 스코어링 도입으로 영업 효율 극대화',
      '마케팅 자동화 툴 활용 리드 너처링(Nurturing) 체계 구축'
    ]
  },
  { 
    label: 'Team Efficiency', 
    value: '300%', 
    subtext: '생산성 향상 기여',
    modalDescription: '영업 대시보드 및 자동화 시스템 구축으로 팀 생산성 3배 향상',
    modalDetails: [
      '수기 집계 프로세스 자동화로 관리 업무 시간 90% 절감',
      '실시간 실적 시각화로 팀 내 데이터 기반 의사결정 문화 정착',
      '표준 영업 가이드 보급으로 신입 인력 교육 기간 60% 단축'
    ]
  },
];

export const CAREER_HISTORY: CareerItem[] = [
  {
    id: 1,
    title: '신규 영업 시스템 및 조직 구축 (Agile TF)',
    description: '비대면 영업 시스템 <컨택어스> 신규 구축 및 아웃바운드 세일즈 확장',
    points: [
      '폐쇄형 시스템을 오픈형으로 신규 구축하여 인바운드 리드 구조화 (기여도 100%)',
      '퍼포먼스 마케팅 기반의 리드 수집 퍼널 설계로 문의량 230% 증가'
    ]
  },
  {
    id: 2,
    title: '상품 기획 및 비즈니스 모델 혁신',
    description: '업계 선도적 광고 상품 및 모델 개발',
    points: [
      'AI 광고 영상 제작 상품 기획으로 2026 서울영상광고제 수상',
      'TV 광고 성과연동형 R/S 모델 도입 (업계 최초)',
      '세로형 TV 배너(매출 400% 증대) 및 유튜브 쇼츠 DA 상품 최초 사례 구축'
    ]
  },
  {
    id: 3,
    title: '프로세스 고도화 및 표준화',
    description: '영업 효율성 극대화를 위한 가이드 및 대시보드 구축',
    points: [
      '광고주 비기너 가이드 제작으로 온보딩 단축 (3주→1주) 및 전환율 향상 (25%→42%)',
      '실시간 영업 현황 대시보드 구축으로 매출 집계 시간 99% 단축'
    ]
  }
];

export const INTERVIEW_DATA: InterviewItem[] = [
  {
    id: 1,
    name: '홍OO 팀장님',
    role: '영업기획팀',
    context: '신입 시절 함께한 팀장의 이야기',
    quote: '"신입 때부터 똑같은 업무를 줘도 세영프로는 늘 다르게 일했어. 신입은 주어진 업무를 잘해내는 것 만으로도 인정을 받을 수 있는데, 세영프로는 거기에 한 수 더해서 늘 새로운 아이디어까지 자발적으로 들고오더라구. 내 기억에 남는 몇 안되는 사원 중 하나야."',
    tags: ['#자발적몰입', '#기획력', '#남다른디테일']
  },
  {
    id: 2,
    name: '박OO 차장님',
    role: 'IT개발팀',
    context: '비대면 영업 시스템 개발을 함께한 개발자 이야기',
    quote: '"10년 넘게 아무도 고치자고 하지 않은 시스템을, 처음으로 뜯어 고치자고 당돌하게 말한 사람이지. 처음엔 \'왜 저렇게 사서 고생인가\'했는데, 들어보니 맞는 말이더라구. 덕분에 나도 디자인까지 직접하면서 개발했던(고생했던) 좋은 경험이었어."',
    tags: ['#문제해결', '#돌파력', '#협업전문가']
  },
  {
    id: 3,
    name: '이OO 이사님',
    role: '치킨브랜드 A사 광고주',
    context: '2025년 캠페인을 함께한 광고주 이야기',
    quote: '"처음부터 광고를 할 생각은 없었어요. TV광고 비싸다고만 생각했거든요. 근데 제가 필요한 작은 부분부터 해결해주시면서, 결국 설득됐습니다. SBS가 아닌데도, 나서서 다른 매체까지 플래닝해주셔서 감사했어요."',
    tags: ['#비즈니스파트너', '#신뢰기반영업', '#토탈솔루션']
  }
];
