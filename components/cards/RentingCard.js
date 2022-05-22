import Text from 'components/text/Text'
import {
  AbsoluteViewRendtedCard,
  ImageRentedVehicule,
  RentingWideCard,
} from 'styles/cards.module'

export default function RentingCard({ name, image, ...rest }) {
  return (
    <RentingWideCard activeOpacity={0.8} {...rest}>
      <AbsoluteViewRendtedCard>
        <Text
          content={name}
          weight={600}
          size={24}
          align={'center'}
          up={'up'}
        />
      </AbsoluteViewRendtedCard>
      <ImageRentedVehicule source={{ uri: image }} />
    </RentingWideCard>
  )
}
