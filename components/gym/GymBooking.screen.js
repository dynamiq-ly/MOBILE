import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Input from 'components/input/Input'
import Button from 'components/button/Button'

import { Image } from 'styles/image.module'
import { ButtonWrapperDetail, View } from 'styles/detail.module'

export default function GymBookingScreen() {
  return (
    <View>
      <AreaView>
        <Image
          source={{
            uri: 'https://live-production.wcms.abc-cdn.net.au/084295b44a23e9f351ebf0590637836f?impolicy=wcms_crop_resize&cropH=827&cropW=1470&xPos=0&yPos=45&width=862&height=485',
          }}
        />
        <Text
          content={'stay fit and healthy'}
          weight={600}
          up={'cap'}
          size={24}
        />
        <Text
          content={
            'due to panedamic and following covid-19 protocols it is mandatory to book a session.'
          }
          color={'gray'}
          weight={400}
          size={16}
        />
        <Input icon={'ri-calendar-line'} placeholder={'select date'} />
        <Input icon={'ri-time-line'} placeholder={'select time'} />
        <Input icon={'ri-timer-line'} placeholder={'select duration'} />
      </AreaView>
      <ButtonWrapperDetail>
        <Button title={'Confirm session'} />
      </ButtonWrapperDetail>
    </View>
  )
}
