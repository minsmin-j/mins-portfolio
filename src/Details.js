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
import projectImage1 from "./assets/projects/ajamain.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/TogeDutch.png";
import projectImage4 from "./assets/projects/naverapi.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/cart.png";

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
  Spring Boot 기반 백엔드 개발 경험을 바탕으로 높은 성능과 효율을 모두 잡는 솔루션을 제공하고 싶습니다.`,
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
    Location: "Spring Boot, Java, React, MySQL, AWS",
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
    description: "기획부터 설계, 디자인, 개발까지 참여한 프로젝트로 리빌딩한 웹사이트에 장바구니 기능을 추가",
    techstack: "Spring Boot, React, MySQL, AWS, Figma",
    previewLink: "https://www.ajaschool.com/shop/cart",
    githubLink: "",
    duration: "2025.07 - 2025.08",
    role: "풀스택 개발자",
    overview: `장바구니 기능을 추가하여 여러 종류의 상품을 한 번에 구매 가능하도록 함함`,
    achievements: [
      "기존에 상품마다 개별 주문 진행 → 여러 종류의 상품을 한 번에 구매",
      "복잡한 주문내역 깔끔하게 정리, 상태별로 구분하여 조회 가능",
      "기획부터 설계, 디자인, 전 단계를 진행하는 경험을 통해 프로젝트 전체적인 흐름을 이해"
    ],
    challenges: [
      {
        title: "복잡한 데이터 그룹핑 진행",
        problem: "상품-스케줄-가격권 조합으로 인해 복잡한 데이터를 장바구니에 나타내야 함",
        solution: "가격권까지의 단위를 cartItem으로 그룹핑하여 관리"
      },
      {
        title: "장바구니 추가로 인한 기존 기능 수정",
        problem: "장바구니 기능 추가로 인해 기존 주문 기능 전면 수정 필요",
        solution: "기존 주문의 데이터 구조를 수정하여 장바구니에 맞는 기능으로 변경"
      }
    ],
    learnings: `내가 만든 기능을 팀원들과 소통하는 과정에서 많은 것을 배웠다.
    프론트 개발자와 소통하여 작업을 진행하는 과정에서 설계도, 다이어그램 작성을 진행하고,
    디자인은 내부 디자이너에게 피드백을 받아 완성시키고, 주문 기능 변경 사항은 운영팀에게 이해시켜 운영에 차질이 없도록 했다.
    이렇게 프로젝트의 진행 흐름과 소통의 중요성을 깨달았다.
    
    개발 측면에서는 장바구니로 인해 주문 기능 전면 수정이 필요하여 깃 브랜치 관리를 실수 없이 하려고 노력했고, 코드의 확장성과 유연성이 얼마나 중요한지 깨달았다.`
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
    overview: `기존 레거시 웹사이트에 유저의 기존 체험학습 기록과 자신이 추가한 추억을 함께 볼 수 있는 앨범 기능을 추가하였다.`,
    achievements: [
      "유저의 기존 리뷰 조회 가능",
      "앨범에 따로 유저의 추억을 저장하고 리뷰와 함께 조회 가능",
      "유저의 사이트 체류 시간 증가"
    ],
    challenges: [
      {
        title: "생소한 기술 경험",
        problem: "스위퍼, 화면 캡처 등 생소한 기술을 많이 써야 했다.",
        solution: "빠른 학습과 AI 툴을 적극적으로 활용하여 빠르게 습득하고 개발했다."
      },
      {
        title: "브라우저 호환성 문제",
        problem: "크롬에서는 되는데 사파리에서는 안되고, 안드로이드 웹뷰에서는 안되는 등 사용 환경에 따라 다른 문제가 발생",
        solution: "버그를 수정할 때마다 브라우저별 테스트 및 확인을 진행하여 문제를 해결했다."
      }
    ],
    learnings: `HTML/CSS 경험이 많이 없던 시기에 스위퍼, html2canvas, 이미지 저장 등 다양한 기술을 사용해볼 수 있는 경험이었다.
    화면 캡처도 다양한 라이브러리마다 브라우저 호환성, 장단점이 있었고
    이미지 저장도 단순 다운로드는 보안 문제가 있어 불가하고, 서버에 저장 후 링크를 주는 방식 등 다양한 방식이 있는 걸 알 수 있었다.`
  },{
    id: 4,
    title: "서버 이전 및 PHP 버전 업그레이드",
    image: projectImage5,
    description: "레거시 서버 환경을 현대적인 환경으로 마이그레이션",
    techstack: "PHP, MySQL, Linux, Apache, Docker",
    previewLink: "",
    githubLink: "",
    duration: "2024.12 - 2024.12",
    role: "인프라 개발자",
    teamSize: "개인 프로젝트",
    overview: `TLS 버전 업그레이드가 필요한 상황에 기존 레거시 서버 환경은 OS버전이 낮아 PHP 업그레이드가 불가능해 서버 이전과 PHP 업그레이드를 진행하기로 했습니다.
    이 중 서버 이전은 의뢰하고 코드 버전 호환, 이전 후 점검을 맡았습니다.`,
    achievements: [
      "호스팅 서버 이전, PHP 5.x → PHP 7.x 업그레이드",
      "이전 후 테스트 및 점검 진행",
      "보안 취약점 100% 해결"
    ],
    challenges: [
      {
        title: "PHP 버전 업그레이드",
        problem: "PHP 버전 호환성 문제 및 레거시 코드 수정",
        solution: "비대한 프로젝트에서 이제 사용할 수 없는 함수 및 문법을 찾아가며 수정. IDLE를 최대한 활용했다."
      },
      {
        title: "배포 후 문제 발생",
        problem: "배포 후 문제가 발생하여 일부 결제 기능이 작동하지 않았다.",
        solution: "최대한 빨리 문제가 발생한 부분을 찾아봤지만 운영을 해야 하는 시간이었기에, 롤백 후 다시 이전할 날짜를 잡아 진행했다."
      }
    ],
    learnings: `인프라 마이그레이션 과정에서 서비스 안정성과 테스트 서버, 무중단 배포의 중요성을 배웠습니다. 
    배포 후 문제 발생 시 식은땀이 나는 급한 상황에서 최대한 빨리 문제를 찾아내고 해결하는 경험을 했습니다.
    이를 교훈 삼아 다음 프로젝트에서는 무중단 배포 환경 구성을 최우선적으로 고려했습니다.`
  },{
    id: 5,
    title: "자사 상품 네이버 플레이스 API 연동",
    image: projectImage4,
    description: "네이버 플레이스(프로그램) API와 자사 API 개발을 통해 자사 상품 및 주문 내역 네이버 플레이스와 동기화",
    techstack: "PHP, MySQL, Naver API, curl",
    previewLink: "https://map.naver.com/p/entry/place/11620570?lng=126.980388&lat=37.5240867&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202510262215&locale=ko&svcName=map_pcv5&entry=plt&searchType=place&c=15.00,0,0,0,dh",
    githubLink: "",
    duration: "2024.9 - 2024.11",
    role: "풀스택 개발자",
    overview: `네이버 플레이스 API를 활용하여 자사 백오피스에서 상품 등록/수정 시 자동으로 네이버 플레이스에 동기화하는 시스템을 개발. 
    추가로 자사 API 개발을 통해 네이버에서 주문이 들어올 시 자사 백오피스에서 한 번에 확인/관리 가능하도록 개발`,
    achievements: [
      "API 연동으로 반복 업로드 작업 자동화로 업무 효율성 향상",
      "데이터 동기화 정확도 99% 달성",
      "네이버 판매로 매출 약 560% 상승"
    ],
    challenges: [
      {
        title: "혼자 개발, 소통, 마무리까지 진행한 경험",
        problem: "입사 후 사수 없이 혼자 개발 프로젝트에 참여하게 되었다.",
        solution: "데드라인에 맞춘 계획, 비즈니스 로직 이해, 소통 등 개발 외적으로 많은 것을 해야 했다. 나도 몰랐던 계획성과 소통 능력을 발휘했다."
      },
      {
        title: "생소한 언어 및 기술 경험",
        problem: "내가 모든 개발을 맡아야 하는데 PHP, Curl, Js 등 생소한 언어 및 기술을 써야 했다.",
        solution: "기존 레거시 코드를 참고하고 다른 언어 지식을 활용해 프로그래밍했다. 언어 자체가 어렵지는 않았고 지식이 많이 필요한 디버깅은 AI를 활용해 해결했다."
      }
    ],
    learnings: `- 첫 프로젝트 경험: 혼자 처음으로 무언가를 끝까지 해냈다는 자체가 나에겐 큰 경험이었다.
    
    - 대기업의 작업 방식 체득: 네이버와의 협업으로 API Response나 문서, 소통 방법 등을 많이 배웠다.

    - 자신감: 잘 모르는 언어라도 기존 레거시 코드를 참고하고 빠른 습득력을 기반으로 충분히 개발할 수 있다는 자신감을 얻게 되었다.\n`
  },
  {
    id: 6,
    title: "가치더치 - TogeDutch",
    image: projectImage3,
    description: "배달 공동구매 어플 백엔드 API 개발",
    techstack: "Java, Spring Boot, JPA, JDBC, MySQL, AWS",
    previewLink: "",
    githubLink: "https://github.com/UMC-TogeDutch-Project/TogeDutch_BACKEND_JPA",
    duration: "2022.09 - 2023.02 (6개월)",
    role: "백엔드 개발자",
    overview: `UMC 3기 가치더치 팀프로젝트
SpringBoot, Android를 사용하여 부담되는 배달 최소 금액과 배달팁을 나누기 위한 어플 개발`,
    achievements: [
      "협업으로 API 설계 및 구현 경험",
      "결제 오픈 API 사용 경험",
      "SpringBoot 프로젝트의 구조 이해"
    ],
    challenges: [
      {
        title: "결제 시스템 구현",
        problem: "오픈 API를 사용해 결제 시스템을 구현하는 역할을 맡았다.",
        solution: "API 사용이 처음이었지만 문서를 꼼꼼히 읽고 예제 코드를 참고하여 구현했다."
      }
    ],
    learnings: `팀 협업을 통한 API 설계, 코드 리뷰와 버전 관리, github 사용의 중요성을 깨달았다.
    써본 적 없는 오픈 API, AWS 기술들을 배워가며 개발해보는 과정에서 성장할 수 있었다.`
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "jungmin200132@gmail.com",
  phone: "010-9098-6932",
  education: {
    university: "가톨릭대학교",
    department: "컴퓨터공학부"
  }
};
