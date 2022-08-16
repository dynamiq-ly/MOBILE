import Text from 'components/text/Text'
import { SafeAreaHeader, ViewHeader } from 'styles/header.module'

/**
 * @param {string} name
 */

export default function TextHeader({ name }) {
  return (
    <SafeAreaHeader>
      <ViewHeader>
        <Text
          style={{ letterSpacing: 1 }}
          content={name}
          weight={600}
          up={'cap'}
          size={32}
        />
      </ViewHeader>
    </SafeAreaHeader>
  )
}
