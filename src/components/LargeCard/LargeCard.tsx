import {Box} from '@components/Box/Box';
import {Text} from '@components/Text/Text';

type LargeCardProps = {
  title: string;
  subtitle: string;
};

export function LargeCard({subtitle, title}: LargeCardProps) {
  return (
    <Box
      bg="GRAY_6"
      width="100%"
      height={90}
      alignItems="center"
      justifyContent="space-evenly"
      borderRadius={10}>
      <Text variant="TitleCard">{title}</Text>
      <Text variant="SubtitleCard">{subtitle}</Text>
    </Box>
  );
}
