import { Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { space } from "postcss/lib/list";
import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();
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
          <Heading color={"white"} fontSize={"40px"}>
            Movibox
          </Heading>
        </Box>
        {/* for links */}
        <Box display={{ base: "none", md: "block" }}>
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
        </Box>
        {/* for btns */}
        <Box display={{ base: "none", md: "block" }}>
          <Box display={"flex"} gap={5}>
            <Button variant={"outline"} bg={"white"} padding={2}>
              Kirish
            </Button>
            <Button
              variant={"outline"}
              _hover={{ color: "black" }}
              padding={2}
              color={"white"}
            >
              Ro'yhatdan Otish
            </Button>
          </Box>
        </Box>
        <Box
          fontSize={"35px"}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
        >
          <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <FaBars />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader></DrawerHeader>
              <DrawerBody>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  color={"black"}
                  alignItems={"center"}
                  gap={5}
                  fontSize={"20px"}
                  marginBottom={"20px"}
                >
                  <Link href={"#"}>Bosh sahifa</Link>
                  <Link href={"#"}>kinolar</Link>
                  <Link href={"#"}>seriallar</Link>
                  <Link href={"#"}>multfilimlar</Link>
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                  <Button
                    display={"block"}
                    variant={"outline"}
                    bg={"white"}
                    padding={2}
                    marginBottom={"20px"}
                  >
                    Kirish
                  </Button>
                  <Button
                    variant={"outline"}
                    padding={2}
                    color={"black"}
                  >
                    Ro'yhatdan Otish
                  </Button>
                </Box>
              </DrawerBody>
              <DrawerCloseTrigger color={"red"} />
            </DrawerContent>
          </DrawerRoot>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
