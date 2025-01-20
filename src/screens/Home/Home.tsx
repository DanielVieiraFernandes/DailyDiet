import React, {useEffect, useState} from 'react';
import {Screen} from '@components/Screen/Screen';
import {Header} from '@components/Header/Header';
import {MealStatus} from '@components/MealStatus/MealStatus';
import {Button} from '@components/Button/Button';
import {Text} from '@components/Text/Text';
import {Box} from '@components/Box/Box';
import {useNavigation} from '@react-navigation/native';
import {getMealStorage, Meals} from '@services/MealStorage';
import {SectionList} from 'react-native';
import {MealCard} from '@components/MealCard/MealCard';
import {Empty} from '@components/Empty/Empty';

export function Home() {
  const [data, setData] = useState<Meals[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const {fetchMeals} = getMealStorage();

  useEffect(() => {
    try {
      setRefresh(true);
      const response = fetchMeals();
      if (response !== undefined) {
        setData(JSON.parse(response));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRefresh(false);
    }
  }, []);

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
      <Button.Default icon title="Nova refeição" onPress={handleNavigation} />
      <Box flex={1} pt="xl">
        <SectionList
          sections={data}
          keyExtractor={item => item.id}
          renderSectionHeader={({section: {title}}) => (
            <Text variant="TitleDate" pb="s">
              {title.replace(/\//g, '.')}
            </Text>
          )}
          renderItem={({item}) => (
            <MealCard
              type={item.isPart}
              hours={item.hour}
              name={item.name}
              id={item.id}
            />
          )}
          contentContainerStyle={{paddingBottom: 80, flex: 1}}
          ListEmptyComponent={() => <Empty />}
          refreshing={refresh}
          onRefresh={() => {}}
        />
      </Box>
    </Screen>
  );
}
