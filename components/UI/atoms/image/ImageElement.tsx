import Image from 'next/image';
import styled from 'styled-components';

export interface ImageElementProps {
  imgSrc: string;
  imgAlt: string;
}

const ImageElement = ({ imgSrc, imgAlt }: ImageElementProps) => {
  return (
    <ImageElementWrapper>
      <Image src={imgSrc} alt={imgAlt} fill sizes='(max-width: 768px) 100vw, 60vw' />
    </ImageElementWrapper>
  );
};

const ImageElementWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }
`;

export default ImageElement;
