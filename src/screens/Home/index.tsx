import { Alert, SectionList } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import {
  Container,
  HomeHeader,
  Logo,
  MealText,
  Profile,
  Title,
} from './styles';

import logoImg from '@assets/logo.png';
import profileImg from '@assets/profile.png';

import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';

import { mealsGetAll } from '@storage/meals/mealsGetAll';

import { streakGoodDiet } from '@utils/streakGoodDiet';

export type MealsProps = {
  id: string;
  date: string;
  hour: string;
  meal: string;
  description: string;
  status: 'GOOD' | 'BAD';
};

export type DataProps = {
  title: string;
  data: MealsProps[];
};

export function Home() {
  const [data, setData] = useState<DataProps[]>([]);
  const { navigate } = useNavigation();

  const meals = data.map((meal) => meal.data).flat();

  const totalMealsInDiet = meals.filter(
    (meal) => meal.status === 'GOOD',
  ).length;
  const totalMeals = meals.length;

  const percent = (totalMealsInDiet / totalMeals) * 100;

  const streakGoodDietNumber = streakGoodDiet(meals);

  function handleGoToNew() {
    navigate('new');
  }

  function handleGoToDetails(data: MealsProps) {
    navigate('details', {
      data,
    });
  }

  async function fetchMeals() {
    try {
      const meals = await mealsGetAll();

      setData(meals);
    } catch (error) {
      return Alert.alert('Nova refeição', 'Algo de errado aconteceu!');
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, []),
  );

  return (
    <Container>
      <HomeHeader>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </HomeHeader>

      <Percent
        percent={totalMeals > 0 ? percent.toFixed(2) : '0.00'}
        type={percent >= 50 || totalMeals === 0 ? 'GOOD' : 'BAD'}
        onPress={() =>
          navigate('statistic', {
            percent: totalMeals > 0 ? percent.toFixed(2) : '0.00',
            allMeals: totalMeals.toString(),
            dietMeals: totalMealsInDiet.toString(),
            noDietMeals: (totalMeals - totalMealsInDiet).toString(),
            sequenceNumber: streakGoodDietNumber.toString(),
          })
        }
      />
      <MealText>Refeições</MealText>
      <Button title="Nova Refeição" hasIcon onPress={handleGoToNew} />

      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.meal + index}
        renderItem={({ item }) => (
          <MealCard
            title={item.meal}
            hour={item.hour}
            type={item.status}
            onPress={() => handleGoToDetails(item)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => <Title>{title}</Title>}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
