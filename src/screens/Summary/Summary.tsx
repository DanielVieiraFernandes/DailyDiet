import {Screen} from '@components/Screen/Screen';
import {Text} from '@components/Text/Text';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image} from 'react-native';
import {RootParams} from 'src/@types/navigation';
import successImg from '@assets/success.png';
import notDiet from '@assets/notDiet.png';
import {Button} from '@components/Button/Button';
import {Box} from '@components/Box/Box';
import React from 'react';

export function Summary() {
  const {params} = useRoute();
  const {isParty} = params as RootParams;

  const navigation = useNavigation();

  return (
    <Screen justifyContent="center" alignItems="center">
      {isParty ? (
        <React.Fragment>
          <Text
            variant="TitleSummary"
            color={isParty ? 'GREEN_DARK' : 'RED_DARK'}>
            Continue assim!
          </Text>
          <Text variant="SubtitleSummary" pb="xl">
            {' '}
            Você continua{' '}
            <Text variant="SubtitlesPercent" fontWeight={'bold'}>
              dentro da dieta
            </Text>
            . Muito bem!
          </Text>
          <Image source={successImg} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text
            variant="TitleSummary"
            color={isParty ? 'GREEN_DARK' : 'RED_DARK'}>
            Que pena!
          </Text>
          <Text variant="SubtitleSummary" pb="xl" textAlign="center">
            Você{' '}
            <Text variant="SubtitlesPercent" fontWeight={'bold'}>
              saiu da dieta{' '}
            </Text>
            dessa vez, mas continue se esforçando
          </Text>
          <Image source={notDiet} />
        </React.Fragment>
      )}
      <Box width={200} m="xl">
        <Button.Default
          title="Ir para página inicial"
          onPress={() => navigation.navigate('Home')}
        />
      </Box>
    </Screen>
  );
}
