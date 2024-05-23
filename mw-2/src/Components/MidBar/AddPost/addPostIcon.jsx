/* eslint-disable react/prop-types */
import {Button} from "@chakra-ui/react"


function AddPostIcon({Icon}){
    return(
        <Button _hover={{background:"black"}}
                    size={19} p={0} m={0} bg={"black"} 
                    color={"rgb(29, 155, 240)"} 
                    leftIcon={<Icon size={19}/>}/>
    )
}

export default AddPostIcon;