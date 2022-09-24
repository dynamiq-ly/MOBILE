import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import { palette } from 'themes/palette'
import { View as Gap, Image } from 'react-native'

export default function AgencyTourGuide({ route }) {
  const { _data } = route.params

  return (
    <AreaView>
      <Gap
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
      >
        <Image
          style={{ borderRadius: 8, height: 125, width: 125 }}
          source={{
            uri: _data.agency_guide_picture,
          }}
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

          <Gap
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
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

          <Gap
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
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

      <Text
        size={18}
        weight={600}
        color={'black'}
        content={'Languages'}
        style={{ marginTop: 24 }}
      />

      <Text
        size={18}
        weight={500}
        color={'gray'}
        content={_data.agency_guide_language}
        style={{ marginTop: 5 }}
      />

      <Text
        size={18}
        weight={600}
        color={'black'}
        content={'About:'}
        style={{ marginTop: 24 }}
      />

      <Text
        size={18}
        weight={500}
        color={'gray'}
        content={_data.agency_guide_desc}
        style={{ marginTop: 5 }}
      />
    </AreaView>
  )
}
