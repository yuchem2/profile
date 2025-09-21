export const portfolio = [
  {
    title: 'Hailor',
    description:
      '블레이버스 MVP 개발 해커톤 출품 프로젝트입니다. 창업팀의 아이템(헤어스타일 컨설팅 예약 서비스)를 MVP로 개발을 진행하였습니다. 헤어스타일 컨설팅을 받고자 하는 고객들이 원하는 디자이너를 찾아 예약을 하고, 결제를 진행할 수 있는 서비스입니다.',
    links: [{ name: 'Github', href: 'https://github.com/MVPHotSix/Hailor-FE' }],
    duration: '2025.02.10 - 20205.02.20',
    team: 'PM 1명, Backend 4명, Frontend 2명, Designer 1명',
    contributions: [
      {
        title: 'ci/cd 환경 구성',
        tasks: ['github action을 이용해 에러 확인 및 eslint 적용 여부 확인 파이프라인 구성', 'github action과 netlify를 이용한 자동 배포 환경 구성'],
      },
      {
        title: '상태 관리',
        tasks: ['react-query v5를 이용한 데이터 패칭 및 캐싱 최적화', 'zustand를 이용해 전역상태관리 도입'],
      },
      {
        title: 'Google OAuth 로그인 및 카카오페이 결제 시스템 도입',
        tasks: ['react-oauth/google을 이용해 로그인 및 회원가입 적용', '카카오페이 결제 API를 활용해 프론트엔드 결제 프로세스 구축'],
      },
      {
        title: '어드민 페이지 개발',
        tasks: ['관리자가 예약 조회, 환불, 입금확인과 디자이너 조회, 추가를 할 수 있도록 페이지 개발', 'react-query v5를 이용한 무한스크롤 도입'],
      },
      {
        title: '칸반보드를 통한 Frontend 개발 관리',
        tasks: [
          '개발기간에 따라 목표를 구성하고, 세분화해 업무 분배 진행',
          '모든 작업을 칸반보드로 이슈로 만들어 세분화한 뒤 작업 관리',
          '매일 회의를 통해 진행상황을 공유',
          '해커톤 종료 후 공모전 결과에 대해 포스트 모르템 진행',
        ],
      },
      {
        title: '버그 리포트',
        tasks: ['해커톤 최종 제출 2일전 버그 리포트 시작', '현상, 발생방법, 로그를 기록하여 버그 분석 및 버그 수정'],
      },
    ],
    techStack: [
      {
        name: 'Vite + React',
        reason: 'CSR만을 제공하고, 빠르고 가벼운 개발을 위해 Next.js 대신 채택',
      },
      {
        name: 'Typescript',
        reason: '정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택',
      },
      {
        name: 'React Query v5',
        reason: '데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택',
      },
      {
        name: 'zustand',
        reason: '가벼운 전역 상태관리를 통해 직관적으로 전역 상태를 관리하기 위해 채택',
      },
    ],
    photos: [
      {
        src: '/images/hailor/main.png',
        alt: 'hailor-main',
        caption: '유저 페이지(홈-검색-예약조회)',
      },
      {
        src: '/images/hailor/admin.png',
        alt: 'hailor-admin',
        caption: '어드민 페이지(예약조회-디자이너조회-디자이너추가)',
      },
      {
        src: '/images/hailor/kakaoPay.png',
        alt: 'hailor-kakaopay',
        caption: '카카오페이 결제 화면',
      },
    ],
  },
  {
    title: 'Arecibo',
    description:
      'Jetbrains Space 사용자들을 위한 커뮤니케이션 도구로, 다양한 게시판에 자유롭게 참여해 메시지를 나눌 수 있는 Extension. <br /> 블라인드와 유사하게 각 Space 게시판, 지역 게시판, 자유 게시판 등이 존재하는 익명 커뮤니티 앱입니다. <br />',
    links: [
      { name: 'Github(Backend)', href: 'https://github.com/Beyond-Imagination/arecibo-be/tree/develop' },
      { name: 'Github(Frontend)', href: 'https://github.com/Beyond-Imagination/arecibo-fe/tree/develop' },
    ],
    duration: '2023.08-2024.09',
    team: '포지션 구분없이 5명 참여',
    contributions: [
      {
        title: 'RESTful API 개발',
        tasks: ['Jetbrains Space webhook 관리 api 개발', '게시물 생성, 조회, 수정 API 개발'],
      },
      {
        title: 'FE 페이지 개발',
        tasks: ['스플래시 화면 개발', '게시물 생성 페이지 개발', '게시판 선택 페이지 개발', '유저 설정 페이지 개발'],
      },
      {
        title: 'React Query migration',
        tasks: ['최신 React 버전과의 호환성 및 장기적인 유지보수를 위해 migration 진행', 'React Query v3을 React Query v5로 migration 진행'],
      },
      {
        title: 'Text editor와 s3 이미지 저장 도입',
        tasks: [
          '사용자 친화적인 UI를 제공하기 위해 react-quill을 이용한 Text editor 도입',
          '다양하고 편한 이미지 업로드를 지원하기 위해 base64 인코딩 방식을 s3 업로드 방식으로 수정',
          's3 버킷 환경 세팅',
        ],
      },
      {
        title: '칸반보드와 스크럼 프로세스를 통한 프로젝트 관리',
        tasks: [
          'Jetbrains Space를 이용해 프로젝트 관리',
          '년간, 분기, 월간, 주간 목표를 정해 목표 관리',
          '년간, 분기, 월간, 주간 회의를 시행해 각 이슈마다 진행상황 공유',
          '년간, 분기, 월간 회의 시 회고를 통해 잘한 점과 개선할 점을 도출해 다음 스프린트에 반영',
          '프로젝트 종료 후 다음 프로젝트를 위해 포스트 모르템 진행',
        ],
      },
    ],
    techStack: [
      {
        name: 'Express',
        reason: '프론트와 백엔드간의 언어 통일을 위해 채택. 당시 JS를 이용한 백엔드 기술 중 가장 사용률이 높아 채택',
      },
      {
        name: 'Next.js',
        reason: 'SSR과 CSR을 모두 지원하고, SSG 방식으로 배포하기 위해 채택',
      },
      {
        name: 'Typescript',
        reason: '정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택',
      },
      {
        name: 'MongoDB',
        reason: 'NoSQL 데이터베이스를 사용하고, 저용량 데이터에 대해서는 무료로 저장소를 지원해 채택',
      },
      {
        name: 'React Query',
        reason: '데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택',
      },
      {
        name: 'React Hook Form',
        reason: '사용자에게 입력받는 데이터를 쉽게 관리하기 위해 채택',
      },
      {
        name: 'zustand',
        reason: '가벼운 전역 상태관리를 통해 직관적으로 전역 상태를 관리하기 위해 채택',
      },
      {
        name: 'React Quill',
        reason: '유연한 UI를 제공하는 WYSIWYG 에디터로, 사용자들이 편하게 게시글을 작성할 수 있도록 채택',
      },
    ],
    photos: [
      {
        src: '/images/arecibo/splash.png',
        alt: 'arecibo-splash',
        caption: '스플래시 페이지',
      },
      {
        src: '/images/arecibo/main.png',
        alt: 'arecibo-main',
        caption: '게시판 페이지',
      },
      {
        src: '/images/arecibo/planet.png',
        alt: 'arecibo-planet',
        caption: '게시판 구독 페이지',
      },
      {
        src: '/images/arecibo/messageCreate.png',
        alt: 'arecibo-messageCreate',
        caption: '게시글 생성 페이지',
      },
      {
        src: '/images/arecibo/message.png',
        alt: 'arecibo-message',
        caption: '게시글 및 댓글 작성 페이지 페이지',
      },
      {
        src: '/images/arecibo/written.png',
        alt: 'arecibo-written',
        caption: '작성한 게시글 및 댓글 보기 페이지',
      },
      {
        src: '/images/arecibo/setting.png',
        alt: 'arecibo-setting',
        caption: '유저 설정 변경 페이지',
      },
    ],
  },
  {
    title: 'Rebridge',
    description:
      '퇴직 후 재취업을 희망하는 중·장년층을 위한 맞춤형 직업 교육 추천 서비스입니다. <br /> 제3회 고용노동부 주관 공공데이터 활용 공모전 출품 프로젝트였습니다. React Native를 이용해 Native APP으로 개발되었습니다.',
    links: [
      { name: 'Github(Backend)', href: 'https://github.com/Beyond-Imagination/rebridge-be' },
      { name: 'Github(Frontend)', href: 'https://github.com/Beyond-Imagination/rebridge-fe' },
    ],
    duration: '2024.03 - 2024.07',
    team: '포지션 구분없이 4명 참여',
    contributions: [
      {
        title: 'RESTful API 개발',
        tasks: ['회원가입 및 로그인 API 개발', '통계 데이터 조회 API 개발', '훈련기관 조회 API 개발', '직업 교육 추천 API 개발'],
      },
      {
        title: 'FE 페이지 개발',
        tasks: ['메인 페이지 개발', '훈련기관 조회 페이지 개발', '검색 페이지 개발'],
      },
      {
        title: '공공 데이터 전처리 및 활용',
        tasks: ['사용하는 공공데이터를 R를 이용해 전처리 진행', '데이터 Schema 정의'],
      },
      {
        title: '칸반보드와 스크럼 프로세스를 통한 프로젝트 관리',
        tasks: [
          'Jetbrains Space를 이용해 프로젝트 관리',
          '월간, 주간 목표를 정해 목표 관리',
          '월간, 주간 회의를 시행해 각 이슈마다 진행상황 공유',
          '월간 회의 시 회고를 통해 잘한 점과 개선할 점을 도출해 다음 스프린트에 반영',
          '공모전 종료 후 공모전 결과에 대해 포스트 모르템 진행',
        ],
      },
    ],
    techStack: [
      {
        name: 'Express',
        reason: '프론트와 백엔드간의 언어 통일을 위해 채택. 당시 JS를 이용한 백엔드 기술 중 가장 사용률이 높아 채택',
      },
      {
        name: 'React Native + Expo',
        reason: '공모전에 제출하기 위해 쉽고 빠르게 개발할 수 있는 React Native 기술과 Expo 환경 채택',
      },
      {
        name: 'Typescript',
        reason: '정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택',
      },
      {
        name: 'MongoDB',
        reason: 'NoSQL 데이터베이스를 사용하고, 저용량 데이터에 대해서는 무료로 저장소를 지원해 채택',
      },
      {
        name: 'React Query v5',
        reason: '데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택',
      },
      {
        name: 'React Hook Form',
        reason: '사용자에게 입력받는 데이터를 쉽게 관리하기 위해 채택',
      },
      {
        name: 'Huggingface',
        reason: '맞춤형 직업 교육 추천을 위한 모델 추론을 위해 사용',
      },
    ],
    photos: [
      {
        src: '/images/rebridge/detail.png',
        alt: 'arecibo-detail',
        caption: '페이지(훈련과정-훈련기관)',
      },
      {
        src: '/images/rebridge/login.png',
        alt: 'arecibo-login',
        caption: '로그인 및 회원가입',
      },
      {
        src: '/images/rebridge/pages1.png',
        alt: 'arecibo-pages1',
        caption: '페이지(홈-훈련기관 추천-훈련기관 찾기-내정보)',
      },
      {
        src: '/images/rebridge/pages2.png',
        alt: 'arecibo-pages2',
        caption: '페이지(훈련기관 찾기-내정보)',
      },
    ],
  },
  {
    title: 'Fienmee',
    description:
      '다양한 사이트에 파편화되어 있는 행사와 축제 정보를 한 눈에 볼 수 있는 서비스입니다. <br /> 사용자가 직접 행사를 공유하고, 다양한 사용자와 행사에 대한 이야기를 나눌 수 있는 커뮤니티 앱입니다. 네이티브 앱에 웹 뷰를 이식하는 방법으로 개발하고 있습니다. 현재 v0.1.0을 개발하고 있고, 올해 안으로 서비스를 목표로 개발을 진행하고 있습니다.',
    links: [
      { name: 'Github', href: 'https://github.com/Beyond-Imagination/fienmee' },
      { name: 'Notion', href: 'https://beyond-imagination.notion.site/Fienmee-681b57bc497344bb86821f077a42297e' },
    ],
    duration: '2024.08 - ing',
    team: '포지션 구분없이 7명 참여',
    contributions: [
      {
        title: 'RESTful API 개발',
        tasks: ['문의 API 개발', '서울 축제 행사 데이터 API 개발', '행사 카테고리 관련 API 개발'],
      },
      {
        title: 'FE 개발',
        tasks: [
          '행사 목록 페이지 개발',
          '메인 페이지 개발',
          'Native App에서 보내는 정보(로그인 토큰 등)를 zustand를 통한 관리',
          '크로스 플랫폼 간의 UI/UX 통일화',
        ],
      },
      {
        title: 'Native app 개발',
        tasks: ['로그인 페이지 개발', '알려진 이슈를 해결하기 위해 React Native Migration'],
      },
      {
        title: '칸반보드와 스크럼 프로세스를 통한 프로젝트 관리',
        tasks: [
          '월간, 주간 목표를 정해 목표 관리',
          '월간, 주간 회의를 시행해 각 이슈마다 진행상황 공유',
          '월간 회의 시 회고를 통해 잘한 점과 개선할 점을 도출해 다음 스프린트에 반영',
        ],
      },
    ],
    techStack: [
      {
        name: 'Express',
        reason: '프론트와 백엔드간의 언어 통일을 위해 채택. 당시 JS를 이용한 백엔드 기술 중 가장 사용률이 높아 채택',
      },
      {
        name: 'Next.js',
        reason: 'SSR과 CSR을 모두 지원하고, SSG 방식으로 배포하기 위해 채택',
      },
      {
        name: 'React Native',
        reason: '네이트브 앱을 개발하기 위한 툴 중 제일 러닝커브가 적어 채택',
      },
      {
        name: 'Typescript',
        reason: '정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택',
      },
      {
        name: 'MongoDB',
        reason: 'NoSQL 데이터베이스를 사용하고, 저용량 데이터에 대해서는 무료로 저장소를 지원해 채택',
      },
      {
        name: 'React Query',
        reason: '데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택',
      },
      {
        name: 'React Hook Form',
        reason: '사용자에게 입력받는 데이터를 쉽게 관리하기 위해 채택',
      },
      {
        name: 'zustand',
        reason: '가벼운 전역 상태관리를 통해 직관적으로 전역 상태를 관리하기 위해 채택',
      },
      {
        name: 'React Native Webview',
        reason: '네이티으 앱에서 웹 뷰 형식으로 서비스하고, 데이터를 관리하기 위해 채택',
      },
    ],
    photos: [
      {
        src: '/images/fienmee/page1.png',
        alt: 'fienmee-page1',
        caption: '웹 뷰 페이지(홈-캘린더)',
      },
      {
        src: '/images/fienmee/page2.png',
        alt: 'fienmee-page2',
        caption: '웹 뷰 페이지(카테고리-마이)',
      },
    ],
  },
];
