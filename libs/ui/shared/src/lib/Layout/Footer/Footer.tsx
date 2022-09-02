import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Logo } from './Logo';

export const Footer = () => (
  <Box bg="bg-accent" color="on-accent">
    <Container
      as="footer"
      maxWidth="7xl"
      role="contentinfo"
      py={{ base: '12', md: '16' }}
    >
      <Stack spacing={{ base: '4', md: '5' }}>
        <Stack justify="space-between" direction="row" align="center">
          <Logo />
          <ButtonGroup variant="ghost-on-accent">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
);
