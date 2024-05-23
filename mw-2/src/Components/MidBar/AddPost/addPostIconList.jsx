/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Flex,IconButton,Button} from"@chakra-ui/react"
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { MdGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { MdEmojiEmotions } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import AddPostIcon from "./addPostIcon";

function AddPostIconList(){

    return(
        <Flex justifyContent={"space-between"} gap={3}>
            <AddPostIcon Icon={MdOutlinePhotoSizeSelectActual}/>
            <AddPostIcon Icon={MdGifBox}/>
            <AddPostIcon Icon={BiPoll}/>
            <AddPostIcon Icon={MdEmojiEmotions}/>
            <AddPostIcon Icon={AiOutlineSchedule}/>
            <AddPostIcon Icon={FaLocationDot}/>
        </Flex>
    )
}

export default AddPostIconList;