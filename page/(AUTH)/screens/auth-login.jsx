/* packages */
import { View, ImageBackground } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

/* components */
import { Icon } from '@/components'
import { Button, Image, Input } from '@/common'

/* styles */
import { useTheme } from 'styled-components'
import { shadow } from '@/util/shadow'

export default ({ navigation }) => {
  const theme = useTheme()
  const { top, bottom } = useSafeAreaInsets()

  return (
    <ImageBackground source={require('@/assets/images/background.png')} style={{ flex: 1, paddingHorizontal: theme.units.sb, paddingBottom: bottom, paddingTop: top }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: theme.units.sb }}>
        <Image source={require('@/assets/logo/h-logo.png')} width='90px' height='50px' contentFit='contain' />
        <Icon icon={require('@/assets/icons/product/monocrome/qrcode-dark.png')} size={21} />
      </View>

      <View style={{ flex: 1, gap: theme.units.md, justifyContent: 'center' }}>
        <View style={{ ...stylesInput }}>
          <Input placeholder='email' label='email' />
        </View>
        <View style={{ ...stylesInput }}>
          <Input placeholder='password' label='password' />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', gap: theme.units.sm }}>
        <Button background='primary' h={42} shadowColor={'info'} iconRight='send'>
          login
        </Button>
        <Button background='secondary' style={{ backgroundColor: 'transparent', borderWidth: 0 }} h={42} onPress={() => navigation.navigate('[stack] stack-home')}>
          skip this step
        </Button>
      </View>
    </ImageBackground>
  )
}

const stylesInput = {
  padding: 10,
  borderRadius: 10,
  backgroundColor: '#fffffe',
  ...shadow(),
}
