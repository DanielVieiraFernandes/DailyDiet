import React, {useState} from 'react';
import {Screen} from '@components/Screen/Screen';
import {Header} from '@components/Header/Header';
import {MealStatus} from '@components/MealStatus/MealStatus';
import {Button} from '@components/Button/Button';
import {Text} from '@components/Text/Text';
import {Box} from '@components/Box/Box';
import {useNavigation} from '@react-navigation/native';
import {NavigationArrow} from 'phosphor-react-native';

export function Home() {
  const navigation = useNavigation();

  const handleNavigation = () => navigation.navigate('NewMeal');

  return (
    <Screen>
      <Box pb="xl">
        <Header />
      </Box>
      <MealStatus percentage="100" type="HEALTHY" />
      <Text variant="TitleMeals" mb="m">
        Refeições
      </Text>
      <Button.Default plus title='Nova refeição' onPress={handleNavigation} />
      {/* <SectionList /> */}
    </Screen>
  );
}
