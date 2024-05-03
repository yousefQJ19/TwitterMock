import { Button,Text } from "@chakra-ui/react";

function MiddleBarButton({ showBorder, setShowBorder,context }){
    return (
        <Button textAlign={"center"}
                w="50%"
                h="40px"
                borderRadius={0}
                bg="black"
                color="white"
                _hover={{ bg: "black" }}
                onClick={(e) => {
                    e.preventDefault();
                    setShowBorder();
                }}
                _focus={{ boxShadow: "none" }}
        >
            <Text
                borderBottom={showBorder ? "solid" : "none"}
                borderColor="rgb(29, 155, 240)"
                borderBottomWidth="3px"
                p={3}
            >
                {context}
            </Text>
        </Button>
    );
}

export default MiddleBarButton;