import ShopItemBox from '../molecules/ShopItemBox';

import type { ShopItemType } from '../../../data/shopItems';

const ShopListSection = ({ shopItems }: { shopItems: ShopItemType[] }) => {
  return (
    <>
      {shopItems.map((shopItem) => (
        <li key={shopItem.id}>
          <ShopItemBox shopItem={shopItem} />
        </li>
      ))}
    </>
  );
};

export default ShopListSection;
