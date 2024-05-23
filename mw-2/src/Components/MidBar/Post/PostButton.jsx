/* eslint-disable react/prop-types */
import {Text,Button, Flex } from "@chakra-ui/react";
import { useState } from "react";





function PostButton({Icon,Number,color}){
    const [iconColor,setIconColor] =useState("")
    return(
        <Button
                _hover={{background:"black"}}
                color={"#414040"} 
                flex='1' 
                variant='ghost'>

                <Flex gap={1}    onMouseEnter={()=> setIconColor(color)}
                                onMouseLeave={() => setIconColor("#414040")} >

                    <Icon   color={iconColor}
                            size={20}/>

                    <Text   color={iconColor} >
                                {Number}
                    </Text>
                </Flex>
                
        </Button>
    )
}

export default PostButton;