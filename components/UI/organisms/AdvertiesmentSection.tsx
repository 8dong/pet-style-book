import styled from 'styled-components';

import SectionTitle from '../atoms/text/SectionTitleText';
import SectionDesc from '../atoms/text/SectionDescText';
import CarouselImagesBox from '../molecules/CarouselImagesBox';

import type { ImageElementProps } from '../atoms/image/ImageElement';

interface AdvertiesmentSectionProps {
  adTitle: string;
  adDesc: string;
  adImages: ImageElementProps[];
}

const AdvertiesmentSection = ({ adTitle, adDesc, adImages }: AdvertiesmentSectionProps) => {
  return (
    <AdvertiesmentSectionWrapper>
      <div className='advertiesInfo'>
        <SectionTitle>{adTitle}</SectionTitle>
        <SectionDesc>{adDesc}</SectionDesc>
      </div>
      <div className='advertiesImage'>
        <CarouselImagesBox images={adImages} />
      </div>
    </AdvertiesmentSectionWrapper>
  );
};

const AdvertiesmentSectionWrapper = styled.section`
  display: flex;

  margin-bottom: 20px;

  background-color: #84817a;

  .advertiesInfo {
    display: flex;
    flex-direction: column;

    width: 50%;
    padding: 20px;
  }

  .advertiesInfo h2 {
    width: 60%;
    margin-bottom: 20px;

    color: #fff;
  }

  .advertiesInfo strong {
    width: 60%;

    color: #e4e4e4;
  }

  .advertiesImage {
    width: 50%;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }

    .advertiesInfo {
      width: 100%;
    }

    .advertiesInfo h2 {
      width: 100%;
    }

    .advertiesInfo strong {
      width: 100%;
    }

    .advertiesImage {
      width: 90%;
      height: 300px;

      margin: 0 auto 30px;
    }
  }
`;

export default AdvertiesmentSection;
