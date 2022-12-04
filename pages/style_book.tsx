import GridLayout from '../components/templates/GirdLayout';
import StyleListSection from '../components/UI/organisms/StyleItemListSection';

import type { GetServerSideProps } from 'next';
import type { StyleItemType } from '../data/styleItems';

const StyleBook = ({ fetchedStyleItems }: { fetchedStyleItems: StyleItemType[] }) => {
  return (
    <>
      <GridLayout columnWith='300px'>
        <StyleListSection styleItems={fetchedStyleItems} />
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
