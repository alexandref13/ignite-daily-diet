import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, HappyImg, Strong, Subtitle, Title } from './styles';

import happyImg from '@assets/happy-illustration.png';

import { Button } from '@components/Button';

export function GoodDietConfirm() {
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
      <Title>Continue assim!</Title>
      <Subtitle>
        Você continua {<Strong>dentro da dieta</Strong>}. Muito bem!
      </Subtitle>

      <HappyImg source={happyImg} />
      <Button
        title="Ir para a página inicial"
        style={{ paddingHorizontal: 10 }}
        onPress={handleGoToHome}
      />
    </Container>
  );
}
