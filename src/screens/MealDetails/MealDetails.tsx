import { Box } from "@components/Box/Box";
import { Button } from "@components/Button/Button";
import { CustomModal } from "@components/CustomModal/CustomModal";
import { Header } from "@components/Header/Header";
import { Screen } from "@components/Screen/Screen";
import { Text } from "@components/Text/Text";
import { useRoute } from "@react-navigation/native";
import { getMealStorage, Meal } from "@services/MealStorage";
import { useEffect, useState } from "react";
import { RootParams } from "src/@types/navigation";
import { useModalStore } from "../../../src/zustand/ModalStore";
export function MealDetails(){

    const {params} = useRoute();
    const {id} = params as RootParams;

    const {fetchMeal} = getMealStorage();
    const {setModalVisible,modalVisible} = useModalStore();

    const [meal, setMeal] = useState<Meal | null>({} as Meal);

    useEffect(() => {
        const response = fetchMeal(id as string);
        console.log(response);
        if(response){
           return setMeal(response)
        }
        setMeal(null);
    }, [])

    console.log(modalVisible);

    return(
        <Screen bg="GREEN_LIGHT" padding={undefined}>
            <Box p="l">
            <Header CANGOBACK title="refeição" /> 
            </Box>
            <Screen borderTopEndRadius={20} borderTopStartRadius={20} gap="l">
                <Text variant="HeaderTitle">{meal?.name}</Text>
                <Text variant="TitleMeals">{meal?.description || "Sem descrição"}</Text>
                <Text variant="TitleStatistics">Data e hora{'\n\n'}
                <Text variant="TitleMeals">{meal?.date} ás {meal?.hour}</Text>
                </Text>
                <Box flex={1} justifyContent="flex-end" gap="m">
                    <Button.Default title="Editar refeição" icon edit/>
                    <Button.Default type="SECONDARY" title="Excluir refeição" icon  onPress={() => setModalVisible(true)}/>
                </Box>
            </Screen>
            <CustomModal id={id as string}/>
        </Screen>
    )
}

