import Box from 'components/Box';
import PhoneBook from 'components/PhoneBook';

export const App = () => {
  return (
    <Box
      bg={'pageBgColor'}
      width="500px"
      ml={'auto'}
      mr={'auto'}
      p={4}
      as="section"
    >
      <PhoneBook />
    </Box>
  );
};
