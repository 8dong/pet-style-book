import styled from 'styled-components';

interface FloatButtonProps {
  buttonType: 'like' | 'unlike';
  topPosition: string;
  leftPosition: string;
  children: React.ReactNode;
  onClick: Function;
}

const buttonColor = {
  like: '#f44336',
  unlike: '#d4d4d4'
};

const FloatButton = ({
  buttonType,
  topPosition,
  leftPosition,
  children,
  onClick
}: FloatButtonProps) => {
  const handleClickFloatButton = () => {
    onClick();
  };

  const mappedColor = buttonColor[buttonType];

  return (
    <FloatButtonWrapper
      onClick={handleClickFloatButton}
      topPosition={topPosition}
      leftPosition={leftPosition}
      mappedColor={mappedColor}
    >
      {children}
    </FloatButtonWrapper>
  );
};

const FloatButtonWrapper = styled.button<{
  topPosition: string;
  leftPosition: string;
  mappedColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  position: absolute;
  top: ${(props) => props.topPosition};
  left: ${(props) => props.leftPosition};

  cursor: pointer;

  transition: transform 800ms;

  &:active {
    transform: scale(2);
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33px;
    height: 33px;

    font-size: 1.3em;
    color: ${(props) => props.mappedColor};

    transition: color 500ms;
  }
`;

export default FloatButton;
