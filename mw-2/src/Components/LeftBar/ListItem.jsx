import { ListIcon,ListItem,Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom"
function LeftListItem({Icon,ItemText,href}){
    return(
        <ListItem color={"white"} >
                <ListIcon   as={Icon} 
                            color='white.500'
                            boxSize={7}/>
                            <Text   
                                    paddingLeft={"10px"} 
                                    display={"inline"} 
                                    fontSize={20}>
                                        <NavLink to={href}>{ItemText}</NavLink>
                            </Text> 
        </ListItem>
    )
}

export default LeftListItem;