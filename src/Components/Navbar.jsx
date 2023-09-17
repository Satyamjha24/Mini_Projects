
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'


const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={4}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Box bg={useColorModeValue('teal.300', 'teal.600')} px={10} position={'fixed'} w={'100vw'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Heading size='lg' color={useColorModeValue('black', 'yellow.200')} fontFamily={"Times New Roman"}>SATYAM</Heading> </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.githubusercontent.com/u/107462251?v=4'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.githubusercontent.com/u/107462251?v=4'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Satyam</p>
                  </Center>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}