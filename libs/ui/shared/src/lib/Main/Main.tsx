import { Container } from '@chakra-ui/react';

export interface MainProps {
  children?: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <Container as="main" maxWidth="7xl">
      {children}
    </Container>
  );
}

export default Main;
