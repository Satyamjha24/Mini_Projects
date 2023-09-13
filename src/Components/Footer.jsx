'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { RxAvatar } from 'react-icons/rx'


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('teal.300', 'teal.600')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text fontWeight={'bold'}>© 2023 Satyam. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
        <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/satyamjha24/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'GitHub'} href={'https://github.com/Satyamjha24'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Portfolio'} href={'https://satyamjha24.github.io/'}>
              <RxAvatar />
            </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}