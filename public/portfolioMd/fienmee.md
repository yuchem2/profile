---
title: 'Fienmee'
duration: '2024.08 - ing'
team: '포지션 구분없이 7명 참여'
links:
  - name: 'Github'
    href: 'https://github.com/Beyond-Imagination/fienmee'
  - name: 'Notion'
    href: 'https://beyond-imagination.notion.site/Fienmee-681b57bc497344bb86821f077a42297e'
photos:
  - src: '/images/fienmee/page1.png'
    alt: 'fienmee-page1'
    caption: '웹 뷰 페이지(홈-캘린더)'
  - src: '/images/fienmee/page2.png'
    alt: 'fienmee-page2'
    caption: '웹 뷰 페이지(카테고리-마이)'
---

다양한 사이트에 파편화되어 있는 행사와 축제 정보를 한 눈에 볼 수 있는 서비스입니다.

사용자가 직접 행사를 공유하고, 다양한 사용자와 행사에 대한 이야기를 나눌 수 있는 커뮤니티 앱입니다.

네이티브 앱에 웹 뷰를 이식하는 방법으로 개발하고 있습니다. 현재 v0.1.0을 개발하고 있고, 올해 안으로 서비스를 목표로 개발을 진행하고 있습니다.

### 내가 기여한 부분

- **RESTful API 개발**
  - 문의 API 개발
  - 서울 축제 행사 데이터 API 개발
  - 행사 카테고리 관련 API 개발
- **FE 개발**
  - 행사 목록 페이지 개발
  - 메인 페이지 개발
  - Native App에서 보내는 정보(로그인 토큰 등)를 zustand를 통한 관리
  - 크로스 플랫폼 간의 UI/UX 통일화
- **Native app 개발**
  - 로그인 페이지 개발
  - [알려진 이슈를 해결하기 위해 React Native Migration](https://github.com/Beyond-Imagination/fienmee/pull/78)
- **칸반보드와 스크럼 프로세스를 통한 프로젝트 관리**
  - 월간, 주간 목표를 정해 목표 관리
  - 월간, 주간 회의를 시행해 각 이슈마다 진행상황 공유
  - 월간 회의 시 회고를 통해 잘한 점과 개선할 점을 도출해 다음 스프린트에 반영

### 사용기술

- **Express**: 프론트와 백엔드간의 언어 통일을 위해 채택. 당시 JS를 이용한 백엔드 기술 중 가장 사용률이 높아 채택
- **Next.js**: SSR과 CSR을 모두 지원하고, SSG 방식으로 배포하기 위해 채택
- **React Native**: 네이트브 앱을 개발하기 위한 툴 중 제일 러닝커브가 적어 채택
- **Typescript**: 정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택
- **MongoDB**: NoSQL 데이터베이스를 사용하고, 저용량 데이터에 대해서는 무료로 저장소를 지원해 채택
- **React Query**: 데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택
- **React Hook Form**: 사용자에게 입력받는 데이터를 쉽게 관리하기 위해 채택
- **zustand**: 가벼운 전역 상태관리를 통해 직관적으로 전역 상태를 관리하기 위해 채택
- **React Native Webview**: 네이티으 앱에서 웹 뷰 형식으로 서비스하고, 데이터를 관리하기 위해 채택
