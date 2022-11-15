import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Container, BadImage, Strong, Subtitle, Title } from './styles';

import badImg from '@assets/sad-illustration.png';

import { Button } from '@components/Button';

export function BadDietConfirm() {
  const { COLORS } = useTheme();

  const { navigate } = useNavigation();

  function handleGoToHome() {
    navigate('home');
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={COLORS.BACKGROUND_700}
      />
      <Title>Que pena!</Title>
      <Subtitle>
        Você
        {<Strong> saiu da dieta </Strong>}
        dessa vez, mas continue se esforçando e não desista!
      </Subtitle>

      <BadImage source={badImg} />
      <Button
        title="Ir para a página inicial"
        style={{ paddingHorizontal: 10 }}
        onPress={handleGoToHome}
      />
    </Container>
  );
}
