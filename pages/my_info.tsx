import { useSelector } from 'react-redux';

import GridLayout from '../components/templates/GirdLayout';
import SectionLayout from '../components/templates/SectionLayout';
import ShopItemListSection from '../components/UI/organisms/ShopItemListSection';
import StyleItemListSection from '../components/UI/organisms/StyleItemListSection';

import type { RootState } from '../redux/store';

const MyInfo = () => {
  const likeShopItems = useSelector((store: RootState) => store.likeShopItems);
  const likeStyleItems = useSelector((store: RootState) => store.likeStyleItems);

  return (
    <>
      <SectionLayout sectionTitle='좋아요한 매장'>
        <GridLayout columnWith='300px'>
          <ShopItemListSection shopItems={likeShopItems} />
        </GridLayout>
      </SectionLayout>
      <SectionLayout sectionTitle='좋아요한 스타일'>
        <GridLayout columnWith='300px'>
          <StyleItemListSection styleItems={likeStyleItems} />
        </GridLayout>
      </SectionLayout>
    </>
  );
};

export default MyInfo;
