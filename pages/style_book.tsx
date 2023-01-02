import GridLayout from '../components/templates/GirdLayout';
import StyleListSection from '../components/UI/organisms/StyleItemListSection';
import StyleItemSkeletonBox from '../components/UI/molecules/StyleItemSkeletonBox';

import useInfinityScroll from '../hooks/useInfinityScroll';

import type { GetServerSideProps } from 'next';
import type { StyleItemType } from '../data/styleItems';
import SectionLayout from '../components/templates/SectionLayout';

const StyleBook = ({ fetchedStyleItems }: { fetchedStyleItems: StyleItemType[] }) => {
  const { currentList, isFetchedDone, observerTargetEl } = useInfinityScroll({
    initialList: fetchedStyleItems,
    fetchLength: 3,
    fetchType: 'styleItems',
    fetchUrl: '/styleItem'
  });

  return (
    <>
      <SectionLayout sectionTitle='스타일 리스트'>
        <GridLayout columnWith='300px'>
          <StyleListSection styleItems={currentList as StyleItemType[]} />
          {!isFetchedDone && <StyleItemSkeletonBox ref={observerTargetEl} />}
        </GridLayout>
      </SectionLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    'http://api2-env.eba-zzvw8krp.ap-northeast-2.elasticbeanstalk.com/styleItem',
    {
      method: 'POST',
      body: JSON.stringify({
        fetchStartIndex: 0,
        fetchLength: 3
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }
  );

  const { fetchedStyleItems } = await res.json();

  return {
    props: {
      fetchedStyleItems
    }
  };
};

export default StyleBook;
