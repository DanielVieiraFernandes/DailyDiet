import React, {useCallback, useEffect, useState} from 'react';
import {Screen} from '@components/Screen/Screen';
import {Header} from '@components/Header/Header';
import {MealStatus} from '@components/MealStatus/MealStatus';
import {Button} from '@components/Button/Button';
import {Text} from '@components/Text/Text';
import {Box} from '@components/Box/Box';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getMealStorage, Meals} from '@services/MealStorage';
import {SectionList} from 'react-native';
import {MealCard} from '@components/MealCard/MealCard';
import {Empty} from '@components/Empty/Empty';
import { Plus } from 'phosphor-react-native';
import { PercentageDietStorage, usePercentageDietStorage } from '@services/calculatePercentageDiet';
import { Loading } from '@components/Loading/Loading';

export function Home() {
  const [data, setData] = useState<Meals[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {fetchMeals} = getMealStorage();
  const {calculatePercentage} = usePercentageDietStorage();
  const {overall} = PercentageDietStorage();

  useFocusEffect(useCallback(() => {
    setIsLoading(true);
    try {
      calculatePercentage();
      setRefresh(true);
      const response = fetchMeals();
      if (response !== undefined) {
        setData(JSON.parse(response));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRefresh(false);
      setIsLoading(false);
    }
  } ,[]))

  const navigation = useNavigation();
  const handleNavigation = () => navigation.navigate('NewMeal');

  if(isLoading){
    return <Loading />
  }

  const percentage = parseFloat(overall.replace(',', '.')) || 0;

  return (
    <Screen>
      <Box pb="xl">
        <Header />
      </Box>
      <MealStatus percentage={overall === "NaN%" ? '0%': overall} type={percentage >= 50 ? "HEALTHY" : "DANGER"} />
      <Text variant="TitleMeals" mb="m">
        Refeições
      </Text>
      <Button.Default  title="Nova refeição" onPress={handleNavigation} >
        <Plus size={20} color='#FFFFFF'/>
      </Button.Default>
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
