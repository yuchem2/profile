export const projects = [
    {
        title: 'Hailor',
        duration: '2025.02(10일)',
        description: '블레이버스 MVP 개발 해커톤',
        skills: ['Spring boot', 'Vite', 'React', 'JDBC', 'Kotlin', 'Typescript'],
        images: ['/images/hailor.png'],
        paragraph: '블레이버스 MVP 개발 해커톤 출품 프로젝트. 창업팀의 아이템(헤어스타일 컨설팅 예약 서비스)을 MVP로 웹 앱 방식으로 구현.',
        members: 8,
        role: '프론트엔드 총 책임. 카카오페이 결제 도입. 예약 프로세스 개발. 성능 최적화 진행',
        url: [
            {
                name: 'Front-end',
                href: 'https://github.com/MVPHotSix/Hailor-FE',
            },
            {
                name: 'Back-end',
                href: 'https://github.com/MVPHotSix/Hailor-BE',
            },
        ],
    },
    {
        title: 'DocuLink',
        duration: '2025.01-ing',
        description: 'Atlassian codegeist 2024',
        skills: ['Forge', 'Node.js', 'React', 'JavaScript'],
        images: ['/images/doculink.png'],
        paragraph: 'Atlassian codegeist 2024 출품 프로젝트. Confluence 문서들의 관계를 찾아내서 그래프 형태로 보여주는 Extension.',
        members: 5,
        role: '사용자 화면 개발. Rovo를 통한 문서 관계 추출 prompt 작성',
        url: [
            {
                name: 'none',
                href: 'https://github.com/Beyond-Imagination/DocuLink',
            },
        ],
    },
    {
        title: 'Fienmee',
        duration: '2024.08-ing',
        description: 'Beyond-Imagination',
        skills: ['Express.js', 'Node.js', 'Next.js', 'React', 'React Native', 'mongoDB', 'TypeScript'],
        images: ['/images/fienmee.png'],
        paragraph:
            '다양한 사이트에 파편화되어 있는 행사와 축제 정보를 한 눈에 볼 수 있는 네이티브 앱. 사용자가 직접 행사를 등록하고 공유하는 플랫폼.',
        members: 7,
        role: '기획과 UI/UX 설계 참여. 웹 개발 및 네이티브 웹 개발. 웹과 네이티브 앱의 통신 관리',
        url: [
            {
                name: 'none',
                href: 'https://github.com/Beyond-Imagination/fienmee',
            },
        ],
    },
    {
        title: 'ERAI',
        duration: '2024.12(5일)',
        description: 'DSC 빅테이터/AI 해커톤',
        skills: ['Django', 'Jupyter Notebook', 'Next.js', 'React', 'Typescript'],
        images: ['/images/erai.png'],
        paragraph: 'DSC 빅테이터/AI 해커톤 출품 프로젝트. 사용자의 글 스타일을 학습해 문단을 생성하는 LLM 서비스.',
        members: 3,
        role: '데이터 분석. UI/UX 설계. 프론트엔드 개발',
        url: [
            {
                name: 'none',
                href: 'https://github.com/yuchem2/erai',
            },
        ],
    },
    {
        title: 'Rebridge',
        duration: '2024.03-2024.07',
        description: '고용노동부 공공데이터 활용 공모전',
        skills: ['Express.js', 'Node.js', 'Expo', 'React Native', 'mongoDB', 'TypeScript'],
        images: ['/images/rebridge.png'],
        paragraph:
            '제3회 고용노동부 주관 공공데이터 활용 공모전 출품 프로젝트. 퇴직 후 재취업을 희망하는 중·장년층을 위한 맞춤형 직업 교육 추천 서비스.',
        members: 4,
        role: 'RESTful API 개발. React Native 환경 세팅 및 개발',
        url: [
            {
                name: 'Front-end',
                href: 'https://github.com/Beyond-Imagination/rebridge-fe',
            },
            {
                name: 'Back-end',
                href: 'https://github.com/Beyond-Imagination/rebridge-be',
            },
        ],
    },
    {
        title: 'Arecibo',
        duration: '2023.08-2024.09',
        description: 'Beyond-Imagination',
        skills: ['Express.js', 'Node.js', 'Next.js', 'React', 'mongoDB', 'TypeScript'],
        images: ['/images/arecibo-fe.png', '/images/arecibo-be.png'],
        paragraph: 'Jetbrains Space 사용자들을 위한 커뮤니케이션 도구로, 다양한 게시판에 참여해 자유롭게 메세지를 나눌 수 있는 extension 서비스.',
        members: 4,
        role: 'RESTful API 개발. Text Editor 및 s3 이미지 저장 도입. FE 상태 관리 및 React Query Migration',
        url: [
            {
                name: 'Front-end',
                href: 'https://github.com/Beyond-Imagination/arecibo-fe',
            },
            {
                name: 'Back-end',
                href: 'https://github.com/Beyond-Imagination/arecibo-be/tree/develop',
            },
        ],
    },
    {
        title: '캡스톤디자인',
        duration: '2023.02-2023.12',
        description: '학과 졸업프로젝트',
        skills: ['Django', 'MySQL', 'Pythom', 'CommonJS'],
        images: ['/images/capstonProject.png'],
        paragraph: '강의에 필요한 교재의 최저가를 찾아주고, NLP 기술과 CBF 알고리즘을 통해 관련 도서 추천 서비스.',
        members: 2,
        role: '웹 크롤링 적용, DB 설계, 사용자 페이지 개발',
        url: [
            {
                name: 'none',
                href: 'https://github.com/aurorawhale/2023_CapstoneDesign',
            },
        ],
    },
]
