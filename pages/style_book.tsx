import GridLayout from '../components/templates/GirdLayout';
import StyleListSection from '../components/UI/organisms/StyleItemListSection';
import StyleItemSkeletonBox from '../components/UI/molecules/StyleItemSkeletonBox';

import useInfinityScroll from '../hooks/useInfinityScroll';

import type { GetServerSideProps } from 'next';
import type { StyleItemType } from '../data/styleItems';

const StyleBook = ({ fetchedStyleItems }: { fetchedStyleItems: StyleItemType[] }) => {
  const { currentList, isFetchedDone, observerTargetEl } = useInfinityScroll({
    initialList: fetchedStyleItems,
    fetchLength: 3,
    fetchType: 'styleItems',
    fetchUrl: 'http://localhost:3001/api/fetchStyleItems'
  });

  return (
    <>
      <GridLayout columnWith='300px'>
        <StyleListSection styleItems={currentList as StyleItemType[]} />
        {!isFetchedDone && <StyleItemSkeletonBox ref={observerTargetEl} />}
      </GridLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3001/api/fetchStyleItems', {
    method: 'POST',
    body: JSON.stringify({
      fetchStartIndex: 0,
      fetchLength: 3
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });

  const { fetchedStyleItems } = await res.json();

  return {
    props: {
      fetchedStyleItems
    }
  };
};

export default StyleBook;
