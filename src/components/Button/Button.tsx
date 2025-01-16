import {Text} from '@components/Text/Text';
import {
  StyleSheet,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import {Plus} from 'phosphor-react-native';
import {Box} from '@components/Box/Box';
import {useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';
type ButtonProps = TouchableNativeFeedbackProps & {
  plus?: boolean;
  title: string;
};

export function Button({children}: ViewProps) {
  return <View>{children}</View>;
}

function Default({title,plus,...restProps}: ButtonProps) {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(
        'rgba(255, 255, 255, 0.2)',
        false,
      )}
      {...restProps}>
      <Box
        width="100%"
        height={50}
        bg="GRAY_2"
        borderRadius={10}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="s">
        {plus && <Plus size={20} color="white" />}
        <Text variant="ButtonTitle">{title}</Text>
      </Box>
    </TouchableNativeFeedback>
  );
}

type InDietProps = TouchableOpacityProps & {
  title: string;
};

function InDiet({title}: InDietProps) {
  const {colors, spacing} = useTheme<ThemeProps>();

  const styles = StyleSheet.create({
    InDiet: {
      flex: 1,
      height: 50,
      backgroundColor: colors.GRAY_6,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: spacing.s,
    },
  });

  return (
    <TouchableOpacity style={styles.InDiet} activeOpacity={0.7}>
      <Box
        width={8}
        height={8}
        borderRadius={10000}
        bg={title === 'Sim' ? 'GREEN_DARK' : 'RED_DARK'}
      />
      <Text variant="TitleStatistics">{title}</Text>
    </TouchableOpacity>
  );
}

Button.Default = Default;
Button.InDiet = InDiet;
