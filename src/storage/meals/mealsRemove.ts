import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealsProps } from '@screens/Home';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { mealsGetAll } from './mealsGetAll';

export async function mealsRemove(meal: MealsProps) {
  const storedMeals = await mealsGetAll();

  const mealByDate = storedMeals.find((item) => item.title === meal.date);

  if (mealByDate) {
    const mealsAfterRemove = mealByDate.data.filter(
      (item) => item.id !== meal.id,
    );

    if (mealsAfterRemove.length <= 0) {
      const mealByDate = storedMeals.filter((item) => item.title !== meal.date);

      return await AsyncStorage.setItem(
        MEALS_COLLECTION,
        JSON.stringify(mealByDate),
      );
    }

    mealByDate.data = mealsAfterRemove;
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals));
  } else {
    throw new AppError('Refeição não existe');
  }
}
