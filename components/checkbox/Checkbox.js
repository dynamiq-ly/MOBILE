import Icon from 'react-native-remix-icon'
import { IsPressable } from 'styles/checkbox.module'

export default function CheckBox({ checked = false, onChange }) {
  return (
    <IsPressable isSelected={checked} onPress={() => onChange(!checked)}>
      <Icon name='ri-check-line' size={16} color={checked && '#fff'} />
    </IsPressable>
  )
}
