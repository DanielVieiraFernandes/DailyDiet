import {Box} from '@components/Box/Box';
import {Text} from '@components/Text/Text';
import {useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';

type MealProgressHeaderProps = {
  bgColor?: string;
};

export function MealProgressHeader({bgColor}: MealProgressHeaderProps) {
  const {colors} = useTheme<ThemeProps>();

  return (
    <Box
      bg={bgColor === colors.GREEN_DARK ? 'GREEN_LIGHT' : 'RED_LIGHT'}
      width="100%"
      height={200}
      alignSelf="center"
      position="absolute"
      justifyContent="center"
      alignItems="center">
      <Text variant="TitlePercent">98%</Text>
      <Text variant="SubtitlesPercent">Das refeições dentro da dieta</Text>
    </Box>
  );
}
