import { Box, Text } from "@chakra-ui/react";

export default function StylePropsPage() {
  return (
    <Box>
      <Box m={8} p={16} w={800} h={200} bgColor="red.100">
        {`<Box m={8} p={16} w={800} h={200} bgColor="red.100">`}
      </Box>

      <Box mx={8} py={16} w={800} h={200} bgColor="red.300">
        {`<Box mx={8} py={16} w={800} h={200} bgColor="red.300">`}
      </Box>

      <Box
        mt="20px"
        mb="4rem"
        ml="6vw"
        mr="8vh"
        pt="20px"
        pb="4rem"
        pl="6vw"
        pr="8vh"
        bgColor="red.500"
      >
        {`
          <Box mt="20px"
            mb="4rem"
            ml="6vw"
            mr="8vh"
            pt="20px"
            pb="4rem"
            pl="6vw"
            pr="8vh"
            bgColor="red.500"
          >
        `}
      </Box>

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        {`
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
        `}
        Welcome to Chakra UI
      </Text>
    </Box>
  );
}
