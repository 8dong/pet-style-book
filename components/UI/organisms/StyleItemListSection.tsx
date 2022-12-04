import StyleItemBox from '../molecules/StyleItemBox';
import StyleItemSkeletonBox from '../molecules/StyleItemSkeletonBox';

import useInfinityScroll from '../../../hooks/useInfinityScroll';

import type { StyleItemType } from '../../../data/styleItems';

const StyleListSection = ({ styleItems }: { styleItems: StyleItemType[] }) => {
  const { currentList, isFetchedDone, observerTargetEl } = useInfinityScroll({
    initialList: styleItems,
    fetchLength: 3,
    fetchType: 'styleItems',
    fetchUrl: 'http://localhost:3001/api/fetchStyleItems'
  });

  return (
    <>
      {(currentList as StyleItemType[]).map((styleItem) => (
        <StyleItemBox key={styleItem.id} styleItem={styleItem}></StyleItemBox>
      ))}
      {!isFetchedDone && <StyleItemSkeletonBox ref={observerTargetEl} />}
    </>
  );
};

export default StyleListSection;
