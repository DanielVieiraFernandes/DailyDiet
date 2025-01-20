import {Box} from '@components/Box/Box';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import logoImg from '@assets/Logo.png';
import {ArrowLeft} from 'phosphor-react-native';
import React from 'react';
import {Text} from '@components/Text/Text';
import {useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  CANGOBACK?: boolean;
  color?: string;
  title?: string;
};
export function Header({CANGOBACK = false, color, title}: HeaderProps) {
  const {colors} = useTheme<ThemeProps>();

  const navigation = useNavigation();

  const handleNavigation = () => navigation.navigate('Home');

  return (
    <Box
      width="100%"
      height={100}
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center">
      {!CANGOBACK ? (
        <React.Fragment>
          <Image source={logoImg} style={styles.img} />
          <Box
            width={50}
            height={50}
            borderRadius={20000}
            backgroundColor="GREEN_DARK"></Box>
        </React.Fragment>
      ) : (
        <>
          <TouchableOpacity onPress={handleNavigation} style={{zIndex: 1}}>
            <ArrowLeft size={30} color={color} />
          </TouchableOpacity>
          <Text variant="HeaderTitle" textAlign="center">
            {title}
          </Text>
          <Box flex={0.15} />
        </>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});
