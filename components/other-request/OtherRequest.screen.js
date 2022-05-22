import { useState } from 'react'
import Text from 'components/text/Text'
import AreaView from '~/utils/TabAreaView'
import Input from 'components/input/Input'
import Button from 'components/button/Button'
import { TextArea } from 'components/input/Input'

export default function OtherRequestScreen() {
  const [formRequest, setFormRequest] = useState({
    title: '',
    content: '',
  })

  const handleRequestFormChange = (binding, event) => {
    setFormRequest({ ...formRequest, [binding]: event })
  }

  return (
    <AreaView>
      <Text
        size={16}
        content={
          'It is hard to cover up all the services needed so you request anything you do not find in our menu from here.'
        }
      />
      <Input
        value={formRequest.title}
        placeholder={'title of request'}
        onChangeText={(text) => handleRequestFormChange('title', text)}
      />
      <TextArea
        value={formRequest.content}
        placeholder={'content of request'}
        icon={'ri-message-line'}
        onChangeText={(text) => handleRequestFormChange('content', text)}
      />
      <Button title={'inform us'} />
    </AreaView>
  )
}
