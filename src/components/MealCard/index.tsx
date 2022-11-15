import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  ContentMeal,
  Divider,
  Hour,
  Meal,
  MealCardTypeStyleProps,
  Status,
} from './styles';

type MealCardProps = TouchableOpacityProps & {
  type?: MealCardTypeStyleProps;
  hour: string;
  title: string;
};

export function MealCard({
  type = 'GOOD',
  hour,
  title,
  ...rest
}: MealCardProps) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Divider></Divider>
      <ContentMeal>
        <Meal numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Meal>
      </ContentMeal>
      <Status type={type}></Status>
    </Container>
  );
}
