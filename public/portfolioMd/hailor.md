---
title: 'Hailor'
duration: '2025.02.10 - 20205.02.20'
team: 'PM 1명, Backend 4명, Frontend 2명, Designer 1명'
links:
  - name: 'Github'
    href: 'https://github.com/MVPHotSix/Hailor-FE'
photos:
  - src: '/images/hailor/main.png'
    alt: 'hailor-main'
    caption: '유저 페이지(홈-검색-예약조회)'
  - src: '/images/hailor/admin.png'
    alt: 'hailor-admin'
    caption: '어드민 페이지(예약조회-디자이너조회-디자이너추가)'
  - src: '/images/hailor/kakaoPay.png'
    alt: 'hailor-kakaopay'
    caption: '카카오페이 결제 화면'
---

블레이버스 MVP 개발 해커톤 출품 프로젝트입니다. 창업팀의 아이템(헤어스타일 컨설팅 예약 서비스)를 MVP로 개발을 진행하였습니다.

헤어스타일 컨설팅을 받고자 하는 고객들이 원하는 디자이너를 찾아 예약을 하고, 결제를 진행할 수 있는 서비스입니다.

### 내가 기여한 부분

- **ci/cd 환경 구성**
  - github action을 이용해 에러 확인 및 eslint 적용 여부 확인 파이프라인 구성
  - github action과 netlify를 이용한 자동 배포 환경 구성
- **상태 관리**
  - react-query v5를 이용한 데이터 패칭 및 캐싱 최적화
  - zustand를 이용해 전역상태관리 도입
- **Google OAuth 로그인 및 카카오페이 결제 시스템 도입**
  - react-oauth/google을 이용해 로그인 및 회원가입 적용
  - 카카오페이 결제 API를 활용해 프론트엔드 결제 프로세스 구축
- **어드민 페이지 개발**
  - 관리자가 예약 조회, 환불, 입금확인과 디자이너 조회, 추가를 할 수 있도록 페이지 개발
  - react-query v5를 이용한 무한스크롤 도입
- **칸반보드를 통한 Frontend 개발 관리**
  - 개발기간에 따라 목표를 구성하고, 세분화해 업무 분배 진행
  - 모든 작업을 칸반보드로 이슈로 만들어 세분화한 뒤 작업 관리
  - 매일 회의를 통해 진행상황을 공유
  - 해커톤 종료 후 공모전 결과에 대해 포스트 모르템 진행
- **버그 리포트**
  - 해커톤 최종 제출 2일전 버그 리포트 시작
  - 현상, 발생방법, 로그를 기록하여 버그 분석 및 버그 수정

### 사용기술

- **Vite + React**: CSR만을 제공하고, 빠르고 가벼운 개발을 위해 Next.js 대신 채택
- **Typescript**: 정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택
- **React Query v5**: 데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택
- **zustand**: 가벼운 전역 상태관리를 통해 직관적으로 전역 상태를 관리하기 위해 채택
