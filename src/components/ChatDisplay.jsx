import { Box, Flex, Text } from '@chakra-ui/react';

const ChatDisplay = (props) => {
  return (
    <Box p={4} maxW={"500px"} m={"auto"}>
      {props.chats.map((chat, index) => (
        <Flex
          key={index}
          direction="column"
          alignItems={chat.who === 0 ? 'flex-end' : 'flex-start'}
          mb={2}
        >
          <Text fontWeight="bold">{chat.who === 0 ? 'YOU' : 'BEER'}</Text>
          <Box
            bg={chat.who === 0 ? 'red.500' : 'gray.200'}
            color={chat.who === 0 ? 'white' : 'black'}
            borderRadius="md"
            py={2}
            px={3}
            maxWidth="75%"
          >
            <Text textAlign={"left"}>{chat.text}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default ChatDisplay;
