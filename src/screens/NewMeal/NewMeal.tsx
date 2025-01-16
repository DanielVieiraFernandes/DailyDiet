import {Box} from '@components/Box/Box';
import {Button} from '@components/Button/Button';
import {Header} from '@components/Header/Header';
import {Input} from '@components/Input/Input';
import {Screen} from '@components/Screen/Screen';
import {Text} from '@components/Text/Text';

export function NewMeal() {
  return (
    <Screen bg="GRAY_5" padding={undefined}>
      <Box p="l">
        <Header CANGOBACK title="Nova refeição" />
      </Box>
      <Box
        flex={1}
        bg="WHITE"
        gap="s"
        borderTopStartRadius={20}
        borderTopEndRadius={20}
        p="l">
        <Text variant="TitleStatistics">Nome</Text>
        <Box height={50} mb="m">
          <Input />
        </Box>
        <Text variant="TitleStatistics">Descrição</Text>
        <Box height={140} mb="m">
          <Input scrollEnabled multiline textAlignVertical="top" />
        </Box>
        <Box flexDirection="row" gap="l" mb="m">
          <Box flex={1} height={80} gap="s">
            <Text variant="TitleStatistics">Data</Text>
            <Input />
          </Box>
          <Box flex={1} height={80} gap="s">
            <Text variant="TitleStatistics">Hora</Text>
            <Input />
          </Box>
        </Box>
        <Text variant="TitleStatistics">Está dentro da dieta?</Text>
        <Box flex={1} gap="s" flexDirection="row">
          <Button.InDiet title="Sim" />
          <Button.InDiet title="Não" />
        </Box>
        <Button>
          <Button.Default title="Cadastrar refeição" />
        </Button>
      </Box>
    </Screen>
  );
}
