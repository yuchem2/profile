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

네이티브 앱에 웹 뷰를 이식하는 방법으로 개발하고 있습니다. 현재 v0.3.0 버전까지 개발을 진행하였고, 현재 버전으로 구글 스토어, 원스토어에 배포 후 심사 중입니다.

### 내가 기여한 부분

- **RESTful API 개발**
  - 문의 API 개발
  - 축제 행사 데이터 생성, 조회 API 개발
  - 행사 카테고리 관련 API 개발
- **데이터 통합 및 가공 로직 개발**
  - 서울시 열린데이터 광장 및 TourAPI 데이터 파싱: 두 가지 외부 API 데이터를 수집하여 우리 서비스의 통합 데이터 스키마에 맞게 필터링하고 재가공하여 MongoDB에 등록하는 데이터 ETL 로직 구현
- **FE 개발**
  - 크로스 플랫폼 간의 UI/UX 통일화: 다양한 네이티브 환경(글자 크기, 화면 비율 등)에서 UI가 깨지지 않도록 상대적 측정 단위를 기반으로 반응형 UI를 설계하고 애니메이션 디테일을 정밀 제어
  - 행사 목록, 생성 페이지 개발
  - 메인 페이지 개발
  - Native App에서 보내는 정보(로그인 토큰 등)를 zustand를 통한 관리
- **Native app 개발**
  - 로그인 페이지 개발
  - [빌드 이슈 해결을 위해 React Native Migration](https://github.com/Beyond-Imagination/fienmee/pull/78): 안드로이드 빌드 이슈를 해결하기 위해 newArchEnabled 옵션 관련 커뮤니티 이슈를 직접 추적하고 **안정 버전(0.76.3)** 으로 마이그레이션하여 개발 환경의 안정성을 확보
- **FCM을 이용한 Push Message 구현**
  - [푸시 메시지 학습](https://www.notion.so/beyond-imagination/1db402b8431380219021f47b11583844)
  - [푸시 메시지 구현 학습](https://www.notion.so/beyond-imagination/1e0402b8431380d794b3d497fc8f20eb)
  - [푸시 메시지 설계](https://www.notion.so/beyond-imagination/1c6402b8431380728a9bd85b98788916)

### 사용기술

- **Express**: 프론트와 백엔드간의 언어 통일을 위해 채택. 언어 통일 외에도, 데이터 크기가 크지 않은 행사 정보 서비스의 특성에 맞춰 Node.js의 비동기 I/O 성능을 활용하여 높은 동시 요청 처리 성능을 확보하기 위해 채택
- **Next.js**: SSR과 CSR을 모두 지원하고, SSG 방식으로 배포하기 위해 채택
- **React Native**: 네이티브 앱을 개발하기 위한 툴 중 제일 러닝커브가 완만하고, Native 기능(Push, Device Info)과 Web View(Next.js)를 유연하게 연결해야 하는 프로젝트 구조상, 크로스 플랫폼 네이티브 기능 구현에 가장 적합하다고 판단하여 채택.
- **Typescript**: 정적 타입 검사를 통해 코드 안정성과 유지보수성을 향상시키기 위해 채택
- **MongoDB**: NoSQL 데이터베이스를 사용하고, 저용량 데이터에 대해서는 무료로 저장소를 지원하며 행사 및 축제 정보와 같이 스키마가 유연하게 변경될 수 있는 비정형 데이터 관리에 용이하다고 판단하여 채택.
- **React Query**: 데이터 캐싱을 최적화하여 성능을 개선하고 API 호출을 효율적으로 처리하기 위해 채택
- **React Hook Form**: 사용자에게 입력받는 데이터를 쉽게 관리하기 위해 채택
- **zustand**: 가벼운 전역 상태관리를 통해 직관적으로 전역 상태를 관리하기 위해 채택
