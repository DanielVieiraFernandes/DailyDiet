import {Box} from '@components/Box/Box';
import {BoxProps} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';

type ScreenProps = BoxProps<ThemeProps> & {
  children: React.ReactNode;
};

export function Screen({children, ...boxProps}: ScreenProps) {
  return (
    <Box flex={1} padding="l" bg="GRAY_7" {...boxProps}>
      {children}
    </Box>
  );
}
