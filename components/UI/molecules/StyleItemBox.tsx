import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../atoms/layout/Card';
import ImageElement from '../atoms/image/ImageElement';
import BoxTitleText from '../atoms/text/BoxTitleText';
import LinkText from '../atoms/text/LinkText';
import FloatButton from '../atoms/button/FloatButton';

import likeStyleItemsSlice from '../../../redux/likeStyleItemsSlice';

import type { StyleItemType } from '../../../data/styleItems';
import type { RootState } from '../../../redux/store';

const StyleItemBox = ({ styleItem }: { styleItem: StyleItemType }) => {
  const likeStyleItems = useSelector((store: RootState) => store.likeStyleItems);

  const dispatch = useDispatch();
  const handleClickLikeButton = () => {
    dispatch(likeStyleItemsSlice.actions.toggleLikeHandle(styleItem));
  };

  const isLiked = likeStyleItems.some((likedStyle) => likedStyle.id === styleItem.id)
    ? 'like'
    : 'unlike';

  return (
    <StyleItemBoxWrapper>
      <Card>
        <div className='styleImage'>
          <ImageElement imgSrc={styleItem.style_img} imgAlt={styleItem.style_desc} />
        </div>
        <div className='styleInfo'>
          <BoxTitleText>{styleItem.style_desc}</BoxTitleText>
          <LinkText linkHref={styleItem.shop_id} linkName={styleItem.shop_name} />
        </div>
        <FloatButton
          topPosition='80%'
          leftPosition='80%'
          buttonType={isLiked}
          onClick={handleClickLikeButton}
        >
          <i className='fi fi-sr-heart'></i>
        </FloatButton>
      </Card>
    </StyleItemBoxWrapper>
  );
};

const StyleItemBoxWrapper = styled.li`
  display: flex;
  flex-direction: column;

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
