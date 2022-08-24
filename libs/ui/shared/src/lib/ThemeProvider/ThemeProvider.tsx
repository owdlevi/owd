import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export interface ThemeProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
