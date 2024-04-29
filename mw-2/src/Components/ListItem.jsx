import { ListIcon,ListItem,Text} from "@chakra-ui/react";

function LeftListItem({Icon,ItemText}){
    return(
        <ListItem color={"white"} >
                <ListIcon   as={Icon} 
                            color='white.500'
                            boxSize={7}/>
                            <Text   
                                    paddingLeft={"10px"} 
                                    display={"inline"} 
                                    fontSize={20}>
                                        {ItemText}
                            </Text> 
        </ListItem>
    )
}

export default LeftListItem;