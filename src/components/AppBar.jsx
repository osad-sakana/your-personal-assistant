import { Box, Flex } from '@chakra-ui/react';

const AppBar = () => {
  return (
    <Flex bg="red.500" p={4} alignItems="center">
      <Box>
        <Box fontSize="xl" fontWeight="bold" color="white">
          YOUR-PERSONAL-ASSISTANT
        </Box>
      </Box>
    </Flex>
  );
};

export default AppBar;
