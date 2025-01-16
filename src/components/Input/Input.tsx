import {Box} from '@components/Box/Box';
import {useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';
import {TextInput, TextInputProps} from 'react-native';

type InputProps = TextInputProps & {};

export function Input({...rest}: InputProps) {
  const {textVariants} = useTheme<ThemeProps>();
  const {TitleMeals} = textVariants;

  return (
    <Box flex={1} borderColor="GRAY_5" borderWidth={1} borderRadius={10}>
      <TextInput
        style={{
          flex: 1,
          paddingHorizontal: 16,
          fontFamily: TitleMeals.fontFamily,
          fontSize: TitleMeals.fontSize,
          color: TitleMeals.color,
        }}
        {...rest}
      />
    </Box>
  );
}   
