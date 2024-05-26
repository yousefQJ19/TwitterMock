import { Tabs,TabList,Tab,TabIndicator,TabPanels,TabPanel } from "@chakra-ui/react";

function MiddleBarButton(){
    return (
        <Tabs w={"100%"} variant="unstyled">
        <TabList  h={"50px"}>
            <Tab color={"white"} w={"50%"}>For you</Tab>
            <Tab color={"white"}  w={"50%"}>Following</Tab>
        </TabList>
        <TabIndicator mt='-1.5px' w={"100%"} height='2px' bg='rgb(29, 155, 240)' borderRadius='1px'/>
    </Tabs>
    );
}

export default MiddleBarButton;