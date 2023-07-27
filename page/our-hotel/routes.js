/* components */
import { Icon } from '@/components'
import { OptionHeader, StackHeader } from '@/shared'

/* screens */
import { AboutHotel, OurHotel } from '@/page/our-hotel/screens'

export const OurHotelsRoutesConfig = [
  (initial = {
    id: '[stack] stack-about-hotel',
    component: AboutHotel,
    option: {
      headerShown: true,
      headerTitle: 'About Hotel',
      header: () => <OptionHeader menu />,
    },
  }),
  (ourHotel = {
    id: '[stack] stack-hotels',
    component: OurHotel,
    option: {
      headerShown: true,
      headerTitle: 'Our Hotel',
      header: () => <StackHeader title='Our Hotel' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
