import {Flex} from"@chakra-ui/react"
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { HiMiniGif } from "react-icons/hi2";
import { BiPoll } from "react-icons/bi";
import { MdEmojiEmotions } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

function MiddleBarIconList(){

    return(
        <Flex justifyContent={"space-between"} gap={3} >
                        <MdOutlinePhotoSizeSelectActual size={19} color={"rgb(29, 155, 240)"}/>
                        <HiMiniGif size={19} color={"rgb(29, 155, 240)"}/>
                        <BiPoll size={19} color={"rgb(29, 155, 240)"}/>
                        <MdEmojiEmotions size={19} color={"rgb(29, 155, 240)"}/>
                        <AiOutlineSchedule size={19} color={"rgb(29, 155, 240)"}/>
                        <FaLocationDot size={19} color={"rgb(29, 155, 240)"}/>
        </Flex>
    )
}

export default MiddleBarIconList;