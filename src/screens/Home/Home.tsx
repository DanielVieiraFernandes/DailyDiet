import React, {useState} from 'react';
import {Screen} from '@components/Screen/Screen';
import {Header} from '@components/Header/Header';
import {MealStatus} from '@components/MealStatus/MealStatus';
import {Button} from '@components/Button/Button';
import {Text} from '@components/Text/Text';

export function Home() {
  return (
    <Screen>
      <Header />
      <MealStatus percentage="100" type="HEALTHY" />
      <Text variant="TitleMeals" mb="m">
        Refeições
      </Text>
      <Button onPress={() => console.log('Olá')} />

      {/* <SectionList /> */}
    </Screen>
  );
}
