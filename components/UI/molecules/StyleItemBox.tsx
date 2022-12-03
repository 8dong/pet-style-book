import styled from 'styled-components';

import ImageElement from '../atoms/image/ImageElement';
import BoxTitleText from '../atoms/text/BoxTitleText';
import LinkText from '../atoms/text/LinkText';

import type { StyleItemType } from '../../../data/styleItems';

const StyleItemBox = ({ styleItem }: { styleItem: StyleItemType }) => {
  return (
    <StyleItemBoxWrapper>
      <div className='styleImage'>
        <ImageElement imgSrc={styleItem.style_img} imgAlt={styleItem.style_desc} />
      </div>
      <div className='styleInfo'>
        <BoxTitleText>{styleItem.style_desc}</BoxTitleText>
        <LinkText linkHref={styleItem.shop_id} linkName={styleItem.shop_name} />
      </div>
    </StyleItemBoxWrapper>
  );
};

const StyleItemBoxWrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  position: relative;

  .styleImage {
    width: 300px;
    height: 200px;
    border-radius: 10px;

    margin-bottom: 20px;

    overflow: hidden;
  }

  .styleInfo {
    display: flex;
    flex-direction: column;
    padding: 0 15px 15px;
  }

  strong {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 5px;

    color: #5b5b5b;
  }

  a {
    font-size: 15px;
    font-style: italic;
  }
`;

export default StyleItemBox;
