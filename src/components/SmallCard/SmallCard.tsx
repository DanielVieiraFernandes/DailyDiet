import {Box} from '@components/Box/Box';
import { Text } from '@components/Text/Text';

type SmallCardProps = {
  type: 'PRIMARY' | 'SECONDARY';
  title: string;
  subtitle: string;
};

export function SmallCard({type,title,subtitle}: SmallCardProps) {
  return (
    <Box
      bg={type === 'PRIMARY' ? 'GREEN_LIGHT' : 'RED_LIGHT'}
      flex={1}
      height={100}
      borderRadius={10}
      alignItems="center"
      justifyContent="space-around" p='s'>
        <Text variant='TitleCard'>{title}</Text>
        <Text variant='SubtitleCard'>{subtitle}</Text>
      </Box>
  );
}
