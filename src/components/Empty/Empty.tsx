import {Box} from '@components/Box/Box';
import {Text} from '@components/Text/Text';

export function Empty() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text variant="TitleSummary" textAlign='center'>Nenhuma refeição cadastrada</Text>
    </Box>
  );
}
