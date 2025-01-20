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
      }
    }
  }
}

export type RootParams = {
  colorType?: string;
  title?: string;
  subtitle?: string;
  isParty?: boolean;
}