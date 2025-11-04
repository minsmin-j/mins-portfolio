// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import jira from "./assets/techstack/jira.png";
import cursor from "./assets/techstack/cursor.png";
import java from "./assets/techstack/java.png";
import springboot from "./assets/techstack/springboot.png";
import mysql from "./assets/techstack/mysql.png";
import aws from "./assets/techstack/aws.webp";
import c from "./assets/techstack/C.svg";
import notion from "./assets/techstack/notion.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "이정민",
  tagline: "I build things for web",
  img: profile,
  about: `안녕하세요. 기술로 비즈니스 가치를 만드는 백엔드 개발자 이정민입니다.\n
  단순히 기능을 구현하는 것을 넘어, 매출 증대와 운영 효율성 향상에 기여하는 시스템을 설계합니다.
  Spring Boot 기반 백엔드 개발 경험을 바탕으로 높은 성능과 효율을 모두 잡는 솔루션을 제공합니다.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "백엔드 개발자 및 팀리드",
    Company: `아자스쿨`,
    Location: "Spring Boot, Java, MySQL, AWS",
    Type: "정규직",
    Duration: "2024.12 - 2025.09",
  },
  {
    Position: "풀스택 개발자",
    Company: `아자스쿨`,
    Location: "PHP, MySQL, Cafe24",
    Type: "현장실습",
    Duration: "2024.08 - 2024.12",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "GDSC CUK",
    Company: `Google Developer Student Clubs`,
    Location: "딥러닝 스터디, 해커톤",
    Type: "동아리",
    Duration: "2024.04 - 2024.07",
  },
  {
    Position: "Uni MakeUs Challenge 3기 Server",
    Company: `UMC`,
    Location: "Server 학습, 팀 개발",
    Type: "연합동아리",
    Duration: "2022.09 - 2023.02",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  jira: jira,
  cursor: cursor,
  java: java,
  springboot: springboot,
  mysql: mysql,
  aws: aws,
  c: c,
  notion: notion,
};

// Enter your Project Details here
export const projectDetails = [
  {
    id: 1,
    title: "장바구니 기능 추가",
    image: projectImage6,
    description: "기획부터 디자인, 개발까지 참여한 프로젝트로 리빌딩한 웹사이트에 장바구니 기능을 추가",
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://www.ajaschool.com/shop/cart",
    githubLink: "",
    duration: "2025.07 - 2025.08",
    role: "풀스택 개발자",
    overview: `장바구니 기능을 추가하여 체험학습 기록 및 추억 저장`,
    achievements: [
      "장바구니 기능 추가로 체험학습 기록 및 추억 저장",
      "장바구니 기능 추가로 체험학습 기록 및 추억 저장",
      "장바구니 기능 추가로 체험학습 기록 및 추억 저장"
    ],
    challenges: [
      {
        title: "장바구니 기능 추가",
        problem: "장바구니 기능 추가로 체험학습 기록 및 추억 저장",
        solution: "장바구니 기능 추가로 체험학습 기록 및 추억 저장"
      },
      {
        title: "장바구니 기능 추가",
        problem: "장바구니 기능 추가로 체험학습 기록 및 추억 저장",
        solution: "장바구니 기능 추가로 체험학습 기록 및 추억 저장"
      }
    ],
    learnings: `장바구니 기능 추가로 체험학습 기록 및 추억 저장`
  },
  {
    id: 2,
    title: "웹사이트 리빌딩",
    image: projectImage1,
    description: "그누보드 php 기반 웹사이트를 React/SpringBoot 기반으로 리빌딩하며 DB 구조 최적화",
    techstack: "Java, Spring Boot, MySQL, Redis, AWS EC2, RDS, S3, Docker, Postman, Swagger, Jira, Github Actions, EFK",
    previewLink: "https://www.ajaschool.com/",
    githubLink: "",
    duration: "2025.01 - 2025.07",
    role: "백엔드 리드 개발자",
    overview: `기존 웹사이트는 그누보드 기반 php 및 mysql이 낮은 버전으로 되어있어 원하는 기능을 추가함에 있어 어려움이 있었다. 
    따라서 최신 기술이면서 대중적인 기술로, DB 구조 최적화를 겸한 리빌딩을 진행하였다.
    백엔드 개발 및 DB/로직 설계 총괄 및 백오피스 변경 기획, 개발 리드로써 팀원을 이끌었다.`,
    achievements: [
      "DB 구조 최적화로 원하는 기능 추가 및 유지보수 용이",
      "백오피스 변경으로 관리자 페이지 사용성 향상",
      "쿼리 성능 상승 및 동시 작업 속도 향상"
    ],
    challenges: [
      {
        title: "복잡한 조회 쿼리 성능 360% 상승",
        problem: "상품 특성상 얽히고 결합된 도메인으로 인해 다양한 정보를 한 번에 조회할 때 성능 저하",
        solution: "1. 먼저 스키마에 적절한 인덱싱을 부여\n2. n+1 쿼리를 Fetch Join/일괄 조회(Batch Query)/DTO 프로젝션을 각각 함수에 어울리는 기법을 적용해서 해결\n3. 3초 이상 걸리던 조회를 0.8초 수준으로 줄임"
      },
      {
        title: "레거시 데이터베이스 구조 개선 및 최적화 (313개의 테이블 정리)",
        problem: "- 기존 DB 스키마에 100개 이상의 컬럼이 존재하여 유지보수 어려움\n- 컬럼명이 불명확하여 코멘트 없이는 파악 불가 (예: it_name, it_name2, its_model)\n- 사용하지 않는 컬럼이 다수 존재하여 쿼리 성능 저하",
        solution: "1. 실제 사용 중인 컬럼 분석 및 불필요한 컬럼 제거\n2. 컬럼명을 명확하게 재정의 (it_name → title, its_model → min_target_age)\n3. 약 50개의 테이블을 새로 설계하여 불필요한 참조 관계 제거 및 구조 단순화"
      }
    ],
    learnings: `1. 설계 역량: DB 설계 후 개발하는 과정에서 더 나은 구조가 생각나면 설계를 수정했다. 나 자신의 설계를 수정하는 과정에서 더 나은 설계를 생각할 수 있었고, 초반 정확한 설계의 중요성을 깨달았다.\n
    2. 학습성: springBoot 프로젝트를 처음부터 끝까지 혼자 하는 경험은 처음이어서 모르는 게 많았다. 따라서 예전 프로젝트를 참고하기도 하고, 강의를 보면서 배우면서 빠르게 습득 후 개발했다. 이 때 나는 빠르게 배울 수 있으므로 모르는 것에 도전하는 것을 두려워하지 말자고 생각했다.\n
    3. 리더십: 개발 리드로써 모든 것을 내가 결정해야 했다. 팀원의 의견을 참고하되 우유부단하면 안되는 것을 깨달았고, 좋은 협업을 위해 매뉴얼을 만드는 등의 경험으로 리더십을 배웠다.`
  },
  {
    id: 3,
    title: "‘우리 아이 앨범’ 기능 추가",
    image: projectImage2,
    description: "기존 웹사이트에 ‘우리 아이 앨범’ 기능을 추가하여 체험학습 기록 및 추억 저장",
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    previewLink: "",
    githubLink: "",
    duration: "2025.02 - 2025.02",
    role: "풀스택 개발자",
    overview: `기존 레거시 웹사이트를 현대적인 기술 스택으로 전면 리빌딩했습니다. 
사용자 경험을 개선하고 관리자 페이지의 효율성을 높이기 위해 
반응형 디자인과 직관적인 UI/UX를 적용했습니다.`,
    achievements: [
      "페이지 로딩 속도 50% 개선",
      "모바일 반응형 디자인 100% 적용",
      "관리자 페이지 사용성 대폭 향상"
    ],
    challenges: [
      {
        title: "데이터 마이그레이션",
        problem: "기존 데이터 마이그레이션 및 호환성 유지",
        solution: "점진적 마이그레이션 전략과 데이터 검증 로직 구현"
      },
      {
        title: "브라우저 호환성",
        problem: "다양한 브라우저 호환성 문제",
        solution: "크로스 브라우저 테스트 및 폴리필 적용"
      }
    ],
    learnings: `레거시 시스템을 현대화하는 과정에서 기존 코드 분석과 점진적 개선의 중요성을 배웠습니다. 
사용자 중심의 UI/UX 설계와 성능 최적화에 대한 실무 경험을 쌓을 수 있었습니다.`
  },{
    id: 4,
    title: "서버 이전 및 PHP 버전 업그레이드",
    image: projectImage5,
    description: "레거시 서버 환경을 현대적인 환경으로 마이그레이션",
    techstack: "PHP, MySQL, Linux, Apache, Docker",
    previewLink: "https://www.ajaschool.com/",
    githubLink: "https://github.com",
    duration: "2024.08 - 2024.09 (2개월)",
    role: "인프라 개발자",
    teamSize: "개인 프로젝트",
    overview: `기존 레거시 서버 환경을 현대적인 환경으로 마이그레이션했습니다. 
PHP 버전 업그레이드와 함께 보안 강화 및 성능 최적화를 진행했습니다.`,
    achievements: [
      "서버 다운타임 최소화 (2시간 이내)",
      "PHP 7.4에서 8.2로 업그레이드",
      "보안 취약점 100% 해결"
    ],
    challenges: [
      {
        title: "PHP 버전 업그레이드",
        problem: "PHP 버전 호환성 문제 및 레거시 코드 수정",
        solution: "코드 분석 도구 활용 및 단계적 마이그레이션"
      },
      {
        title: "무중단 배포",
        problem: "서비스 중단 최소화를 위한 무중단 배포",
        solution: "Blue-Green 배포 전략 및 롤백 계획 수립"
      }
    ],
    learnings: `인프라 마이그레이션 과정에서 서비스 안정성과 무중단 배포의 중요성을 배웠습니다. 
레거시 시스템 현대화에 대한 실무 경험을 쌓을 수 있었습니다.`
  },{
    id: 5,
    title: "자사 상품 네이버 플레이스 API 연동",
    image: projectImage4,
    description: "네이버 플레이스 API를 활용한 상품 정보 자동 동기화 시스템",
    techstack: "PHP, MySQL, Naver API, Cron Job",
    previewLink: "https://map.naver.com/p/entry/place/11620570?lng=126.980388&lat=37.5240867&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202510262215&locale=ko&svcName=map_pcv5&entry=plt&searchType=place&c=15.00,0,0,0,dh",
    githubLink: "",
    duration: "2024.06 - 2024.07 (2개월)",
    role: "백엔드 개발자",
    teamSize: "개인 프로젝트",
    overview: `네이버 플레이스 API를 활용하여 상품 정보를 자동으로 동기화하는 시스템을 개발했습니다. 
Cron Job을 통한 정기적인 데이터 업데이트와 오류 처리 로직을 구현했습니다.`,
    achievements: [
      "API 연동으로 수동 작업 90% 자동화",
      "데이터 동기화 정확도 99% 달성",
      "오류 모니터링 시스템 구축"
    ],
    challenges: [
      {
        title: "API 레이트 리미팅",
        problem: "API 호출 제한 및 레이트 리미팅 처리",
        solution: "배치 처리 및 재시도 로직을 통한 안정적인 API 호출"
      },
      {
        title: "데이터 동기화",
        problem: "데이터 불일치 및 동기화 오류 처리",
        solution: "데이터 검증 로직 및 오류 알림 시스템 구현"
      }
    ],
    learnings: `외부 API 연동 시 레이트 리미팅과 오류 처리의 중요성을 배웠습니다. 
자동화 시스템 구축을 통한 업무 효율성 개선 경험을 쌓을 수 있었습니다.`
  },
  {
    id: 6,
    title: "가치더치 - TogeDutch",
    image: projectImage3,
    description: "공동구매 플랫폼 백엔드 API 개발",
    techstack: "Java, Spring Boot, JPA, MySQL, AWS",
    previewLink: "",
    githubLink: "https://github.com/UMC-TogeDutch-Project/TogeDutch_BACKEND_JPA",
    duration: "2022.09 - 2023.02 (6개월)",
    role: "백엔드 개발자",
    teamSize: "팀 프로젝트 (6명)",
    overview: `공동구매 플랫폼의 백엔드 API를 개발했습니다. 
사용자 인증, 상품 관리, 주문 처리, 결제 연동 등 
전체적인 비즈니스 로직을 구현했습니다.`,
    achievements: [
      "RESTful API 설계 및 구현",
      "JWT 기반 인증 시스템 구축",
      "결제 시스템 연동 완료"
    ],
    challenges: [
      {
        title: "주문 상태 관리",
        problem: "복잡한 주문 상태 관리 및 동시성 제어",
        solution: "상태 패턴 적용 및 낙관적 락을 통한 동시성 제어"
      },
      {
        title: "결제 시스템 보안",
        problem: "결제 시스템 연동 시 보안 및 오류 처리",
        solution: "암호화 통신 및 트랜잭션 롤백 메커니즘 구현"
      }
    ],
    learnings: `실제 서비스 개발 과정에서 API 설계와 보안에 대한 중요성을 깨달았습니다. 
팀 협업을 통한 코드 리뷰와 버전 관리의 필요성을 체감할 수 있었습니다.`
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "jungmin200132@gmail.com",
  phone: "010-9098-6932",
};
