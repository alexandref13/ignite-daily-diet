import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import * as yup from 'yup';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Options } from '@components/Options';

import { MealsProps } from '@screens/Home';

import { Container, Content, ContainerInRow, Form, YouAreIn } from './styles';
import { Alert } from 'react-native';
import { mealsCreate } from '@storage/meals/mealsCreate';

const schema = yup
  .object({
    meal: yup.string().required('Informe a refeição'),
    description: yup.string().required('Informe a descrição'),
    date: yup
      .string()
      .min(10, 'Insira uma data válida')
      .required('Informe a data'),
    hour: yup
      .string()
      .min(5, 'Insira uma hora válida')
      .required('Informe a hora'),
  })
  .required();

export function New() {
  const [hasSelected, setHasSelected] = useState<'GOOD' | 'BAD' | 'NONE'>(
    'NONE',
  );

  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MealsProps>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: MealsProps) => {
    try {
      if (hasSelected === 'NONE') {
        return Alert.alert('Nova refeição', 'Informe se esta dentro da dieta');
      } else {
        handleCreate(data);
      }
    } catch (error) {
      return Alert.alert('Nova refeição', 'Algo de errado aconteceu!');
    }
  };

  async function handleCreate(data: MealsProps) {
    try {
      if (hasSelected === 'GOOD') {
        await mealsCreate({
          ...data,
          id: uuid.v4().toString(),
          status: 'GOOD',
        });
        navigate('goodDietConfirm');
      } else if (hasSelected === 'BAD') {
        await mealsCreate({
          ...data,
          id: uuid.v4().toString(),
          status: 'BAD',
        });
        navigate('badDietConfirm');
      }
    } catch (error) {
      return Alert.alert('Nova refeição', 'Algo de errado aconteceu!');
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" />
      <Content>
        <Form>
          <Controller
            control={control}
            name="meal"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                title="Nome"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors.meal?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                title="Descrição"
                multiline={true}
                numberOfLines={4}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors.description?.message}
              />
            )}
          />
          <ContainerInRow>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  type="MEDIUM"
                  title="Data"
                  mask={[
                    /\d/,
                    /\d/,
                    '/',
                    /\d/,
                    /\d/,
                    '/',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  keyboardType="numeric"
                  placeholder="01/01/2022"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  errorMessage={errors.date?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="hour"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  type="MEDIUM"
                  title="Hora"
                  mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                  placeholder="00:00"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  errorMessage={errors.hour?.message}
                />
              )}
            />
          </ContainerInRow>
          <YouAreIn>Está dentro da dieta?</YouAreIn>
          <ContainerInRow>
            <Options
              title="Sim"
              isSelected={hasSelected === 'GOOD'}
              onPress={() => setHasSelected('GOOD')}
            />
            <Options
              title="Não"
              type="BAD"
              isSelected={hasSelected === 'BAD'}
              onPress={() => setHasSelected('BAD')}
            />
          </ContainerInRow>
        </Form>
      </Content>

      <Button
        style={{
          marginBottom: 20,
          marginHorizontal: 24,
        }}
        title="Cadastrar refeição"
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
}
