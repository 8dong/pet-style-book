import ShopItemBox from '../molecules/ShopItemBox';
import ShopItemSkeletonBox from '../molecules/ShopItemSkeletonBox';

import type { ShopItemType } from '../../../data/shopItems';

const ShopListSection = ({ shopItems }: { shopItems: ShopItemType[] }) => {
  return (
    <>
      {shopItems.map((shopItem) => (
        <li key={shopItem.id}>
          <ShopItemBox shopItem={shopItem} />
        </li>
      ))}
      <ShopItemSkeletonBox />
    </>
  );
};

export default ShopListSection;
