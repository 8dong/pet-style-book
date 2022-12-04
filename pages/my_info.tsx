import { useSelector } from 'react-redux';

import GridLayout from '../components/templates/GirdLayout';
import SectionLayout from '../components/templates/SectionLayout';
import Empty from '../components/UI/atoms/layout/Empty';
import ShopItemListSection from '../components/UI/organisms/ShopItemListSection';
import StyleItemListSection from '../components/UI/organisms/StyleItemListSection';

import type { RootState } from '../redux/store';

const MyInfo = () => {
  const likeShopItems = useSelector((store: RootState) => store.likeShopItems);
  const likeStyleItems = useSelector((store: RootState) => store.likeStyleItems);

  const likeShopItemsIsEmpty = likeShopItems.length === 0;
  const likeStyleItemsIsEmpty = likeStyleItems.length === 0;

  return (
    <>
      <SectionLayout sectionTitle='좋아요한 매장'>
        {likeShopItemsIsEmpty ? (
          <Empty>좋아요한 매장이 없습니다.</Empty>
        ) : (
          <GridLayout columnWith='300px'>
            <ShopItemListSection shopItems={likeShopItems} />
          </GridLayout>
        )}
      </SectionLayout>
      <SectionLayout sectionTitle='좋아요한 스타일'>
        {likeStyleItemsIsEmpty ? (
          <Empty>좋아요한 스타일이 없습니다.</Empty>
        ) : (
          <GridLayout columnWith='300px'>
            <StyleItemListSection styleItems={likeStyleItems} />
          </GridLayout>
        )}
      </SectionLayout>
    </>
  );
};

export default MyInfo;
