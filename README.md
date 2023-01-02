# PET STYLE BOOK

## 프로젝트 실행

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3001/" target="_blank">http://localhost:3001/</a> 접속

## 프로젝트 배포 URL

배포 URL : <a href="https://pet-style-book-8dong.vercel.app/">https://pet-style-book-8dong.vercel.app/</a>

## 기술 스택

  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styled-components">

## 디자인 패턴

아토믹(Atomic) 디자인 패턴을 이번 프로젝트에 적용하였으며, 컴포넌트 재사용성과 명확한 파일 구조를 적용해보고자 사용하게 되었습니다.

atoms, molecules, organisms, template으로 프로젝트를 구성하였습니다.

1.  atoms

    - atoms는 프로젝트 내 사용되는 가장 작은 컴포넌트 단위들로 구성, 더이상 분해되지 않는 가장 작은 단위의 컴포넌트들이 존재합니다.

2.  molecules

    - molecules는 atoms 내 컴포넌트를 조합하여 구성된 컴포넌트들이 존재합니다.

3.  organisms

    - organisms는 molecules와 atoms 내 컴포넌트들로 구성된 컴포넌트들이 존재합니다.

    - organisms 컴포넌트부터 각 컴포넌트의 의미가 존재합니다.

4.  templates

    - templates는 Layout 역할을 하는 컴포넌트입니다.

- 아토믹 디자인 패턴 적용 후기

  - 장점
    : 컴포넌트들을 atoms 단위부터 만들어 사용하여 컴포넌트 재사용성이 용이했으며, 실제 프로젝트 구조가 atoms, molecules, organisms, tempaltes와 같이 명확하게 구조화되어 편리했습니다.

  - 단점
    : 프로젝트 개발 당시 초기 디자인 시안이 없어 각 컴포넌트에 어느정도의 CSS 스타일을 적용해야 할지 판단하는데 어려움을 갖게 되었으며, molecules와 organisms의 분류에 대해 어려움을 겪었습니다.
    해당 프로젝트에서는 컴포넌트가 독립적으로 존재했을 때 의미를 갖게되는 경우 organisms 컴포넌트로 분류하여 구성하였습니다.

  - 기존 아토믹과 다르게 templates은 독립적인 Layout 역할로 분류하였으며, pages는 따로 생성하지 않고 pages 폴더를 사용하였습니다.

## CI/CD

- GitHub Actions를 활용하여 CI/CD 과정을 자동화하였습니다.

- main 브랜치에 push, merge와 같은 이벤트가 발생하는 경우 CICD.yml(workflow)가 자동 실행되도록 설계하였습니다.

## 구현 명세

### API 명세

#### '/shopItem'

- request body에 fetchStartIndex, fetchLength를 포함하여 요청을 전송합니다.

  - fetchStartIndex는 가져올 매장 리스트의 인덱스를 전달합니다.

  - fetchLength는 가져올 매장 리스트의 개수를 전달합니다.

- request body로 요청한 매장 리스트를 응답으로 전달받습니다.

#### '/styleItem'

- request body에 fetchStartIndex, fetchLength를 포함하여 요청을 전송합니다.

  - fetchStartIndex는 가져올 스타일 리스트의 인덱스를 전달합니다.

  - fetchLength는 가져올 스타일 리스트의 개수를 전달합니다.

- request body로 요청한 스타일 리스트를 응답으로 전달받습니다.

### 반응형 웹 구현

- 데스크탑과 모바일 환경을 고려하여 반응형 웹 사이트로 제작하였습니다.

<img src="https://user-images.githubusercontent.com/96307662/210188873-4ffe5b88-e54f-4f80-9ca6-8d81f428180b.gif" alt="responsive web" width="80%" />

### Style

- 모든 컴포넌트들은 styled-components 라이브러리(CSS-in-JS)를 사용하였으며 모든 CSS 스타일을 직접 작성하여 구성하였습니다.

### 상태 관리

#### likeShopItems

- 좋아요한 매장 리스트를 likeShopItems 전역 상태(redux)로 관리하도록 설계하였습니다.

#### likeStyleItems

- 좋아요한 스타일 리스트를 likeStyleItems 전역 상태(redux)로 관리하도록 설계하였습니다.

### 매장 리스트(/)

- Carousel을 적용하여 3500ms마다 광고 이미지가 자동 슬라이드되도록 구현하였습니다.

<img src="https://user-images.githubusercontent.com/96307662/210189153-fc6cfa35-6ce6-4976-a733-50a1aafd1eec.gif" alt="carousel" width="80%" />

<hr />

- 매장 리스트를 Intersection Observer API를 사용하여 Infinity Scroll로 구현하였습니다. 각 매장은 3개씩 로드되며 이후 추가적인 API 요청을 통해 렌더링되로독 구현하였습니다.

- Skeleton UI를 적용하여 UX 측면을 개선하였습니다.

<img src="https://user-images.githubusercontent.com/96307662/210189198-990cdbc6-ccab-4adc-8327-36d0c8a5e695.gif" alt="inifinity scroll" width="80%" />

<hr />

- 매장별 좋아요 토글 버튼 클릭하여 좋아요 리스트에 추가/삭제가 가능합니다.

<img src="https://user-images.githubusercontent.com/96307662/210189231-c8699484-9f03-4e63-87cf-7449705d6761.gif" alt="like shop" width="80%" />

### 스타일 북(/style_book)

- 스타일 리스트를 Intersection Observer API를 사용하여 Infinity Scroll로 구현하였습니다. 각 스타일은 3개씩 로드되며 이후 추가적인 API 요청을 통해 렌더링되로독 구현하였습니다.

- Skeleton UI를 적용하여 UX 측면을 개선하였습니다.

<img src="https://user-images.githubusercontent.com/96307662/210189286-88de3167-3b02-4b10-a94b-f2541f4b25bc.gif" alt="infinity scroll" width="80%" />

<hr />

- 각 스타일의 좋아요 토글 버튼을 클릭하여 좋아요 리스트에 추가/삭제가 가능합니다.

<img src="https://user-images.githubusercontent.com/96307662/210189330-575b6197-a7ea-4511-9957-200399172d9c.gif" alt="like style" width="80%" />

<hr />

- 각 스타일 정보 하단의 매장 이름 클릭시 해당 매장 페이지로 이동하게 됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210189381-d42740c1-37d6-497d-8c3d-d7ea77d001d9.gif" alt="link shop" width="80%" />

### 매장 디테일(/[shopId])

- 특정 매장에 대한 정보를 표시합니다.

- Kakaomap API를 사용하여 매장 위치를 표시할 수 있도록 구현하였습니다.

### 나의 메뉴(/my_info)

- 매장 좋아요 리스트와 스타일 좋아요 리스트를 보여주는 페이지입니다.

<img src="https://user-images.githubusercontent.com/96307662/210189533-ef7d0111-d70a-43b1-a256-bb648fb46eef.gif" alt="myifo page" width="80%" />
