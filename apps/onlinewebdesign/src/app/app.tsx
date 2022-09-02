import NxWelcome from './nx-welcome';
import { Layout, ThemeProvider } from '@owd/ui/shared';

export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <NxWelcome title="Test" />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
