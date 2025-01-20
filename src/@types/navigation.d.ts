export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      StatisticsScreen: {
        colorType: string;
        title: string;
        subtitle: string;
      };
      NewMeal: undefined;
      Summary: {
        isParty: boolean;
      };
      MealDetails: {
        id: string;
      }
    }
  }
}

export type RootParams = {
  colorType?: string;
  title?: string;
  subtitle?: string;
  isParty?: boolean;
  id?: string;
}