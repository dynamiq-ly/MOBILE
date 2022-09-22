import AreaView from 'utils/TabAreaView'
import { Image } from 'styles/image.module'
import Text from 'components/text/Text'
import { View as NewView, View as Gap } from 'react-native'
import Icon from 'react-native-remix-icon'
import { palette } from '/themes/palette'
export default function AgencyTourGuide({ navigate, route }) {
  const { _data } = route.params
  return (
    <AreaView>
      <NewView style={{ marginBottom: 20 }} />
      <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{
            uri: _data.agency_guide_picture,
          }}
          style={{ borderRadius: 15, height: 150, width: 150 }}
        />
        <Gap>
          <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name={'ri-phone-line'}
              color={palette.secondary.accent_500}
              size={24}
              style={{ marginLeft: 15 }}
            />
            <Text
              size={16}
              weight={600}
              content={_data.agency_guide_phone}
              style={{ marginLeft: 15 }}
            />
          </Gap>
          <NewView style={{ marginBottom: 20 }} />
          <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name={'ri-mail-line'}
              color={palette.secondary.accent_500}
              size={24}
              style={{ marginLeft: 15 }}
            />
            <Text
              size={16}
              weight={600}
              content={_data.agency_guide_email}
              style={{ marginLeft: 15 }}
            />
          </Gap>

          <NewView style={{ marginBottom: 20 }} />
          <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name={'ri-instagram-line'}
              color={palette.secondary.accent_500}
              size={24}
              style={{ marginLeft: 15 }}
            />
            <Text
              size={16}
              weight={600}
              content={_data.agency_guide_instagram}
              style={{ marginLeft: 15 }}
            />
          </Gap>
        </Gap>
      </Gap>
      <NewView style={{ marginBottom: 40 }} />
      <Text size={18} weight={600} color={'black'} content={'Languages'} />
      <NewView style={{ marginBottom: 15 }} />
      <Text
        size={18}
        weight={450}
        color={'gray'}
        content={_data.agency_guide_language}
      />
      <NewView style={{ marginBottom: 20 }} />
      <Text size={18} weight={600} color={'black'} content={'About:'} />
      <NewView style={{ marginBottom: 15 }} />
      <Text
        size={18}
        weight={450}
        color={'gray'}
        content={_data.agency_guide_desc}
      />
    </AreaView>
  )
}
