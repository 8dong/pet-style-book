import GridLayout from '../components/templates/GirdLayout';
import StyleListSection from '../components/UI/organisms/StyleItemListSection';

import styleItems from '../data/styleItems';

const StyleBook = () => {
  return (
    <>
      <GridLayout columnWith='300px'>
        <StyleListSection styleItems={styleItems} />
      </GridLayout>
    </>
  );
};

export default StyleBook;
