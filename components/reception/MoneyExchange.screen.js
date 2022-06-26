import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Input from 'components/input/Input'
import Button from 'components/button/Button'
import DropDownPicker from 'react-native-dropdown-picker'

import { View } from 'react-native'
import { useQuery } from 'react-query'
import { palette } from 'themes/palette'
import { useEffect, useState } from 'react'
import { StyledAmountCard } from 'styles/cards.module'
import { animated, useSpring } from '@react-spring/native'
import { SafeAreaRowWrapperDetail } from '~/styles/detail.module'

export default function MoneyExchange() {
  const [value, setValue] = useState('')
  const [conversion, setConversion] = useState(null)

  const [open, setOpen] = useState()
  const [open2, setOpen2] = useState()
  const [picked, setPicked] = useState(null)
  const [picked2, setPicked2] = useState(null)

  const { data, isFetched } = useQuery('@currencyList', fetchCurrencyList, {
    casheTime: 1800,
  })

  const [items, setItems] = useState([
    {
      value: 'USD',
      label: 'United State Dollar',
    },
    {
      value: 'EUR',
      label: 'Euro',
    },
  ])

  useEffect(() => {
    isFetched &&
      setItems([
        ...Object.keys(data).map((el) => {
          return {
            value: el,
            label: `${el} - ${data[el]}`,
          }
        }),
      ])
  }, [isFetched])

  const spring = useSpring({
    to: {
      flex: 1,
      marginBottom: open ? 225 : 15,
    },
    delay: open ? 0 : 300,
  })

  const spring2 = useSpring({
    to: {
      flex: 1,
      marginBottom: open2 ? 225 : 15,
    },
    delay: open2 ? 0 : 300,
  })

  let fetchCurrencyRate = function (base = 'USD', target = 'EUR', amount = 1) {
    return fetch(
      `https://api.apilayer.com/fixer/convert?to=${target}&from=${base}&amount=${amount}`,
      {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders,
      }
    )
      .then((response) => response.text())
      .then((result) => setConversion(JSON.parse(result)))
      .catch((error) => console.log('error', error))
  }

  return (
    <AreaView nestedScrollEnabled={true}>
      <StyledAmountCard>
        <View
          style={{
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: palette.primary.accent_400,
          }}>
          <Text content={'amount converted'} color={'white'} up={'cap'} />
          <Text
            up={'up'}
            size={38}
            weight={700}
            content={
              conversion
                ? `${+(
                    Math.round(conversion.result + 'e+2') + 'e-2'
                  )} ${picked2}`
                : 0
            }
            color={'white'}
          />
        </View>
        <SafeAreaRowWrapperDetail>
          <Text size={21} up={'up'} content={picked} color={'white'} />
          <Text size={21} up={'up'} content={picked2} color={'white'} />
        </SafeAreaRowWrapperDetail>
      </StyledAmountCard>
      <View
        style={{
          borderRadius: 10,
          paddingHorizontal: 16,
          backgroundColor: palette.primary.accent_0,
        }}>
        <Input
          value={value}
          icon={'ri-exchange-line'}
          placeholder={'money amount'}
          onChangeText={(text) => setValue(text)}
        />
        <View style={{ alignItems: 'center' }}>
          <animated.View style={{ ...spring }}>
            <DropDownPicker
              searchable
              open={open}
              value={picked}
              items={items}
              setOpen={setOpen}
              setValue={setPicked}
              setItems={setItems}
              placeholder={'FROM'}
              listMode={'SCROLLVIEW'}
              style={{ borderColor: palette.primary.accent_200 }}
              dropDownContainerStyle={{
                borderWidth: 0,
                backgroundColor: palette.primary.accent_0,
              }}
              searchContainerStyle={{
                borderWidth: 0,
                borderBottomWidth: 0,
              }}
              searchTextInputStyle={{
                height: 36,
                borderWidth: 0,
                backgroundColor: palette.primary.accent_100,
              }}
              listItemContainerStyle={{
                borderBottomWidth: 1,
                borderColor: palette.primary.accent_200,
              }}
            />
          </animated.View>
          <Icon
            name={'ri-arrow-down-circle-line'}
            color={palette.primary.accent_400}
            style={{ marginBottom: 10 }}
          />
          <animated.View style={{ ...spring2 }}>
            <DropDownPicker
              searchable
              open={open2}
              value={picked2}
              items={items}
              setOpen={setOpen2}
              setValue={setPicked2}
              setItems={setItems}
              placeholder={'TO'}
              listMode={'SCROLLVIEW'}
              style={{ borderColor: palette.primary.accent_200 }}
              dropDownContainerStyle={{
                borderWidth: 0,
                backgroundColor: palette.primary.accent_0,
              }}
              searchContainerStyle={{
                borderWidth: 0,
                borderBottomWidth: 0,
              }}
              searchTextInputStyle={{
                height: 36,
                borderWidth: 0,
                backgroundColor: palette.primary.accent_100,
              }}
              listItemContainerStyle={{
                borderBottomWidth: 1,
                borderColor: palette.primary.accent_200,
              }}
            />
          </animated.View>
        </View>

        <Button
          icon={'ri-swap-line'}
          title={'convert'}
          onPress={() => {
            if (value && picked2 && picked) {
              fetchCurrencyRate(picked, picked2, value)
            }
          }}
        />
      </View>
    </AreaView>
  )
}

let fetchCurrencyList = function () {
  return fetch('https://openexchangerates.org/api/currencies.json').then(
    (res) => res.json()
  )
}

var myHeaders = new Headers()
myHeaders.append('apikey', '87cvUSbBvNSYFOcgrXVcWfDirImFhIgM')
