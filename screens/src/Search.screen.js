import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import LottieView from 'lottie-react-native'

import { useState } from 'react'
import { palette } from 'themes/palette'
import { View } from 'styles/detail.module'
import { SearchHeader } from 'components/export'
import { View as Gap, TouchableOpacity } from 'react-native'

export default function SearchScreen() {
  const [isSearch, setSearch] = useState('')
  const [isSearchText, setSearchText] = useState('')
  const [isSearchHistory, setSearchHistory] = useState([
    {
      hisotry: 'shakira bar',
    },
    {
      hisotry: 'la glosserie restaurant',
    },
    {
      hisotry: 'food goulette',
    },
  ])

  return (
    <View>
      <SearchHeader
        value={isSearchText}
        style={{ paddingTop: 0 }}
        setValue={setSearchText}
        click={() =>
          setSearchHistory([{ hisotry: isSearchText }, ...isSearchHistory])
        }
      />
      <AreaView mode={'dark'}>
        {search_category && (
          <Gap style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {search_category.map((el, key) => (
              <TouchableOpacity
                key={key}
                activeOpacity={0.9}
                style={
                  isSearch === el
                    ? { ...tagStyle, ...selectedTag }
                    : { ...tagStyle, ...nonSelectedTag }
                }
                onPress={() => setSearch(el)}>
                <Text
                  up={'cap'}
                  content={el}
                  color={isSearch === el ? 'white' : 'black'}
                />
              </TouchableOpacity>
            ))}
          </Gap>
        )}

        {isSearchHistory && (
          <Gap style={{ marginTop: 24 }}>
            <Text
              style={{ marginBottom: 16 }}
              content={'last searchs'}
              weight={600}
              up={'cap'}
              size={21}
            />
            {isSearchHistory.slice(0, 5).map((el, key) => (
              <Gap
                key={key}
                activeOpacity={0.5}
                style={{
                  marginBottom: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity style={{ flex: 1 }}>
                  <Text
                    up={'cap'}
                    size={18}
                    color={'gray'}
                    content={el.hisotry}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    setSearchHistory(
                      isSearchHistory.filter((elem) => elem !== el)
                    )
                  }>
                  <Icon name='ri-close-line' size={18} />
                </TouchableOpacity>
              </Gap>
            ))}
          </Gap>
        )}

        <Gap style={{ marginTop: 24 }}>
          <Text
            style={{ marginBottom: 16 }}
            content={'Recommended'}
            weight={600}
            up={'cap'}
            size={21}
          />
          <LottieView
            loop={true}
            autoPlay={true}
            style={{ width: '100%' }}
            source={require('assets/lottie/search_animation.json')}
          />
        </Gap>
      </AreaView>
    </View>
  )
}

const search_category = [
  'bar',
  'shop',
  'hotels',
  'sport',
  'check in',
  'food service',
  'gym',
  'safety',
]

const tagStyle = {
  borderWidth: 2,
  borderRadius: 5,
  marginRight: 10,
  marginBottom: 5,
  paddingVertical: 8,
  paddingHorizontal: 12,
}

const selectedTag = {
  backgroundColor: palette.primary.accent_900,
  borderColor: palette.primary.accent_900,
}

const nonSelectedTag = {
  backgroundColor: palette.primary.accent_0,
  borderColor: palette.primary.accent_200,
}
