import React, { useEffect, useState } from 'react';
import {Screen} from '@components/Screen/Screen';
import {Header} from '@components/Header/Header';
import {useRoute} from '@react-navigation/native';
import {RootParams} from 'src/@types/navigation';
import {Box} from '@components/Box/Box';
import {Text} from '@components/Text/Text';
import {LargeCard} from '@components/LargeCard/LargeCard';
import {SmallCard} from '@components/SmallCard/SmallCard';
import {useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';
import { PercentageDietStorage, usePercentageDietStorage } from '@services/calculatePercentageDiet';
import { Loading } from '@components/Loading/Loading';

export function StatisticsScreen() {
  const {params} = useRoute();
  const {colorType, title} = params as RootParams;
  const {colors} = useTheme<ThemeProps>();

  const [isLoading,setIsLoading] = useState<boolean>(false);
  const {calculatePercentage} = usePercentageDietStorage();
  const {insideDiet,outsideDiet,overall,registerMeals,sequences} = PercentageDietStorage();

  useEffect(() => {
    setIsLoading(true);
    try {
      calculatePercentage();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if(isLoading){
    return <Loading/>
  }

  return (
    <Box
      flex={1}
      bg={colorType === colors.GREEN_DARK ? 'GREEN_LIGHT' : 'RED_LIGHT'}>
      <Box p="l">
        <Header CANGOBACK color={colorType}  />
        <Text variant="TitlePercent" textAlign="center">
          {overall === "NaN%" ? '0%' : overall}
        </Text>
        <Text variant="SubtitlesPercent" textAlign="center">
          das refeições dentro da dieta
        </Text>
      </Box>
      <Box
        flex={1}
        padding="l"
        alignItems="center"
        gap="m"
        bg="WHITE"
        borderTopEndRadius={20}
        borderTopStartRadius={20}>
        <Text variant="TitleStatistics" paddingVertical="m">
          Estatíticas gerais
        </Text>
        <LargeCard title={sequences} subtitle="sequências de pratos" />
        <LargeCard title={registerMeals} subtitle="refeições registradas" />
        <Box flexDirection="row" gap="m">
          <SmallCard
            type="PRIMARY"
            title={insideDiet}
            subtitle="refeições dentro da dieta"
          />
          <SmallCard
            type="SECONDARY"
            title={outsideDiet}
            subtitle="refeições fora da dieta"
          />
        </Box>
      </Box>
    </Box>
  );
}
