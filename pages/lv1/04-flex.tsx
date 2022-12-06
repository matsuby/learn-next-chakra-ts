import { Box, Flex } from "@chakra-ui/react";

export default function FlexPage() {
  return (
    <>
      <Box p={4}>
        <Flex w="800px" wrap="nowrap">
          {/* 空いてる幅: 200px */}
          {/* 200 / (0.5 + 1 + 1.5 + 2) = 40 */}
          {/* 100 + 40 * 0.5 = 120 */}
          <Box w="100px" bgColor="blue.100" border="1px" flexGrow={0.5}>
            1
          </Box>
          {/* 100 + 40 * 1 = 140 */}
          <Box w="100px" bgColor="blue.100" border="1px" flexGrow={1}>
            2
          </Box>
          {/* 100 + 40 * 1.5 = 160 */}
          <Box w="100px" bgColor="blue.100" border="1px" flexGrow={1.5}>
            3
          </Box>
          {/* 200 + 40 * 2 = 280 */}
          <Box w="200px" bgColor="blue.100" border="1px" flexGrow={2}>
            4
          </Box>
          {/* デフォルトは0なので広がらない */}
          <Box w="100px" bgColor="blue.100" border="1px">
            5
          </Box>
        </Flex>
      </Box>

      <Box p={4}>
        <Flex w="1000px" wrap="nowrap">
          {/* 足りない幅: 500px */}
          {/* 500 * 2 + 400 * 1.25 + 300 * 1 + 200 * 3 + 100 * 1 = 2500 */}

          {/* 500 - (500 / 2500) * 500 * 2 = 500 - 200 = 300 */}
          <Box w="500px" bgColor="blue.100" border="1px" flexShrink={2}>
            1
          </Box>
          {/* 400 - (500 / 2500) * 400 * 1.25 = 400 - 100 = 300 */}
          <Box w="400px" bgColor="blue.100" border="1px" flexShrink={1.25}>
            2
          </Box>
          {/* 300 - (500 / 2500) * 300 * 1 = 300 - 60 = 240 */}
          <Box w="300px" bgColor="blue.100" border="1px" flexShrink={1}>
            3
          </Box>
          {/* 200 - (500 / 2500) * 200 * 3 = 200 - 120 = 80 */}
          <Box w="200px" bgColor="blue.100" border="1px" flexShrink={3}>
            4
          </Box>
          {/* 100 - (500 / 2500) * 100 * 1 = 100 - 20 = 80 */}
          <Box w="100px" bgColor="blue.100" border="1px" flexShrink={1}>
            5
          </Box>
        </Flex>
      </Box>

      <Box p={4}>
        <Flex
          w="350px"
          h="100px"
          wrap="wrap"
          justifyContent="space-around"
          alignItems="center"
          bgColor="pink"
        >
          <Box w="100px" h="30px" bgColor="blue.100" border="1px">
            1
          </Box>
          <Box w="100px" h="30px" bgColor="blue.100" border="1px">
            2
          </Box>
          <Box w="100px" h="30px" bgColor="blue.100" border="1px">
            3
          </Box>
          <Box w="100px" h="30px" bgColor="blue.100" border="1px">
            4
          </Box>
          <Box w="100px" h="30px" bgColor="blue.100" border="1px">
            5
          </Box>
        </Flex>
      </Box>
    </>
  );
}
