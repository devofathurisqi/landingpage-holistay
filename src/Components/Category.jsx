import React, { useState } from "react"
import { Box, Text, Image, Button, Center, useMediaQuery, useBreakpointValue } from "@chakra-ui/react";
import { CategorySliders } from "../CategorySliders"
import { SettingsIcon } from "@chakra-ui/icons"


const Category = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile] = useMediaQuery("(max-width: 481px)")
    const numCards = isMobile ? 5 : 10;
    

    const widht = useBreakpointValue({
        base: "auto",
        md: "35px",
    })
    const display = useBreakpointValue({
        base: "none",
        md: "block"
    })
    const MarginRight = useBreakpointValue({
        base: 4,
        md: 8
    })
    
    const handleNext = () => {
        if (currentIndex < CategorySliders.length - numCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
   
    return (
        <Center>
            <Box display="Flex" marginTop={isMobile ? "1px" : "15px"} justifyContent="center" alignItems="center" style={{
                ...isMobile ? { borderBottom: "0.5px solid black", width: "100%" } : { borderBottom: "none" }
            }} >
                <Button onClick={handlePrev} borderRadius="35px" variant="outline" display={display} marginRight="10px" _hover={{ boxShadow: "md" }} color="black" boxShadow="md">{"<"}</Button>
                {CategorySliders.slice(currentIndex, currentIndex + numCards).map((item) => (
                    <Box
                        key={item.id}
                        cursor="pointer"
                        _hover={{ fontWeight: "bold" }}
                        margin="15"
                        marginRight={MarginRight}
                    >
                        <Center>
                            <Image src={item.img} width={widht} height="35px"
                            />
                        </Center>
                        <Center>
                            <Text fontFamily="Poppins" color="black" boxShadow="md">{item.title}</Text>
                        </Center>
                    </Box>
                ))}
                <Button onClick={handleNext} borderRadius="35px" variant="outline" display={display} _hover={{ boxShadow: "md" }} boxShadow="md" color="black">{">"}</Button>
                <Button variant='outline' marginLeft="3%" height="50px" display={display} borderRadius="14px" color="black" boxShadow="md" >
                    <Center>
                        <SettingsIcon marginRight="5px" />Filter
                    </Center>
                </Button>
            </Box>
        </Center>
    );
};
export default Category