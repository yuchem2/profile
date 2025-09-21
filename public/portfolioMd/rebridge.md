---
title: 'Rebridge'
duration: '2024.03 - 2024.07'
team: '포지션 구분없이 4명 참여'
links:
  - name: 'Github(Backend)'
    href: 'https://github.com/Beyond-Imagination/rebridge-be'
  - name: 'Github(Frontend)'
    href: 'https://github.com/Beyond-Imagination/rebridge-fe'
photos:
  - src: '/images/rebridge/detail.png'
    alt: 'arecibo-detail'
    caption: '페이지(훈련과정-훈련기관)'
  - src: '/images/rebridge/login.png'
    alt: 'arecibo-login'
    caption: '로그인 및 회원가입'
  - src: '/images/rebridge/pages1.png'
    alt: 'arecibo-pages1'
    caption: '페이지(홈-훈련기관 추천-훈련기관 찾기-내정보)'
  - src: '/images/rebridge/pages2.png'
    alt: 'arecibo-pages2'
    caption: '페이지(훈련기관 찾기-내정보)'
---

퇴직 후 재취업을 희망하는 중·장년층을 위한 맞춤형 직업 교육 추천 서비스입니다.

제3회 고용노동부 주관 공공데이터 활용 공모전 출품 프로젝트였습니다. React Native를 이용해 Native APP으로 개발되었습니다.

### 내가 기여한 부분

- **RESTful API 개발**
  - 회원가입 및 로그인 API 개발
  - 통계 데이터 조회 API 개발
  - 훈련기관 조회 API 개발
  - 직업 교육 추천 API 개발
- **FE 페이지 개발**
  - 메인 페이지 개발
  - 훈련기관 조회 페이지 개발
  - 검색 페이지 개발
- **공공 데이터 전처리 및 활용**
  - 사용하는 공공데이터를 R를 이용해 전처리 진행
  - 데이터 Schema 정의
- **칸반보드와 스크럼 프로세스를 통한 프로젝트 관리**
  - Jetbrains Space를 이용해 프로젝트 관리
  - 월간, 주간 목표를 정해 목표 관리
  - 월간, 주간 회의를 시행해 각 이슈마다 진행상황 공유
  - 월간 회의 시 회고를 통해 잘한 점과 개선할 점을 도출해 다음 스프린트에 반영
  - 공모전 종료 후 공모전 결과에 대해 포스트 모르템 진행

### 사용기술

- **Express**: 프론트와 백엔드간의 언어 통일을 위해 채택. 당시 JS를 이용한 백엔드 기술 중 가장 사용률이 높아 채택
- **React Native + Expo**: 공모전에 제출하기 위해 쉽고 빠르게 개발할 수 있는 React Native 기술과 Expo 환경 채택
- **Typescript**: 정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택
- **MongoDB**: NoSQL 데이터베이스를 사용하고, 저용량 데이터에 대해서는 무료로 저장소를 지원해 채택
- **React Query v5**: 데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택
- **React Hook Form**: 사용자에게 입력받는 데이터를 쉽게 관리하기 위해 채택
- **Huggingface**: 맞춤형 직업 교육 추천을 위한 모델 추론을 위해 사용
