---
title: 'Arecibo'
duration: '2023.08-2024.09'
team: '포지션 구분없이 5명 참여'
links:
  - name: 'Github(Backend)'
    href: 'https://github.com/Beyond-Imagination/arecibo-be/tree/develop'
  - name: 'Github(Frontend)'
    href: 'https://github.com/Beyond-Imagination/arecibo-fe/tree/develop'
photos:
  - src: '/images/arecibo/splash.png'
    alt: 'arecibo-splash'
    caption: '스플래시 페이지'
  - src: '/images/arecibo/main.png'
    alt: 'arecibo-main'
    caption: '게시판 페이지'
  - src: '/images/arecibo/planet.png'
    alt: 'arecibo-planet'
    caption: '게시판 구독 페이지'
  - src: '/images/arecibo/messageCreate.png'
    alt: 'arecibo-messageCreate'
    caption: '게시글 생성 페이지'
  - src: '/images/arecibo/message.png'
    alt: 'arecibo-message'
    caption: '게시글 및 댓글 작성 페이지'
  - src: '/images/arecibo/written.png'
    alt: 'arecibo-written'
    caption: '작성한 게시글 및 댓글 보기 페이지'
  - src: '/images/arecibo/setting.png'
    alt: 'arecibo-setting'
    caption: '유저 설정 변경 페이지'
---

Jetbrains Space 사용자들을 위한 커뮤니케이션 도구로, 다양한 게시판에 자유롭게 참여해 메시지를 나눌 수 있는 Extension.  

블라인드와 유사하게 각 Space 게시판, 지역 게시판, 자유 게시판 등이 존재하는 익명 커뮤니티 앱입니다.

### 내가 기여한 부분

- **RESTful API 개발**
  - Jetbrains Space webhook 관리 api 개발
  - 게시물 생성, 조회, 수정 API 개발
- **FE 페이지 개발**
  - 스플래시 화면 개발
  - 게시물 생성 페이지 개발
  - 게시판 선택 페이지 개발
  - 유저 설정 페이지 개발
- **React Query migration**
  - 최신 React 버전과의 호환성 및 장기적인 유지보수를 위해 migration 진행
  - React Query v3을 React Query v5로 migration 진행
- **Text editor와 s3 이미지 저장 도입**
  - 사용자 친화적인 UI를 제공하기 위해 react-quill을 이용한 Text editor 도입
  - 다양하고 편한 이미지 업로드를 지원하기 위해 base64 인코딩 방식을 s3 업로드 방식으로 수정
  - s3 버킷 환경 세팅
- **칸반보드와 스크럼 프로세스를 통한 프로젝트 관리**
  - Jetbrains Space를 이용해 프로젝트 관리
  - 년간, 분기, 월간, 주간 목표를 정해 목표 관리
  - 년간, 분기, 월간, 주간 회의를 시행해 각 이슈마다 진행상황 공유
  - 년간, 분기, 월간 회의 시 회고를 통해 잘한 점과 개선할 점을 도출해 다음 스프린트에 반영
  - 프로젝트 종료 후 다음 프로젝트를 위해 포스트 모르템 진행

### 사용기술

- **Express**: 프론트와 백엔드간의 언어 통일을 위해 채택. 당시 JS를 이용한 백엔드 기술 중 가장 사용률이 높아 채택
- **Next.js**: SSR과 CSR을 모두 지원하고, SSG 방식으로 배포하기 위해 채택
- **Typescript**: 정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택
- **MongoDB**: NoSQL 데이터베이스를 사용하고, 저용량 데이터에 대해서는 무료로 저장소를 지원해 채택
- **React Query**: 데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택
- **React Hook Form**: 사용자에게 입력받는 데이터를 쉽게 관리하기 위해 채택
- **zustand**: 가벼운 전역 상태관리를 통해 직관적으로 전역 상태를 관리하기 위해 채택
- **React Quill**: 유연한 UI를 제공하는 WYSIWYG 에디터로, 사용자들이 편하게 게시글을 작성할 수 있도록 채택
