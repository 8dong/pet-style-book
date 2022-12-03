import ShopItemBox from '../molecules/ShopItemBox';
import ShopItemSkeletonBox from '../molecules/ShopItemSkeletonBox';

import useInfinityScroll from '../../../hooks/useInfinityScroll';

import type { ShopItemType } from '../../../data/shopItems';

const ShopListSection = ({ shopItems }: { shopItems: ShopItemType[] }) => {
  const { currentList, isFetchedDone, observerTargetEl } = useInfinityScroll({
    initialList: shopItems,
    fetchType: 'shopItems',
    fetchUrl: 'http://localhost:3001/api/fetchShopItems',
    fetchLength: 3
  });

  return (
    <>
      {currentList.map((shopItem) => (
        <li key={shopItem.id}>
          <ShopItemBox shopItem={shopItem} />
        </li>
      ))}
      {!isFetchedDone && <ShopItemSkeletonBox ref={observerTargetEl} />}
    </>
  );
};

export default ShopListSection;
