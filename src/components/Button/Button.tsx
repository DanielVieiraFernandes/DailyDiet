import {Text} from '@components/Text/Text';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native';
import {Plus} from 'phosphor-react-native';
import {Box} from '@components/Box/Box';
import { useTheme } from '@shopify/restyle';
import { ThemeProps } from '@theme/theme';
type ButtonProps = TouchableNativeFeedbackProps;
export function Button({...restProps}: ButtonProps) {


  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(
        'rgba(255, 255, 255, 0.5)',
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
        <Plus size={20} color='white' />
        <Text variant="ButtonTitle">Nova Refeição</Text>
      </Box>
    </TouchableNativeFeedback>
  );
}
