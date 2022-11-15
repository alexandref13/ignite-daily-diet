import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { MealsProps } from '@screens/Home';

import { Header } from '@components/Header';

import {
  ButtonContainer,
  Container,
  Content,
  DateTimeTitle,
  DateTimeValue,
  Description,
  InDietContainer,
  InDietStatus,
  InDietText,
  Title,
} from './styles';
import { Button } from '@components/Button';
import { useTheme } from 'styled-components/native';
import { mealsRemove } from '@storage/meals/mealsRemove';

type RouteParams = {
  data: MealsProps;
};

export function Details() {
  const { COLORS } = useTheme();
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const { data } = params as RouteParams;

  async function handleRemoveMeal() {
    try {
      Alert.alert(
        'Remover item',
        'Deseja realmente excluir o registro da refeição?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Sim, excluir!',
            onPress: async () => {
              await mealsRemove(data);
              navigate('home');
            },
          },
        ],
      );
    } catch (error) {
      return Alert.alert('Detalhes', 'Algo deu errado!');
    }
  }

  function handleGoToEdit(data: MealsProps) {
    navigate('edit', {
      data,
    });
  }
  return (
    <Container>
      <Header title="Refeição" type={data.status} />
      <Content>
        <Title>{data.meal}</Title>
        <Description>{data.description}</Description>
        <DateTimeTitle>Data e hora</DateTimeTitle>
        <DateTimeValue>
          {data.date} às {data.hour}
        </DateTimeValue>
        <InDietContainer>
          <InDietStatus type={data.status} />

          <InDietText>
            {data.status === 'GOOD' ? 'dentro da dieta' : 'fora da dieta'}
          </InDietText>
        </InDietContainer>
      </Content>
      <ButtonContainer>
        <Button
          style={{ marginBottom: 8 }}
          title="Editar refeição"
          hasIcon
          iconName="PENCIL"
          onPress={() => handleGoToEdit(data)}
        />
        <Button
          style={{
            backgroundColor: 'transparent',
          }}
          title="Excluir refeição"
          hasIcon
          iconName="TRASH"
          titleStyle={{
            color: COLORS.BACKGROUND_100,
          }}
          onPress={handleRemoveMeal}
        />
      </ButtonContainer>
    </Container>
  );
}
