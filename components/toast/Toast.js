import Text from 'components/text/Text'
import { StyledToast } from 'styles/toast.module'
import { useSpring } from '@react-spring/native'

export default function Toast({ contet = '' }) {
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  return (
    <StyledToast style={{ ...styles }}>
      <Text
        content={contet}
        align={'center'}
        color={'white'}
        weight={500}
        up={'cap'}
        size={16}
      />
    </StyledToast>
  )
}
