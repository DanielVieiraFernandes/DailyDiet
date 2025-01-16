import React from 'react';
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

export function StatisticsScreen() {
  const {params} = useRoute();
  const {colorType, subtitle, title} = params as RootParams;
  const {colors} = useTheme<ThemeProps>();

  return (
    <Box
      flex={1}
      bg={colorType === colors.GREEN_DARK ? 'GREEN_LIGHT' : 'RED_LIGHT'}>
      <Box p="l">
        <Header CANGOBACK color={colorType} />
        <Text variant="TitlePercent" textAlign="center">
        {title}%
      </Text>
      <Text variant="SubtitlesPercent" textAlign="center">
        {subtitle}
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
        <LargeCard title="22" subtitle="sequências de pratos" />
        <LargeCard title="32" subtitle="refeições registradas" />
        <Box flexDirection="row" gap="m">
          <SmallCard
            type="PRIMARY"
            title="22"
            subtitle="refeições dentro da dieta"
          />
          <SmallCard
            type="SECONDARY"
            title="10"
            subtitle="refeições fora da dieta"
          />
        </Box>
      </Box>
    </Box>
  );
}
