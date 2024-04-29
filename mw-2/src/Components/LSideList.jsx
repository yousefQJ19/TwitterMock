import { Button, Flex, List,ListIcon,ListItem,Text,Box,Image } from "@chakra-ui/react";
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
import SideListProfileItem from "./SideListProfileItem";



//fix the icon and text alining problem 
//fix the responsiveness
function LeftSideList(){
    return(
    <Flex   flexDirection={"column"}
            pl={50}
            pt={3}
            bg={"black"} 
            height={"100vh"}
            w={80}
            >

        <FaXTwitter size={30} 
                    color="white"/>

        <List spacing={5} fontSize={25} pt={6}>
            <LeftListItem Icon={IoMdHome} ItemText={"Home"}/>
            <LeftListItem Icon={IoMdSearch} ItemText={"ُExplore"}/>
            <LeftListItem Icon={FaRegBell} ItemText={"Notifications"}/>
            <LeftListItem Icon={BiMessageSquare} ItemText={"Messages"}/>
            <LeftListItem Icon={MdOutlineFeaturedPlayList} ItemText={"Lists"}/>
            <LeftListItem Icon={PiBookmarkSimpleLight} ItemText={"Bookmarks"}/>
            <LeftListItem Icon={FaUserFriends} ItemText={"Communities"}/>
            <LeftListItem Icon={CgProfile} ItemText={"Profile"}/>
            <LeftListItem Icon={CiCircleMore} ItemText={"More"}/>
            <Button px={10} py={7} w={230} borderRadius={30} bg="#52D3D8">Post</Button>
        </List>
        <SideListProfileItem/>
    </Flex>
    )
}

export default LeftSideList;