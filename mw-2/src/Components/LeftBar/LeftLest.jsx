import { AbsoluteCenter, Box, Button, Flex, List} from "@chakra-ui/react";
//importing icons
import { IoMdHome,IoMdSearch  } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegBell,FaUserFriends  } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BiMessageSquare } from "react-icons/bi";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
//importing list item component
import LeftListItem from "./ListItem";
import SideListProfileItem from "./LeftBarProfile";



//fix the icon and text alining problem 
//fix the responsiveness
function LeftSideList(){
    return(
        <Box  height="100vh"
                bg="black"  
                overflow="hidden"  
                width={"320px"} 
                pr={5}   >

            <Flex  pos={"fixed"}
                    gap={4}
                    h={"full"}
                    flexDirection={"column"}
                    bg={"black"}
                    pl={8}
                    width={"320px"}
                    borderRight={"1px solid #414040"}
                    >

                <FaXTwitter size={30} 
                            color="white"/>

                <List spacing={5} fontSize={25}   > 
                    <LeftListItem Icon={IoMdHome} ItemText={"Home"} href={"/"}/>
                    <LeftListItem Icon={IoMdSearch} ItemText={"ُExplore"}/>
                    <LeftListItem Icon={FaRegBell} ItemText={"Notifications"}/>
                    <LeftListItem Icon={BiMessageSquare} ItemText={"Messages"}/>
                    <LeftListItem Icon={MdOutlineFeaturedPlayList} ItemText={"Lists"}/>
                    <LeftListItem Icon={PiBookmarkSimpleLight} ItemText={"Bookmarks"}/>
                    <LeftListItem Icon={FaUserFriends} ItemText={"Communities"}/>
                    <LeftListItem Icon={CgProfile} ItemText={"Profile"}/>
                    <LeftListItem Icon={CiCircleMore} ItemText={"More"}/>
                    <Button 
                        px={10} 
                        py={7} 
                        w={230} 
                        borderRadius={30} 
                        color={"white"} 
                        bg={"rgb(29, 155, 240)"}>
                        Post
                    </Button>
                </List>
                <SideListProfileItem/>
            </Flex>
        </Box>
    )
}

export default LeftSideList;