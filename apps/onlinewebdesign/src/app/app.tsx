import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { Banner, ThemeProvider } from '@owd/ui/shared';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <ThemeProvider>
      <Banner />
    </ThemeProvider>
  );
}

export default App;
