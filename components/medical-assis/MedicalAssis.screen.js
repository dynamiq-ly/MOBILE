import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import { Image } from 'styles/image.module'
import { StyledLaundryRow } from 'styles/list.module'
import Button from 'components/button/Button'

export default function MedicalAssistance() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/1787323/screenshots/14078370/media/e3f1a7d59b90332f879842b4ff541e8d.png?compress=1&resize=1000x750&vertical=top',
        }}
      />
      <Text
        size={18}
        content={
          'beceause we care about your safety. we equiped every room with a medical kit you can find behind the mirror in the bathroom'
        }
      />
      <StyledLaundryRow>
        <Text
          size={16}
          color={'gray'}
          content={
            'if you need a doctor appointment or it is an urgent need we are here help you.'
          }
        />
        <Button title={'request a doctor'} />
      </StyledLaundryRow>
    </AreaView>
  )
}
