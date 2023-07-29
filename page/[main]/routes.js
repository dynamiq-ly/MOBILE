/* components */
import { Image } from '@/common'
import { Icon } from '@/components'
import { View } from 'react-native'
import { CustomHomeHeader } from '@/components'

/* screens */
import { Landing } from '@/page/[main]/screens'

export const HomeLandingRoutesConfig = [
  (initial = {
    id: '[tab] stack-home',
    name: 'home',
    icon: 'home',
    component: Landing,
    option: {
      headerShown: true,
      headerTitle: 'Home',
      header: () => (
        <CustomHomeHeader
          title={
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('@/assets/logo/h-logo-light.png')} contentFit={'contain'} height='24px' alt='utells logo' />
            </View>
          }
          background='container'
          iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/menu-light.png')} size={18} />}
          iconRight={<Icon icon={require('@/assets/icons/product/monocrome/qrcode-light.png')} size={18} />}
          iconLeftParams={{ path: '', param: '', func: undefined }}
          iconRightParams={{ path: '', param: '', func: () => {} }}
        />
      ),
    },
  }),
]
