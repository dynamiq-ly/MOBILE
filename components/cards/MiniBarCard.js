import { useEffect, useState } from 'react'
import Text from 'components/text/Text'
import CheckBox from 'components/checkbox/Checkbox'
import { CheckBoxView, ContentViewMinCard, MiniCard } from 'styles/cards.module'

/**
 *
 * @param0 {object} element
 * @param1 {element[]} array
 * @param2 {()=>void} onChange
 * @returns JSX.element
 */
export default function MiniBarCard({ element, array = [], onChange }) {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    checked
      ? onChange([...array, element])
      : onChange(array.filter((el) => el.id !== element.id))
  }, [checked])

  return (
    <MiniCard
      activeOpacity={0.7}
      onPress={() => {
        setChecked(!checked)
      }}
      pressed={checked}>
      <ContentViewMinCard>
        <Text content={element.name} weight={700} up={'cap'} size={18} />
        <Text
          content={`$${element.price}`}
          weight={600}
          color={'dominant'}
          size={18}
        />
      </ContentViewMinCard>
      <CheckBoxView>
        <CheckBox checked={checked} onChange={setChecked} />
      </CheckBoxView>
    </MiniCard>
  )
}
