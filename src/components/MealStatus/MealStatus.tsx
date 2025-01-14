import {Box} from '@components/Box/Box';
import {Text} from '@components/Text/Text';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';
import {ArrowUpRight} from 'phosphor-react-native';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export type MealStatusProps = TouchableOpacityProps & {
  percentage: string;
  type: 'HEALTHY' | 'DANGER';
};

export function MealStatus({
  percentage,
  type,
  ...buttonProps
}: MealStatusProps) {
  const {colors} = useTheme<ThemeProps>();

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('StatisticsScreen', {
      colorType: type === 'HEALTHY' ? colors.GREEN_DARK : colors.RED_DARK,
    });
  };

  return (
    <TouchableOpacity onPress={handleNavigation} {...buttonProps}>
      <Box
        width={'100%'}
        mb="xl"
        p="l"
        bg={type === 'HEALTHY' ? 'GREEN_LIGHT' : 'RED_LIGHT'}
        alignItems="center"
        justifyContent="space-around"
        borderRadius={10}>
        <ArrowUpRight
          style={styles.icon}
          color={type === 'HEALTHY' ? colors.GREEN_DARK : colors.RED_DARK}
        />
        <Text variant="TitlePercent">{percentage}%</Text>
        <Text variant="SubtitlesPercent">das refeições dentro da dieta</Text>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
