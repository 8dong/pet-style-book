import ShopDetailSection from '../components/UI/organisms/ShopDetailSection';

import type { GetServerSideProps } from 'next';
import type { ShopItemType } from '../data/shopItems';
import SectionLayout from '../components/templates/SectionLayout';

const ShopDetail = ({ findShopItem }: { findShopItem: ShopItemType }) => {
  return (
    <>
      <SectionLayout sectionTitle='매장 정보'>
        <ShopDetailSection shopItem={findShopItem} />
      </SectionLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const shopId = context.params!.shopId;

  const res = await fetch('http://localhost:3001/api/fetchShopItems', {
    method: 'POST',
    body: JSON.stringify({
      fetchStartIndex: 0
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });
  const { fetchedShopItems: allShopItems } = await res.json();

  const findShopItem = (allShopItems as ShopItemType[]).find((shopItem) => shopItem.id === shopId);

  return {
    props: {
      findShopItem
    }
  };
};

export default ShopDetail;
