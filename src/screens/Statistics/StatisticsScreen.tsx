import React from 'react';
import {Screen} from '@components/Screen/Screen';
import {Header} from '@components/Header/Header';
import {useRoute} from '@react-navigation/native';
import {RootParams} from 'src/@types/navigation';
import {MealProgressHeader} from '@components/MealProgressHeader/MealProgressHeader';
import {Box} from '@components/Box/Box';

export function StatisticsScreen() {
  const {params} = useRoute();
  const {colorType} = params as RootParams;

  return (
    <Screen padding={undefined}>
      <MealProgressHeader bgColor={colorType} />
      <Box flex={1} padding="l">
        <Header CANGOBACK color={colorType} />
      </Box>
    </Screen>
  );
}
