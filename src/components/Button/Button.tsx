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
import {Pencil, Plus, Trash} from 'phosphor-react-native';
import {Box} from '@components/Box/Box';
import {BoxProps, color, useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';
type ButtonProps = TouchableNativeFeedbackProps & {
  icon?: boolean;
  title: string;
  edit?: boolean;
  type?: 'PRIMARY' | 'SECONDARY';
  boxProps?: BoxProps<ThemeProps>;
};

export function Button({children}: ViewProps) {
  return <View>{children}</View>;
}

function Default({
  title,
  icon,
  type = 'PRIMARY',
  edit,
  boxProps,
  ...restProps
}: ButtonProps) {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(
        type === 'PRIMARY' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
        false,
      )}
      {...restProps}>
      <Box
        width="100%"
        height={50}
        bg={type === 'PRIMARY' ? 'GRAY_2' : undefined}
        borderRadius={10}
        borderWidth={1}
        borderColor="GRAY_1"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="s"
        {...boxProps}
        >
        {icon &&
          (type === 'PRIMARY' ? (
            <Plus size={20} color="white" />
          ) : edit ? (
            <Pencil size={20} color="black" />
          ) : (
            <Trash size={20} color="black" />
          ))}
        <Text
          variant="ButtonTitle"
          color={type === 'SECONDARY' ? 'GRAY_1' : 'WHITE'}>
          {title}
        </Text>
      </Box>
    </TouchableNativeFeedback>
  );
}

type InDietProps = TouchableOpacityProps & {
  title: string;
  isSelected: boolean;
  type: 'YES' | 'NOT';
};

function InDiet({title, isSelected, type, ...rest}: InDietProps) {
  const {colors, spacing} = useTheme<ThemeProps>();

  const styles = StyleSheet.create({
    InDiet: {
      flex: 1,
      height: 50,
      backgroundColor:
        type === 'YES' && isSelected
          ? colors.GREEN_LIGHT
          : type === 'NOT' && !isSelected
          ? colors.RED_LIGHT
          : colors.GRAY_6,
      borderRadius: 5,
      borderColor:
        type === 'YES' && isSelected
          ? colors.GREEN_DARK
          : type === 'NOT' && !isSelected
          ? colors.RED_DARK
          : colors.GRAY_6,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: spacing.s,
    },
  });

  return (
    <TouchableOpacity style={styles.InDiet} activeOpacity={0.7} {...rest}>
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
