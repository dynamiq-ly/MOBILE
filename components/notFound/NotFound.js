import Text from 'components/text/Text'
import LottieView from 'lottie-react-native'

import { StyledNotFoundWrapper } from 'styles/notfound.module'

/**
 * @param0 {boolean} killProcess
 * @returns
 */
export default function NotFound({ killProcess = false }) {
  return (
    <StyledNotFoundWrapper>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{ width: 175, height: 175 }}
        source={require('assets/lottie/notfound_animation.json')}
      />
      {killProcess && (
        <>
          <Text content={'oops!'} weight={700} size={24} up={'up'} />
          <Text
            align={'center'}
            content={
              'fetching your data is taking longer than expected, this may be due to server latency or network issues'
            }
            color={'gray'}
          />
        </>
      )}
    </StyledNotFoundWrapper>
  )
}
