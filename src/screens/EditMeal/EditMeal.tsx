import {Screen} from '@components/Screen/Screen';
import {Box} from '@components/Box/Box';
import {Button} from '@components/Button/Button';
import {Header} from '@components/Header/Header';
import {Input} from '@components/Input/Input';
import {Text} from '@components/Text/Text';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {MealProps, MealSchema} from '../../schemas/MealSchema';
import {getMealStorage} from '@services/MealStorage';
import {useFormattedFunctions} from '@utils/formattedFunctions';
import {useTheme} from '@shopify/restyle';
import {ThemeProps} from '@theme/theme';
import {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {RootParams} from 'src/@types/navigation';
import {Loading} from '@components/Loading/Loading';

export function EditMeal() {
  const {
    control,
    formState: {errors},
    handleSubmit,
    watch,
    setValue,
  } = useForm<MealProps>({
    resolver: zodResolver(MealSchema),
    defaultValues: {
      date: '',
      description: '',
      hour: '',
      name: '',
      isPart: true,
    },
  });

  const {fetchMeal, updateMeal} = getMealStorage();
  const {formattedDate, formattedHour} = useFormattedFunctions();
  const {colors} = useTheme<ThemeProps>();
  const {params} = useRoute();
  const {id} = params as RootParams;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const response = fetchMeal(id as string);
      if (response) {
        setValue('name', response.name);
        setValue('date', response.date);
        setValue('description', response.description);
        setValue('hour', response.hour);
        setValue('isPart', response.isPart);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = (data: MealProps) => {
    updateMeal(String(id), data);
  };

  return (
    <Screen bg="GREEN_LIGHT" padding={undefined}>
      <Box p="l">
        <Header CANGOBACK title="Editar refeição" />
      </Box>
      <Box
        flex={1}
        bg="WHITE"
        gap="s"
        borderTopStartRadius={20}
        borderTopEndRadius={20}
        p="l">
        <Text variant="TitleStatistics">
          Nome
          {errors.name && (
            <Text variant="TitleStatistics" color="RED_DARK">
              {' '}
              - {errors.name.message}
            </Text>
          )}
        </Text>
        <Box height={50} mb="m">
          <Input
            boxProps={{
              borderColor: errors.name ? 'RED_DARK' : 'GRAY_5',
            }}
            useControllerProps={{
              control,
              name: 'name',
            }}
          />
        </Box>
        <Text variant="TitleStatistics">Descrição</Text>
        <Box height={140} mb="m">
          <Input
            scrollEnabled
            multiline
            textAlignVertical="top"
            useControllerProps={{
              control,
              name: 'description',
            }}
          />
        </Box>
        <Box flexDirection="row" gap="l" mb="m">
          <Box flex={1} height={80} gap="s">
            <Text variant="TitleStatistics">
              Data
              {errors.date && (
                <Text variant="TitleStatistics" color="RED_DARK">
                  {' '}
                  - {errors.date.message}
                </Text>
              )}
            </Text>
            <Input
              boxProps={{
                borderColor: errors.date ? 'RED_DARK' : 'GRAY_5',
              }}
              useControllerProps={{
                control,
                name: 'date',
              }}
              style={{
                color: colors.GRAY_1,
              }}
              onChangeText={(value: string) => {
                const date = formattedDate(value);
                setValue('date', date);
              }}
            />
          </Box>
          <Box flex={1} height={80} gap="s">
            <Text variant="TitleStatistics">
              Hora
              {errors.hour && (
                <Text variant="TitleStatistics" color="RED_DARK">
                  {' '}
                  - {errors.hour.message}
                </Text>
              )}
            </Text>
            <Input
              boxProps={{
                borderColor: errors.hour ? 'RED_DARK' : 'GRAY_5',
              }}
              useControllerProps={{
                control,
                name: 'hour',
              }}
              style={{color: colors.GRAY_1}}
              onChangeText={(value: string) => {
                const hour = formattedHour(value);
                setValue('hour', hour);
              }}
            />
          </Box>
        </Box>
        <Text variant="TitleStatistics">Está dentro da dieta?</Text>
        <Box flex={1} gap="s" flexDirection="row">
          <Button.InDiet
            title="Sim"
            isSelected={watch('isPart')}
            type="YES"
            onPress={() => setValue('isPart', true)}
          />
          <Button.InDiet
            title="Não"
            type="NOT"
            isSelected={watch('isPart')}
            onPress={() => setValue('isPart', false)}
          />
        </Box>
        <Button>
          <Button.Default
            title="Editar refeição"
            onPress={handleSubmit(onSubmit)}
          />
        </Button>
      </Box>
    </Screen>
  );
}
