import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'
import Expandable from 'components/button/Expandable'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { baseUrl } from 'hooks/useApi'
import { Image } from 'styles/image.module'
import { View as Gap } from 'react-native'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'
import { ButtonWrapperDetail, View } from 'styles/detail.module'

export default function ExcusionDetailScreen({ route }) {
  const { _data } = route.params
  const [isCategory, setCategory] = useState('all')

  return (
    <View>
      <Gap>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {zone_category_Array.map((el, key) => {
            return (
              <Gap
                style={{ alignItems: 'center', flexDirection: 'row' }}
                key={key}>
                <FixedWidthButton
                  title={el}
                  func={() => setCategory(el)}
                  active={isCategory !== el ? true : false}
                />
                {zone_category_Array.length !== key + 1 ? (
                  <VerticalListLine />
                ) : (
                  <Gap style={{ marginLeft: 24 }} />
                )}
              </Gap>
            )
          })}
        </HScrollView>
      </Gap>
      <AreaView>
        <Image
          source={{
            uri: `${baseUrl}storage/excursions/thumbnails/${_data.activity_list_thumbnail}`,
          }}
        />
        <Gap style={{ marginTop: 14 }} />

        <Expandable title='duration' content={_data.activity_list_duration} />
        <Expandable
          title='included'
          content={
            'you visit one of the best places in our golf regeion, where you can enjoy the best of the best golf courses in the world. then we will have a competition and the winner gets a prize.'
          }
        />
        <Expandable
          title='Meeting Point'
          content={_data.activity_list_meeting_point}
        />
        <Expandable
          title='Required equipements'
          content={_data.activity_list_required_equipment}
        />
        <Gap style={{ marginBottom: 24 }} />
      </AreaView>
      <ButtonWrapperDetail>
        <Button title={'Book now'} />
      </ButtonWrapperDetail>
    </View>
  )
}

const zone_category_Array = [
  'all',
  'west line',
  'golf zone',
  'east line',
  'tropicana',
]
