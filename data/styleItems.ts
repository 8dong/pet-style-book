export interface StyleItemType {
  id: string;
  shop_id: string;
  shop_name: string;
  style_desc: string;
  style_img: string;
}

const styleItems: StyleItemType[] = [
  {
    id: '634ab520bc1502df24619585',
    shop_id: '63494f40b484e885502ea8f5',
    shop_name: '뷰티 애견 살롱',
    style_desc: '푹신한 솜사탕 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2018/09/26/09/23/pet-dogs-3704090__480.jpg'
  },
  {
    id: '634adf6458cd9e0f7ecbbe43',
    shop_id: '63494f40b484e885502ea8f5',
    shop_name: '뷰티 애견 살롱',
    style_desc: '곰돌이 같은 푸근한 스타일',
    style_img: 'https://i.imgur.com/SUOpnIM.jpg'
  },
  {
    id: '634adfbd58cd9e0f7ecbbe44',
    shop_id: '63494f40b484e885502ea8f5',
    shop_name: '뷰티 애견 살롱',
    style_desc: '우직하고 듬직한 스타일',
    style_img: 'https://i.imgur.com/x1HxSIi.jpg'
  },
  {
    id: '6363acb1c7576a4774d76b00',
    shop_id: '63494f40b484e885502ea8f5',
    shop_name: '뷰티 애견 살롱',
    style_desc: '순두부같은 뽀시래기',
    style_img: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
  },
  {
    id: '634fb9b5509b3fc88d8bbe9b',
    shop_id: '634fb9d3509b3fc88d8bbea0',
    shop_name: '쿨 애견 살롱',
    style_desc: '댄디한 닥스훈드',
    style_img: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg'
  },
  {
    id: '634fb9bb509b3fc88d8bbe9c',
    shop_id: '634fb9d3509b3fc88d8bbea0',
    shop_name: '쿨 애견 살롱',
    style_desc: '사랑스런 포메리안 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2018/05/17/06/22/dog-3407906_1280.jpg'
  },
  {
    id: '634fb9c1509b3fc88d8bbe9d',
    shop_id: '634fb9d3509b3fc88d8bbea0',
    shop_name: '쿨 애견 살롱',
    style_desc: '느낌적인 모델 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2017/03/27/13/23/dog-2178696_1280.jpg'
  },
  {
    id: '636369c105ef54530669cf7e',
    shop_id: '6363693b05ef54530669cf7d',
    shop_name: '카와이 애견 살롱',
    style_desc: '청순하고 백옥같은 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_1280.jpg'
  },
  {
    id: '636369d805ef54530669cf7f',
    shop_id: '6363693b05ef54530669cf7d',
    shop_name: '카와이 애견 살롱',
    style_desc: '귀여운 우리집 막내',
    style_img: 'https://cdn.pixabay.com/photo/2020/01/21/16/26/yorkshire-terrier-4783327_1280.jpg'
  },
  {
    id: '636369e105ef54530669cf80',
    shop_id: '6363693b05ef54530669cf7d',
    shop_name: '카와이 애견 살롱',
    style_desc: '킹스맨 JB 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2016/11/18/13/57/pug-1834721_1280.jpg'
  },
  {
    id: '63636b1a05ef54530669cf82',
    shop_id: '63636b0c05ef54530669cf81',
    shop_name: '피카 살롱',
    style_desc: '말괄량이 히피 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2016/08/19/23/53/dog-1606600_1280.jpg'
  },
  {
    id: '63636b2305ef54530669cf83',
    shop_id: '63636b0c05ef54530669cf81',
    shop_name: '피카 살롱',
    style_desc: '부드러운 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2017/12/29/10/47/animal-company-3047244_1280.jpg'
  },
  {
    id: '63636b2a05ef54530669cf84',
    shop_id: '63636b0c05ef54530669cf81',
    shop_name: '피카 살롱',
    style_desc: '똘똘이 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2015/07/31/11/43/rottweiler-869013_1280.jpg'
  },
  {
    id: '63636be905ef54530669cf86',
    shop_id: '63636bd905ef54530669cf85',
    shop_name: '씨엘 애견 살롱',
    style_desc: '러블리한 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2019/02/09/19/20/dog-3985784_1280.jpg'
  },
  {
    id: '63636be905ef54530669cf78',
    shop_id: '63636bd905ef54530669cf85',
    shop_name: '씨엘 애견 살롱',
    style_desc: '시골 강아지 스타일',
    style_img: 'https://cdn.pixabay.com/photo/2019/09/01/16/39/dog-4445518_1280.jpg'
  }
];

export default styleItems;
