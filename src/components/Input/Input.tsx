import {Box} from '@components/Box/Box';
import {BoxProps, useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';
import {Controller, UseControllerProps} from 'react-hook-form';
import {ColorValue, TextInput, TextInputProps} from 'react-native';
import {MealProps} from 'src/schemas/MealSchema';

type InputProps = TextInputProps & {
  useControllerProps: UseControllerProps<MealProps>;
  boxProps?: BoxProps<ThemeProps>;
  color?:ColorValue;
};

export function Input({useControllerProps, boxProps, color, style, ...rest}: InputProps) {
  const {textVariants} = useTheme<ThemeProps>();
  const {TitleMeals} = textVariants;

  return (
    <Controller
      render={({field: {onBlur, onChange, value}}) => (
        <Box flex={1} borderColor="GRAY_5" borderWidth={1} borderRadius={10} {...boxProps}>
          <TextInput
            onChangeText={onChange}
            onChange={onChange}
            onBlur={onBlur}
            value={String(value)}
            style={[{
              flex: 1,
              paddingHorizontal: 16,
              fontFamily: TitleMeals.fontFamily,
              fontSize: TitleMeals.fontSize,
              color: TitleMeals.color || color,
            }, style]}
            {...rest}
          />
        </Box>
      )}
      {...useControllerProps}
    />
  );
}
