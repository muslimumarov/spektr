import { Box, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { space } from "postcss/lib/list";
import React from "react";

const Navbar = () => {
  return (
    <Box bg={"rgba(0, 0, 45, 1)"} w={"100%"} h={"60px"}>
      {/* // for logo */}
      <Box
        className="wrapper"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        minH={"100%"}
      >

      <Box>
        <Heading color={"white"} fontSize={'40px'}> Movibox </Heading>
      </Box>

      {/* for links */}
      <Box
        display={"flex"}
        color={"white"}
        alignItems={"center"}
        gap={5}
        fontSize={"20px"}
      >
        <Link href={"#"}>Bosh sahifa</Link>
        <Link href={"#"}>kinolar</Link>
        <Link href={"#"}>seriallar</Link>
        <Link href={"#"}>multfilimlar</Link>
      </Box>

      {/* for btns */}
      <Box display={"flex"} gap={5} >
        <Button variant={'outline'} bg={'white'} padding={2} >Kirish</Button>
        <Button variant={'outline'} _hover={{color: "black"}} padding={2} color={'white'}>Ro'yhatdan Otish</Button>
      </Box>
      <Box color={'white'} cursor={'pointer'}>
        <FaBars/>
      </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
