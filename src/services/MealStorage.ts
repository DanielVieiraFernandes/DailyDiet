import { useNavigation } from "@react-navigation/native";
import { MEALKEY, SEQUENCESKEY, storage } from "@storage/dailyDietStorage";
import { generateUUID } from "@utils/generateUUIDv4";
import { Alert } from "react-native";
import { MealProps } from "src/schemas/MealSchema";
import { useModalStore } from "../../src/zustand/ModalStore";

export type Meal = {
    id: string;
    name: string;
    date: string;
    hour: string;
    isPart: boolean;
    description?: string | undefined;
}

export type Meals = {
    title: string;
    data: [Meal];
}

const getMealStorage = () => {

    const navigation = useNavigation();
    const { setModalVisible } = useModalStore();

    const saveMeal = (data: MealProps) => {
        try {

            const meal = {
                id: generateUUID(),
                ...data,
            }

            const response = storage.getString(MEALKEY);

            if (response) {
                const previousMeals: Meals[] = JSON.parse(response);

                const mealDate = data.date;
                const existingSection = previousMeals.find((section: Meals) => section.title === mealDate);

                const isSequence = data.isPart;

                const sequences = storage.getNumber(SEQUENCESKEY);

                if (sequences !== undefined) {
                    if (isSequence) {
                        storage.set(SEQUENCESKEY, sequences + 1);
                    } else if (!isSequence) {
                        storage.set(SEQUENCESKEY, 0);
                    }
                } else {
                    storage.set(SEQUENCESKEY, isSequence ? 1 : 0);
                }
                

                if (existingSection) {
                    existingSection.data.push(meal);
                } else {
                    previousMeals.push({
                        title: mealDate,
                        data: [meal],
                    });
                }

                navigation.navigate('Summary', {
                    isParty: data.isPart
                })
                return storage.set(MEALKEY, JSON.stringify(previousMeals));
            }

            const newMeal = [{
                title: data.date,
                data: [meal],
            }];
            storage.set(MEALKEY, JSON.stringify(newMeal));
            navigation.navigate('Summary', {
                isParty: data.isPart
            });
        } catch (error) {
            Alert.alert("OPS!", "Algo deu errado ao cadastrar sua refeição")
            console.log(error);
        }
    }

    const fetchMeals = () => {
        try {
            const response = storage.getString(MEALKEY);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const fetchMeal = (id: string): Meal | null => {
        try {
            const response = storage.getString(MEALKEY);
            if (response) {
                const meals: Meals[] = JSON.parse(response);
                for (const section of meals) {
                    const meal = section.data.find(item => item.id === id);
                    if (meal !== undefined) {
                        return meal;
                    }
                }
            }
            return null;
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao buscar refeição', 'Verifique e tente novamente');
        }
        return null;
    }

    const delMeal = (id: string) => {
        try {

            const response = storage.getString(MEALKEY);
            if (response) {
                const meals: Meals[] = JSON.parse(response);

                const newMeals = meals.map(section => ({
                    ...section,
                    data: section.data.filter(item => item.id !== id),
                })).filter(item => item.data.length > 0);
                console.log('Função com o id: ', id, ' Excluída');

                storage.set(MEALKEY, JSON.stringify(newMeals));
                console.log('Refeição deletada');
                setModalVisible(false);
                navigation.navigate('Home');
            }

        } catch (error) {
            console.log(error);
        }
    }

    const updateMeal = (id: string, newMeal: MealProps) => {
        try {
            const response = storage.getString(MEALKEY);
            if (response) {
                const meals: Meals[] = JSON.parse(response);

                meals.map(section => {
                    const mealIndex = section.data.findIndex(meal => meal.id === id);
                    if (mealIndex >= 0) {
                        section.data.splice(mealIndex, 1);
                        if (section.data.length < 1) {
                            const sectionIndex = meals.findIndex(s => s.title === section.title);
                            meals.splice(sectionIndex, 1);
                        }
                    }
                })
                const existingTitle = meals.find((section: Meals) => section.title === newMeal.date);

                const isSequence = newMeal.isPart;

                const sequences = storage.getNumber(SEQUENCESKEY);

                if (sequences !== undefined) {
                    if (isSequence) {
                        storage.set(SEQUENCESKEY, sequences + 1);
                    } else if (!isSequence) {
                        storage.set(SEQUENCESKEY, 0);
                    }
                } else {
                    storage.set(SEQUENCESKEY, isSequence ? 1 : 0);
                }

                if (existingTitle) {
                    existingTitle.data.push({ id, ...newMeal });
                } else {
                    meals.push({
                        title: newMeal.date,
                        data: [{ id, ...newMeal }],
                    })
                }

                storage.set(MEALKEY, JSON.stringify(meals));
                console.log('Sucesso', newMeal);
                navigation.navigate('Home');
            }

        } catch (error) {
            console.log(error)
        }
    }

    return {
        saveMeal,
        fetchMeals,
        fetchMeal,
        delMeal,
        updateMeal,
    }
}

export { getMealStorage };