import AdvertiesmentSection from '../components/UI/organisms/AdvertiesmentSection';

import GridLayoutTemplate from '../components/templates/GirdLayout';
import ShopListSection from '../components/UI/organisms/ShopItemListSection';
import ShopItemSkeletonBox from '../components/UI/molecules/ShopItemSkeletonBox';

import useInfinityScroll from '../hooks/useInfinityScroll';

import type { NextPage, GetServerSideProps } from 'next';
import type { ShopItemType } from '../data/shopItems';
import SectionLayout from '../components/templates/SectionLayout';

const adImages = [
  { imgSrc: '/assets/advertiesmentImage/ad_image_01.jpeg', imgAlt: '광고 이미지 1' },
  { imgSrc: '/assets/advertiesmentImage/ad_image_02.jpeg', imgAlt: '광고 이미지 2' },
  { imgSrc: '/assets/advertiesmentImage/ad_image_03.jpeg', imgAlt: '광고 이미지 3' }
];

const Home: NextPage<{ fetchedShopItems: ShopItemType[] }> = ({ fetchedShopItems }) => {
  const { currentList, isFetchedDone, observerTargetEl } = useInfinityScroll({
    initialList: fetchedShopItems,
    fetchType: 'shopItems',
    fetchUrl: 'http://localhost:3001/api/fetchShopItems',
    fetchLength: 3
  });

  return (
    <>
      <AdvertiesmentSection
        adTitle='애견 미용 스타일북 온라인 서비스'
        adDesc='애견 미용 스타일에 대한 모든 것을 제공해드려요'
        adImages={adImages}
      />
      <SectionLayout sectionTitle='매장 리스트'>
        <GridLayoutTemplate columnWith='300px'>
          <ShopListSection shopItems={currentList as ShopItemType[]} />
          {!isFetchedDone && <ShopItemSkeletonBox ref={observerTargetEl} />}
        </GridLayoutTemplate>
      </SectionLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/api/fetchShopItems', {
    method: 'POST',
    body: JSON.stringify({
      fetchStartIndex: 0,
      fetchLength: 3
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });

  const { fetchedShopItems } = await res.json();

  return {
    props: {
      fetchedShopItems
    }
  };
};

export default Home;
