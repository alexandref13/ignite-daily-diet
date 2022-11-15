import { MealsProps } from '@screens/Home';

export function streakGoodDiet(meals: MealsProps[]) {
  let streak = 0;

  meals.forEach((meal) => {
    if (meal.status === 'GOOD') {
      streak++;
    } else {
      streak = 0;
    }
  });

  return streak;
}
