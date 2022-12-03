import styled from 'styled-components';

const TelText = ({ children }: { children: string }) => {
  return (
    <TelTextWrapper href={`tel:${children}`}>
      <i className='fi fi-rr-phone-call'></i>
      {children}
    </TelTextWrapper>
  );
};

const TelTextWrapper = styled.a`
  display: flex;
  width: max-content;
  font-size: 15px;
  color: #1890ff;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
`;

export default TelText;
