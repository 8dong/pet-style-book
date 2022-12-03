import styled from 'styled-components';

const TimeText = ({ children }: { children: string }) => {
  return (
    <TimeTextWrapper>
      <i className='fi fi-rr-clock'></i>
      {children}
    </TimeTextWrapper>
  );
};

const TimeTextWrapper = styled.time`
  display: flex;
  width: max-content;

  font-size: 15px;
  color: #818181;

  i {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 5px;
  }
`;

export default TimeText;
