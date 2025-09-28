---
title: 'doculink'
duration: '2024.11 - 2025.07.26(last published)'
team: '포지션 구분 없이 4명 참여'
links:
  - name: 'Github'
    href: 'https://github.com/Beyond-Imagination/DocuLink'
  - name: 'Notion'
    href: 'https://beyond-imagination.notion.site/DocuLink-2bab75b78b484c02b159a47e8d606360'
  - name: 'marketplace'
    href: 'https://marketplace.atlassian.com/apps/1236812/doculink?tab=overview&hosting=cloud'
---

Atlassian codegeist 2024 출품 프로젝트로, Confluence 문서들의 관계를 찾아내서 그래프 형태로 보여주는 Extension 서비스.

Confluence 문서들이 파편화되어 복잡한 프로젝트 구조를 한눈에 파악하기 어렵다는 문제를 해결하기 위해 개발. 
문서 간의 링크 및 키워드 기반 관계를 시각화(2D, 3D)하여 정보 탐색 시간을 개선하였습니다.

현재 v4.1.0까지 개발 완료되었으나, Forge 플랫폼 함수의 10초 실행 제한이라는 기술적 한계로 인해 추가적인 성능 개선은 중지된 상태입니다.

### 내가 기여한 부분

- **Rovo를 이용한 키워드 추출 기능 도입**: 기존 방식 외에 AI(Rovo Agent)를 통해 스크립트를 작성, 문서 간의 연관성 분석의 깊이를 높이고 새로운 관계 탐색 기능을 구현
- **노드 형태 변경 및 링크 색깔 커스텀**: 시각적으로 복잡했던 텍스트 노드를 원/구 형태로 변경하고, 사용자가 링크 색상을 커스텀할 수 있도록 하여 **그래프의 가독성과 사용자 경험(UX)** 을 개선
- **키워드 매칭 성능 개선**: 모든 키워드 매칭 방식에서 중요 키워드 상위 5개만으로 연관성을 계산하도록 로직을 변경하여, Forge 10초 제한 내에서 최대한의 성능을 확보하고 서비스 안정성 유지
- **공모전 이후 리팩토링**: 기능 개발에 치중했던 코드를 UI Component 책임 분리(컴포넌트/훅 분리) 및 코드 스타일 통일 작업을 통해 코드 통일성과 구조화를 확보하여 장기적인 유지보수 기반 마련
- **[운영 중 atlassian 측 요구사항 반영](https://github.com/Beyond-Imagination/DocuLink/pull/41)**: 운영 중 발생한 `form-data` 라이브러리의 취약점 이슈에 대응하여, `axios`와 함께 최신 안정 버전(4.0.4, 1.8.2)으로 업데이트를 완료하며 보안 및 운영 안정성을 확보

### 사용기술

- **Forge**: Atlassian의 공식 클라우드 플랫폼으로, Confluence API에 안전하고 효율적으로 접근하고 앱을 호스팅하기 위한 필수 환경
- **Node.js**: Forge Function의 런타임 환경으로 채택. 복잡한 문서 데이터 파싱 및 그래프 연산 로직을 효율적으로 처리하기 위해 사용
- **React**: 사용자 친화적인 그래프 시각화 및 상호작용 기능을 구현하기 위한 프론트엔드 프레임워크로 채택
- **Three.js**: 고성능 3D/2D 그래프 렌더링을 위해 채택. `react-force-graph`의 기반 엔진으로 활용하여 백개 이상의 문서 노드가 존재하는 경우에도 부드러운 물리 엔진 기반 레이아웃을 구현
- **react-force-graph-2d/3d**: 복잡한 그래프 데이터 구조를 처리하고 시각화 성능을 극대화하기 위한 라이브러리로 채택. Three.js의 힘을 빌려 문서 관계의 동적인 표현을 효과적으로 구현
- **JavaScript**: Forge 및 Node.js 개발 환경에서 빠른 개발 속도와 플랫폼 호환성을 위해 주요 개발 언어로 활용
