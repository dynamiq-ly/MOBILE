import { useState } from 'react'
import Text from 'components/text/Text'
import AreaView from '~/utils/TabAreaView'
import Input from 'components/input/Input'
import Button from 'components/button/Button'
import { TextArea } from 'components/input/Input'
import { __query } from '~/hooks/useApi'
import { useMutation } from 'react-query'

export default function RoomRequestScreen() {
  const [formRequest, setFormRequest] = useState({
    room_request_title: '',
    room_request_content: '',
    room_request_room_number: 'A12',
    isAnsewred: false,
  })

  const handleRequestFormChange = (binding, event) => {
    setFormRequest({ ...formRequest, [binding]: event })
  }

  const { mutate, isLoading, isSuccess } = useMutation(createRoomRequest)

  return (
    <AreaView>
      <Text size={16} content={'if you want to request something about the room or suite you are staying in please throughly fill in information.'} />
      <Input value={formRequest.title} placeholder={'title of request'} onChangeText={(text) => handleRequestFormChange('room_request_title', text)} />
      <TextArea value={formRequest.content} placeholder={'content of request'} icon={'ri-message-line'} onChangeText={(text) => handleRequestFormChange('room_request_content', text)} />
      <Button
        title={isLoading ? 'loading...' : 'Request'}
        onPress={() => {
          mutate(formRequest)
          if (isSuccess) {
            setFormRequest({
              room_request_title: '',
              room_request_content: '',
              room_request_room_number: 'A12',
              isAnsewred: false,
            })
          }
        }}
      />
    </AreaView>
  )
}

const createRoomRequest = function (data) {
  return __query.post('/api/room-request', data)
}
