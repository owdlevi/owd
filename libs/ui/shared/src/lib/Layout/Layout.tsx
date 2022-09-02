import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { NavigationWithSubHeader } from '@owd/ui/shared';
import { Main } from '../Main/Main';
import { Footer } from './Footer/Footer';

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationWithSubHeader />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
