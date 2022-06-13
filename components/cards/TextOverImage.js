import Text from 'components/text/Text'
import {
  AbsoluteViewRendtedCard,
  ImageRentedVehicule,
  RentingWideCard,
} from 'styles/cards.module'

/**
 * @param0 {string} name
 * @param1 {string} image
 */
export default function TextOverImage({ name, image, ...rest }) {
  return (
    <RentingWideCard activeOpacity={0.8} {...rest}>
      <AbsoluteViewRendtedCard>
        <Text
          align={'center'}
          color={'white'}
          content={name}
          weight={600}
          size={21}
          up={'up'}
        />
      </AbsoluteViewRendtedCard>
      <ImageRentedVehicule source={{ uri: image }} />
    </RentingWideCard>
  )
}
