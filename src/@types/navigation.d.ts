import { MealsProps } from '@screens/Home';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      details: {
        data: MealsProps;
      };
      new: undefined;
      edit: {
        data: MealsProps;
      };
      goodDietConfirm: undefined;
      badDietConfirm: undefined;
      statistic: {
        percent: string;
        sequenceNumber: string;
        allMeals: string;
        dietMeals: string;
        noDietMeals: string;
      };
    }
  }
}
