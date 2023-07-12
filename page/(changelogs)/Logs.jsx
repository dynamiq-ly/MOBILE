import { useState } from 'react'
import { Alert, View } from 'react-native'

import { Container } from '@/shared'
import { Button, Div, Iconly, Image, Input, Loader, Text } from '@/common'

export default ({ navigation }) => {
  const [value, setValue] = useState(null)

  return (
    <Container gap='sb'>
      <Text size={14}>Heading 1</Text>
      <Text size={12}>Heading 2</Text>
      <Text size={10}>Heading 3</Text>
      <Text size={8}>Heading 4</Text>
      <Text size={6}>Heading 5</Text>

      <Text color='sub' align='justify' weight='rg' turncate={3} t='lowercase' size={8}>
        This is a very long text that will overflow on a small device This is a very long text that will overflow on a small device This is a very long text that will overflow on a small deviceThis is
        a very long text that will overflow on a small device.
      </Text>

      <Input value={value} onChange={setValue} />
      <Input hint='This is a hint example' filled multiline rows={2} value={value} onChange={setValue} label='label' maxLength={24} />
      <Input hint='This is a hint example' value={value} onChange={setValue} label='label' maxLength={24} />

      <Image height={'200px'} contentFit='cover' />

      <View style={{ flexDirection: 'row', gap: 15 }}>
        <Button background='neutral' h={36} onPress={() => Alert.alert('this has been clicked')}>
          neutral
        </Button>
        <Button background='secondary' h={36} iconLeft='arrow-left'>
          secondary
        </Button>
        <Button background='error' h={36}>
          error
        </Button>
      </View>

      <View style={{ flexDirection: 'row', gap: 14 }}>
        <Button background='primary' h={36} onPress={() => navigation.navigate('Stack-Components')}>
          primary
        </Button>
        <Button background='success' h={36} iconRight='bell'>
          success
        </Button>
        <Button background='warning' h={36}>
          warning
        </Button>
      </View>

      <Div radii={'md'} title='header box' button='pressable' filled>
        <Text turncate={2} size={7}>
          this is a good example we can test our application with it to see if it does turncate or not ! and i seems it does works fine. ia glad it did work.
        </Text>
      </Div>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Iconly name='arrow-left' background='warning' />
        <Iconly name='heart' background='neutral' onPress={() => Alert.alert('this item has been clicked')} />
        <Iconly name='share-2' background='error' />
        <Iconly name='box' background='secondary' />
        <Iconly name='airplay' background='primary' />
      </View>

      <Div radii={'md'} title='header box' button='pressable' filled>
        <Text turncate={2} size={7}>
          this is a good example we can test our application with it to see if it does turncate or not ! and i seems it does works fine. ia glad it did work.
        </Text>
      </Div>

      {/* <Loader /> */}
    </Container>
  )
}
