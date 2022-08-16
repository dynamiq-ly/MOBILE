import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import { Image } from 'styles/image.module'
import Button from 'components/button/Button'

export default function ExtendYourStay() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://d2b76zvyv8w5tg.cloudfront.net/general-uploads/_1400x1000_fit_center-center_none/Regency-ExtendedStay-LandingPage-1200x628-1.png?mtime=20190411164620',
        }}
        style={{ marginBottom: 14 }}
      />
      <Text
        size={21}
        weight={600}
        content={'Stay longer and see more nights'}
      />
      <Text content={''} size={5} />
      <Text
        color={'gray'}
        content={
          'if you wish to extend your stay you can contact reception for more information'
        }
      />
      <Text content={''} size={5} />
      <Text
        color={'gray'}
        content={'extand your stay will be available in the future.'}
      />
      <Button title={'contact reception'} style={{ marginTop: 24 }} />
    </AreaView>
  )
}
