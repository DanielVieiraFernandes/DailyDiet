 export declare global {
  namespace ReactNavigation {
    interface RootParamList{
      Home: undefined;
      StatisticsScreen: {
        colorType?: string;
      };
    }
  }
}

export type RootParams = {
  colorType?: string;
}