import NextLink from "next/link";
import { Box, Heading, Link, List, ListItem, VStack } from "@chakra-ui/react";

export default function IndexPage() {
  return (
    <Box p={5}>
      <Heading size="2xl">Learn Next.js + Chakra UI + TypeScript</Heading>
      <VStack
        p={5}
        minH="60vh"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Heading>Lv1</Heading>
          <List>
            <ListItem>
              <Link as={NextLink} href="/lv1/02-styleprops">
                02-styleprops
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href="/lv1/03-responsive">
                03-responsive
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href="/lv1/04-flex">
                04-flex
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading>Lv2</Heading>
          <List>
            <ListItem></ListItem>
          </List>
        </Box>

        <Box>
          <Heading>Lv3</Heading>
          <List>
            <ListItem></ListItem>
          </List>
        </Box>

        <Box>
          <Heading>Lv4</Heading>
          <List>
            <ListItem></ListItem>
          </List>
        </Box>
      </VStack>
    </Box>
  );
}
