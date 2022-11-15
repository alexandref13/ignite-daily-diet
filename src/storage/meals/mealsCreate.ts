import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealsProps } from '@screens/Home';

import { MEALS_COLLECTION } from '@storage/storageConfig';

import { mealsGetAll } from './mealsGetAll';

export async function mealsCreate(newMeal: MealsProps) {
  try {
    const storedMeals = await mealsGetAll();

    const mealByDate = storedMeals.find((meal) => meal.title === newMeal.date);

    if (mealByDate) {
      mealByDate.data = [...mealByDate.data, newMeal];
      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals));
    } else {
      const meal = {
        title: newMeal.date,
        data: [newMeal],
      };

      const data = [...storedMeals, meal];
      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(data));
    }
  } catch (error) {
    throw error;
  }
}
