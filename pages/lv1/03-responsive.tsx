import { Center } from "@chakra-ui/react";

export default function ResponsivePage() {
  return (
    <>
      <Center h="100px" mb="10px" bgColor={["red.100", "red.300", "red.500"]}>
        change window size
      </Center>

      <Center
        h="100px"
        bgColor={{ base: "red.100", md: "red.300", lg: "red.500" }}
      >
        change window size
      </Center>
    </>
  );
}
