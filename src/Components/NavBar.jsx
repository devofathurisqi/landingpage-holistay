import React from 'react'
import {
    Container, Box, Image, Input, InputGroup,
    InputLeftElement, Text, Menu, MenuButton, Tag, Avatar,
    MenuList, MenuItem, Icon, MenuDivider, useBreakpointValue,
    useMediaQuery, IconButton,
    Center,

} from '@chakra-ui/react'
import { SearchIcon, HamburgerIcon, AttachmentIcon } from '@chakra-ui/icons'
import Logo from "../Asset/Logo.png"
import LogoOnly from "../Asset/Logo_only.png"

//import component
import Category from './Category'


const NavBar = () => {
    const [isMobile] = useMediaQuery("(max-width: 481px)")
    const display = useBreakpointValue({
        base: 'none',
        md: "block"
    });
    const widht = useBreakpointValue({
        base: "100%",
        md: "400px",
    })
    const displayLogoOnly = useBreakpointValue({
        base: "block",
        md: "none"
    })


    return (
        <Box
            bg="#ffffff"
            color="white"
            p={4}
            position="sticky"
            top={0}
            zIndex={1}
        >
            <Center>
                <Container
                    maxW={isMobile ? "100%" : "6xl"}
                    mx="auto"
                    px={4}
                    py={2}
                    style={{ ...isMobile ? { borderBottom: "none" } : { borderBottom: "0.5px solid gray" } }}
                >
                    <Box display="flex" alignItems="center">
                        <Box>
                            <Image src={Logo} width="20%" cursor="pointer" display={display} />
                        </Box>
                        <Image src={LogoOnly} width="30px" cursor="pointer" display={displayLogoOnly} marginRight="5px" />
                        <Box width="auto">
                            <InputGroup>
                                <InputLeftElement
                                    children={<SearchIcon color='#fea012' />}
                                />
                                <Input width={widht} borderRadius="full"
                                    borderColor="#e2e2e2" type="tel"
                                    placeholder={isMobile ? "Search ....." : "Search Destination?"}
                                    _placeholder={{ opacity: 1, fontFamily: "Poppins" }}
                                    boxShadow="md" />
                            </InputGroup>
                        </Box>
                        <Box ml={4} display={display} marginLeft="auto">
                            <Text fontSize="14px" fontFamily="Poppins" cursor="pointer" letterSpacing="1px" _hover={{ fontWeight: "bold" }}>
                                Be Tenant? <AttachmentIcon />
                            </Text>
                        </Box>
                        <Box marginLeft="auto" display={display}>
                            <Menu>
                                <MenuButton w="70px" >
                                    <Tag bgColor="white" w="40" h="10" borderRadius='full' border="1px" borderColor="gray.300" _hover={{ cursor: "pointer" }} >
                                        <Icon as={HamburgerIcon} mr="2" ml="1" />
                                        <Avatar
                                            size="sm"
                                            name="Devofathurisqi"
                                            bgColor="#FE9900"
                                        />
                                    </Tag>
                                </MenuButton>
                                <MenuList zIndex="3" fontFamily="poppins">
                                    <MenuItem>Register</MenuItem>
                                    <MenuItem>Login</MenuItem>
                                    <MenuDivider />
                                    <MenuItem>Make Your Home Holistay</MenuItem>
                                    <MenuItem>Heko</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                        <Box marginLeft="auto" display={displayLogoOnly}>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                    borderRadius="full"
                                    boxShadow="md"
                                    color="black"
                                />
                                <MenuList color="black">
                                    <MenuItem>
                                        New Tab
                                    </MenuItem>
                                    <MenuItem>
                                        New Window
                                    </MenuItem>
                                    <MenuItem>
                                        Open Closed Tab
                                    </MenuItem>
                                    <MenuItem>
                                        Open File...
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Container>
            </Center>
            <Category />
        </Box>
    )
}

export default NavBar
