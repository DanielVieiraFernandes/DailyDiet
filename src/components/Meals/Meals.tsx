import {Box} from '@components/Box/Box';
import {Text} from '@components/Text/Text';
import {TouchableOpacity} from 'react-native';

export type MealsProps = {
  type: boolean;
  hours: string;
  name: string;
};
export function Meals({type, hours, name}: MealsProps) {
  return (
    <TouchableOpacity>
      <Box
        flexDirection="row"
        borderColor="GRAY_5"
        borderWidth={1}
        borderRadius={10}
        height={50}
        justifyContent="space-around"
        alignItems="center"
        mb="s">
        <Box flexDirection="row" alignItems="center">
          <Text variant="HourMeals" textAlign="center" marginRight="m">
            {hours}
          </Text>
          <Box height={12} width={1} bg="GRAY_2" />
        </Box>
        <Text numberOfLines={1} style={{width: '50%'}}>
          {name}
        </Text>
        <Box
          bg={type ? 'GREEN_MID' : 'RED_MID'}
          width={14}
          height={14}
          borderRadius={10000}
        />
      </Box>
    </TouchableOpacity>
  );
}
