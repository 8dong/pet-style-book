import StyleItemBox from '../molecules/StyleItemBox';
import StyleItemSkeletonBox from '../molecules/StyleItemSkeletonBox';

import type { StyleItemType } from '../../../data/styleItems';

const StyleListSection = ({ styleItems }: { styleItems: StyleItemType[] }) => {
  return (
    <>
      {styleItems.map((styleItem) => (
        <StyleItemBox key={styleItem.id} styleItem={styleItem}></StyleItemBox>
      ))}
      <StyleItemSkeletonBox />
    </>
  );
};

export default StyleListSection;
