import { useState, useEffect } from 'react';
import styled from 'styled-components';

import ImageElement from '../atoms/image/ImageElement';

import type { ImageElementProps } from '../atoms/image/ImageElement';

const CarouselImagesBox = ({ images }: { images: ImageElementProps[] }) => {
  const [showImageIndex, setShowImageIndex] = useState(0);
  const imagesLength = images.length;

  // 3500ms마다 showImageIndex 1씩 증가, fake image 도달시 showImageIndex 0으로 복귀
  useEffect(() => {
    const timerId = setInterval(() => {
      setShowImageIndex((prevIndex) => (prevIndex === imagesLength ? 0 : prevIndex + 1));
    }, 3500);

    return () => clearInterval(timerId);
  }, [imagesLength]);

  return (
    <CarouselImagesBoxWrapper showImageIndex={showImageIndex}>
      <ul>
        {images.map((image, index) => {
          return <ImageElement key={index} imgSrc={image.imgSrc} imgAlt={image.imgAlt} />;
        })}

        {/* fake image */}
        <ImageElement imgSrc={images[0].imgSrc} imgAlt={images[0].imgAlt} />
      </ul>
    </CarouselImagesBoxWrapper>
  );
};

const CarouselImagesBoxWrapper = styled.div<{ showImageIndex: number }>`
  width: 100%;
  height: 100%;

  overflow-x: hidden;

  ul {
    display: flex;
    height: 100%;

    transition: ${(props) => (props.showImageIndex === 0 ? '' : 'transform 2500ms ease-in-out')};
    transform: ${(props) => `translateX(calc(100% * -${props.showImageIndex}))`};
  }

  ul div {
    flex-shrink: 0;
  }
`;

export default CarouselImagesBox;
