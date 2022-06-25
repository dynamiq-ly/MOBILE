import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Input from 'components/input/Input'
import Button from 'components/button/Button'
import DropDownPicker from 'react-native-dropdown-picker'

import { View } from 'react-native'
import { useQuery } from 'react-query'
import { palette } from 'themes/palette'
import { useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/native'

export default function MoneyExchange() {
  const [value, setValue] = useState('')

  const [open, setOpen] = useState()
  const [open2, setOpen2] = useState()
  const [picked, setPicked] = useState(null)
  const [picked2, setPicked2] = useState(null)

  const { data: currencyList, isFetched } = useQuery(
    '@currencyList',
    fetchCurrencyList,
    {
      casheTime: 1800,
    }
  )

  const { data: currencyRate, refetch } = useQuery(
    ['@currencyRate', picked, picked2],
    () => {
      fetchCurrencyRate(picked, picked2)
    },
    {
      enabled: false,
      casheTime: 1800,
    }
  )

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
        ...Object.keys(currencyList).map((el) => {
          return {
            value: el,
            label: `${el} - ${currencyList[el]}`,
          }
        }),
      ])
  }, [isFetched])

  const spring = useSpring({
    to: {
      marginBottom: open ? 225 : 15,
    },
    delay: open ? 0 : 300,
  })

  const spring2 = useSpring({
    to: {
      marginBottom: open2 ? 225 : 15,
    },
    delay: open2 ? 0 : 300,
  })

  console.log(currencyRate)

  return (
    <AreaView nestedScrollEnabled={true}>
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
        <animated.View style={{ ...spring }}>
          <DropDownPicker
            searchable
            open={open}
            value={picked}
            items={items}
            setOpen={setOpen}
            setValue={setPicked}
            setItems={setItems}
            placeholder={'amount currency'}
            listMode={'SCROLLVIEW'}
            style={{ borderWidth: 0 }}
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
        <animated.View style={{ ...spring2 }}>
          <DropDownPicker
            searchable
            open={open2}
            value={picked2}
            items={items}
            setOpen={setOpen2}
            setValue={setPicked2}
            setItems={setItems}
            placeholder={'currency to convert to'}
            listMode={'SCROLLVIEW'}
            style={{ borderWidth: 0 }}
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
        <Button
          icon={'ri-swap-line'}
          title={'convert'}
          onPress={() => {
            if (value && picked2 && picked) {
              refetch()
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

let fetchCurrencyRate = function (base, targed) {
  return fetch(
    `https://free.currconv.com/api/v7/convert?q=${base}_${targed}&compact=ultra&apiKey=07c0151a73a5a257c6d4`
  ).then((res) => res.json())
}
