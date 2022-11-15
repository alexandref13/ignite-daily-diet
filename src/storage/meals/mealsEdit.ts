import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealsProps } from '@screens/Home';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import uuid from 'react-native-uuid';

import { mealsCreate } from './mealsCreate';
import { mealsGetAll } from './mealsGetAll';
import { mealsRemove } from './mealsRemove';

export async function mealsEdit(meal: MealsProps) {
  const storedMeals = await mealsGetAll();

  const mealByDate = storedMeals.find((item) => item.title === meal.date);

  if (mealByDate) {
    const mealsEdited = mealByDate.data.map((item) => {
      if (item.id === meal.id) {
        return {
          id: meal.id,
          date: meal.date,
          description: meal.description,
          hour: meal.hour,
          meal: meal.meal,
          status: meal.status,
        };
      } else {
        return item;
      }
    });

    mealByDate.data = mealsEdited;
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals));
  } else {
    // TODO -> Ajuste editando para data diferente da original

    await mealsRemove(meal);
    await mealsCreate({
      id: uuid.v4().toString(),
      date: meal.date,
      description: meal.description,
      hour: meal.hour,
      meal: meal.meal,
      status: meal.status,
    });
  }
}
