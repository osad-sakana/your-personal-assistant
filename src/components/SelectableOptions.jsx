import { Stack, Button } from '@chakra-ui/react';

export const SelectableOptions = (props) => {
  const onButtonClick = (e) => {
    props.setSelectedValue(e.target.value);
  };

  return (
    <Stack p="5" m="auto" spacing={4} direction='column' align='stretch' maxW="500px" >
      {props.options.map((option, index) => {
        return <Button colorScheme="red" variant="outline" key={index} onClick={onButtonClick} value={option.toString()}>{option.toString()}</Button>
      })}
    </Stack>
  );
};