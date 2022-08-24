import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { UiShared } from '@owd/ui/shared';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <UiShared />
      <NxWelcome title="onlinewebdesign" />
    </StyledApp>
  );
}

export default App;
