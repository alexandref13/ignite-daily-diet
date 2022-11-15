import { useNavigation } from '@react-navigation/native';
import { Pressable, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  Container,
  DietText,
  Icon,
  PercentContainer,
  PercentText,
  Title,
  HeaderTypeStyleProps,
} from './styled';

type HeaderProps = {
  type?: HeaderTypeStyleProps;
  hasPercent?: boolean;
  percent?: string;
  title?: string;
};

export function Header({
  type = 'NONE',
  title,
  percent,
  hasPercent = false,
}: HeaderProps) {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();

  function handleGoToHome() {
    navigate('home');
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={
          type === 'GOOD'
            ? COLORS.SUCCESS_LIGHT
            : type === 'BAD'
            ? COLORS.ATTENTION_LIGHT
            : COLORS.BACKGROUND_500
        }
      />
      <Container type={type}>
        <Pressable onPress={handleGoToHome}>
          <Icon
            color={
              type === 'GOOD'
                ? COLORS.SUCCESS_DARK
                : type === 'BAD'
                ? COLORS.ATTENTION_DARK
                : COLORS.BACKGROUND_200
            }
          />
        </Pressable>

        {hasPercent ? (
          <PercentContainer>
            <PercentText>{percent?.replace('.', ',')}%</PercentText>
            <DietText>das refeições dentro da dieta</DietText>
          </PercentContainer>
        ) : (
          <Title>{title}</Title>
        )}
      </Container>
    </>
  );
}
