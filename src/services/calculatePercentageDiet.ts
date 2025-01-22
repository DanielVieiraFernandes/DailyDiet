import { MEALKEY, SEQUENCESKEY, storage } from "@storage/dailyDietStorage";
import { create } from "zustand";
import { Meals } from "./MealStorage";

type PercentageDiet = {
    overall: string;
    sequences: string;
    registerMeals: string;
    insideDiet: string;
    outsideDiet: string;
    setOverall: (value: string) => void;
    setSequences: (value: string) => void;
    setRegisterMeals: (value: string) => void;
    setInsideDiet: (value: string) => void;
    setOutsideDiet: (value: string) => void;
}

export const PercentageDietStorage = create<PercentageDiet>((set) => ({
    overall: '0%',
    sequences: '0',
    registerMeals: '',
    insideDiet: '',
    outsideDiet: '',
    setOverall: (value: string) => set({ overall: value }),
    setSequences: (value: string) => set({ sequences: value }),
    setRegisterMeals: (value: string) => set({ registerMeals: value }),
    setInsideDiet: (value: string) => set({ insideDiet: value }),
    setOutsideDiet: (value: string) => set({ outsideDiet: value }),
}));

export const usePercentageDietStorage = () => {

    const { setInsideDiet, setOutsideDiet, setOverall, setRegisterMeals, setSequences, } = PercentageDietStorage();

    const calculatePercentage = () => {
        try {
            const response = storage.getString(MEALKEY);
            if (response) {

                const meals: Meals[] = JSON.parse(response);

                let inside = 0;
                let outside = 0;

                meals.forEach(section => {
                    section.data.forEach(meal => {
                        meal.isPart === true ? inside++ : outside++;
                    })
                });

                const total = inside + outside;
                const sequence = storage.getNumber(SEQUENCESKEY);
                console.log(sequence + 'Esta é a sequência');
                


                const percentageInside = (inside / total) * 100;
                console.log(percentageInside);
                setOverall(String(percentageInside.toFixed(2).replace('.',',')) + '%');
                setInsideDiet(String(inside));
                setOutsideDiet(String(outside));
                setRegisterMeals(String(total));
                setSequences(String(sequence));

            }
        } catch (error) {
            console.log(error);
        }
    }


    return {
        calculatePercentage,
    }

}