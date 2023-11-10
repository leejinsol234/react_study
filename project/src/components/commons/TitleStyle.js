import styled, { css } from 'styled-components';
import fontSize from '../../styles/commons/fontSize';

export const TitleStyle = styled.div`
  font-size: ${({ size }) => (size ? fontSize[size] : fontSize.large)};
  border-bottom: 2px solid ${({ bColor }) => bColor || '#000'};
  padding-bottom: 10px;
  margin-bottom: 10px;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

// const num1 = 10;
// const num2 = 20;

// export { num1 };
// export { num2 };
// export default TitleStyle;
// default는 1개만 내보낼 수 있으나 default가 없으면 여러 개도 내보낼 수 있다. 단, 명칭을 바꾸면 안됨
