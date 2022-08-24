import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ThemeProps {}

const StyledTheme = styled.div`
  color: pink;
`;

export function Theme(props: ThemeProps) {
  return (
    <StyledTheme>
      <h1>Welcome to Theme!</h1>
    </StyledTheme>
  );
}

export default Theme;
