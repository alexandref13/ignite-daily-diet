import { Container, Content, InfoMeals, Title } from './styled';

import { Header } from '@components/Header';
import { ContainerBox } from '@components/ContainerBox';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { HeaderTypeStyleProps } from '@components/Header/styled';

type RouteParams = {
  percent: string;
  sequenceNumber: string;
  allMeals: string;
  dietMeals: string;
  noDietMeals: string;
};

export function Statistic() {
  const [type, setType] = useState<HeaderTypeStyleProps>('NONE');
  const { params } = useRoute();

  const { allMeals, dietMeals, noDietMeals, percent, sequenceNumber } =
    params as RouteParams;

  function changeTypeByPercent() {
    if (percent) {
      const percentNumber = parseFloat(percent);

      if (percentNumber >= 50) {
        setType('GOOD');
      } else {
        setType('BAD');
      }
    } else {
      return;
    }
  }

  useEffect(() => {
    changeTypeByPercent();
  }, [percent]);

  return (
    <Container>
      <Header
        hasPercent
        percent={percent === '0,0' ? '0,0' : percent}
        type={type}
      />
      <Content>
        <Title>Estatísticas gerais</Title>
        <ContainerBox
          number={sequenceNumber}
          title="melhor sequência de pratos dentro da dieta"
        />
        <ContainerBox number={allMeals} title="refeições registradas" />

        <InfoMeals>
          <ContainerBox
            style={{
              width: '48%',
            }}
            number={dietMeals}
            title="refeições dentro da dieta"
            type="GOOD"
          />
          <ContainerBox
            style={{
              width: '48%',
            }}
            number={noDietMeals}
            title="refeições fora da dieta"
            type="BAD"
          />
        </InfoMeals>
      </Content>
    </Container>
  );
}
