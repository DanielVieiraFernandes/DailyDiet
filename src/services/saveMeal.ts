import { useNavigation } from "@react-navigation/native";
import { MEALKEY, storage } from "@storage/dailyDietStorage";
import { generateUUID } from "@utils/generateUUIDv4";
import { Alert } from "react-native";
import { MealProps } from "src/schemas/MealSchema";

type Meal = {
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

    const saveMeal = (data: MealProps) => {
        try {

            const meal = {
                id: generateUUID(),
                ...data,
            }

            const response = storage.getString(MEALKEY);

            if (response) {
                const previousMeals = JSON.parse(response);

                const mealDate = data.date;
                const existingSection = previousMeals.find((section: Meals) => section.title === mealDate);

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

    return {
        saveMeal,
        fetchMeals,
    }
}

export { getMealStorage };