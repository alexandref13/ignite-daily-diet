import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BadDietConfirm } from '@screens/BadDietConfirm';
import { Details } from '@screens/Details';
import { Edit } from '@screens/Edit';
import { GoodDietConfirm } from '@screens/GoodDietConfirm';
import { Home } from '@screens/Home';
import { New } from '@screens/New';
import { Statistic } from '@screens/Statistic';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="details" component={Details} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="new" component={New} />
      <Screen name="edit" component={Edit} />
      <Screen name="goodDietConfirm" component={GoodDietConfirm} />
      <Screen name="badDietConfirm" component={BadDietConfirm} />
    </Navigator>
  );
}
