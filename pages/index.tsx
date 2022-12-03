import AdvertiesmentSection from '../components/UI/organisms/AdvertiesmentSection';

import GridLayoutTemplate from '../components/templates/GirdLayout';
import ShopListSection from '../components/UI/organisms/ShopItemListSection';

import shopItems from '../data/shopItems';

import type { NextPage } from 'next';

const adImages = [
  { imgSrc: '/assets/advertiesmentImage/ad_image_01.jpeg', imgAlt: '광고 이미지 1' },
  { imgSrc: '/assets/advertiesmentImage/ad_image_02.jpeg', imgAlt: '광고 이미지 2' },
  { imgSrc: '/assets/advertiesmentImage/ad_image_03.jpeg', imgAlt: '광고 이미지 3' }
];

const Home: NextPage = () => {
  return (
    <>
      <AdvertiesmentSection
        adTitle='애견 미용 스타일북 온라인 서비스'
        adDesc='애견 미용 스타일에 대한 모든 것을 제공해드려요'
        adImages={adImages}
      />
      <GridLayoutTemplate columnWith='300px'>
        <ShopListSection shopItems={shopItems} />
      </GridLayoutTemplate>
    </>
  );
};

export default Home;
