import AreaView from 'utils/TabAreaView'
import { mini_bar } from 'mock/mini_bar'
import Button from 'components/button/Button'
import MiniBarCard from 'components/cards/MiniBarCard'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import { useState } from 'react'

export default function MiniBar() {
  const [drink, setDrinks] = useState([])

  console.log(drink)

  return (
    <View>
      <AreaView>
        {mini_bar.map((el, index) => {
          return (
            <MiniBarCard
              key={index}
              element={el}
              array={drink}
              onChange={setDrinks}
            />
          )
        })}
      </AreaView>
      <ButtonWrapperDetail>
        <Button title='add to cart' />
      </ButtonWrapperDetail>
    </View>
  )
}
