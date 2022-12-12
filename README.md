# PET STYLE BOOK

## 프로젝트 실행

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3001/" target="_blank">http://localhost:3001/</a> 접속

## 프로젝트 구현 영상

<a href="https://www.youtube.com/watch?v=ftEKvypArIk">https://www.youtube.com/watch?v=ftEKvypArIk</a>

## 기술 스택

  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styled-components">

## 디자인 패턴

아토믹(Atomic) 디자인 패턴을 이번 프로젝트에 적용하였으며, 컴포넌트 재사용성과 명확한 파일 구조를 적용해보고자 사용하게 되었습니다.

atoms, molecules, organisms, template으로 프로젝트를 구성하였습니다.

1. atoms
   : atoms는 프로젝트 내 사용되는 가장 작은 컴포넌트 단위들로 구성, 더이상 분해되지 않는 가장 작은 단위의 컴포넌트들이 존재합니다.

2. molecules
   : molecules는 atoms 내 컴포넌트를 조합하여 구성된 컴포넌트들이 존재합니다.

3. organisms
   : organisms는 molecules와 atoms 내 컴포넌트들로 구성된 컴포넌트들이 존재합니다.
   organisms 컴포넌트부터 각 컴포넌트의 의미가 존재합니다.

4. templates
   : templates는 Layout 역할을 하는 컴포넌트입니다.

- 아토믹 디자인 패턴 적용 후기

  - 장점
    : 컴포넌트들을 atoms 단위부터 만들어 사용하여 컴포넌트 재사용성이 용이했으며, 실제 프로젝트 구조가 atoms, molecules, organisms, tempaltes와 같이 명확하게 구조화되어 편리했습니다.

  - 단점
    : 프로젝트 개발 당시 초기 디자인 시안이 없어 각 컴포넌트에 어느정도의 CSS 스타일을 적용해야 할지 판단하는데 어려움을 갖게 되었으며, molecules와 organisms의 분류에 대해 어려움을 겪었습니다.
    해당 프로젝트에서는 컴포넌트가 독립적으로 존재했을 때 의미를 갖게되는 경우 organisms 컴포넌트로 분류하여 구성하였습니다.

기존 아토믹과 다르게 templates은 독립적인 Layout 역할로 분류하였으며, pages는 따로 생성하지 않고 pages 폴더를 사용하였습니다.

## 구현 명세

### 반응형 웹 구현

데스크탑과 모바일 환경을 고려하여 반응형 웹 사이트로 제작하였습니다.

### 컴포넌트

모든 컴포넌트들은 styled-components 라이브러리를 사용하였으며 모든 CSS 스타일을 직접 작성하여 구성하였습니다.

### 상태 관리

매장 좋아요 리스트와 스타일 좋아요 리스트를 Redux 상태 관리 라이브러리를 사용하여 관리했습니다.

아토믹 디자인 패턴의 경우 컴포넌트가 세분화되어 props drilling이 깊어지며, 실제 API 요청을 보내게 된다면 Redux 비동기 미들웨어(redux-thunk) 적용을 위해 Redux로 관리하게 되었습니다.

### Pre-rendering 방식

모든 페이지들은 SSR 방식의 pre-rendering을 사용합니다. SSR 방식을 사용함으로써 SEO 측면을 고려하였습니다.

SSR 방식을 사용함으로써 페이지 접근할 때마다 최신 정보를 가져오도록 하였습니다.

### 매장 리스트(/)

1. 매장 리스트를 Intersection Observer API를 사용하여 Infinity Scroll로 구현하였습니다. 각 매장은 3개씩 로드되며 이후 추가적인 API 요청을 통해 렌더링되로독 구현하였습니다.

2. Skeleton UI를 적용하여 UX 측면을 개선하였습니다.

3. Carousel을 적용하여 3500ms마다 광고 이미지가 자동 슬라이드되도록 구현하였습니다.

4. 각 매장 클릭시 해당 매장 페이지로 이동하게 됩니다.

5. 매장별 좋아요 토글 버튼 클릭하여 좋아요 리스트에 추가/삭제가 가능합니다.

### 스타일 북(/style_book)

1. 스타일 리스트를 Intersection Observer API를 사용하여 Infinity Scroll로 구현하였습니다. 각 스타일은 3개씩 로드되며 이후 추가적인 API 요청을 통해 렌더링되로독 구현하였습니다.

2. Skeleton UI를 적용하여 UX 측면을 개선하였습니다.

3. 각 스타일 정보 하단의 매장 이름 클릭시 해당 매장 페이지로 이동하게 됩니다.

4. 각 스타일의 좋아요 토글 버튼을 클릭하여 좋아요 리스트에 추가/삭제가 가능합니다.

### 나의 메뉴(/my_info)

1. 매장 좋아요 리스트와 스타일 좋아요 리스트를 표시하는 페이지입니다.

### 매장 디테일(/[shopId])

1. 특정 매장에 대한 정보를 표시합니다.
