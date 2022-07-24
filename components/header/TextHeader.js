import Text from 'components/text/Text'
import { SafeAreaHeader, ViewHeader } from 'styles/header.module'

/**
 * @param {string} name
 */

export default function TextHeader({ name }) {
  return (
    <SafeAreaHeader>
      <ViewHeader>
        <Text content={name} weight={600} up={'cap'} size={21} />
      </ViewHeader>
    </SafeAreaHeader>
  )
}
