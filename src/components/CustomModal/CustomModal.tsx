import {Modal} from 'react-native';
import {Box} from '@components/Box/Box';
import {Text} from '@components/Text/Text';
import {Button} from '@components/Button/Button';
import {useModalStore} from '../../zustand/ModalStore';
import {getMealStorage} from '@services/MealStorage';

type CustomModalProps = {
  id: string;
};

export function CustomModal({id}: CustomModalProps) {
  const {modalVisible, setModalVisible} = useModalStore();
  const {delMeal} = getMealStorage();

  console.log(id);

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}>
      <Box
        flex={1}
        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
        p="l"
        justifyContent="center">
        <Box
          width="100%"
          height={200}
          bg="WHITE"
          borderRadius={10}
          p="xl"
          gap="m">
          <Text variant="TitleDate" textAlign="center">
            Deseja realmente excluir o registro da refeição ?
          </Text>
          <Box flexDirection="row" gap="s" justifyContent="center">
            <Button.Default
              type="SECONDARY"
              title="cancelar"
              onPress={() => setModalVisible(false)}
              boxProps={{
                width: '50%',
              }}
            />
            <Button.Default
              title="Sim, excluir"
              onPress={() => delMeal(id)}
              boxProps={{
                width: '50%',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
