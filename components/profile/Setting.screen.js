import AreaView from 'utils/TabAreaView'

import { LogoutButton } from './Profile.screen'
import { __auth } from 'store/AuthSusbcribeProvider'

export default function SettingScreen() {
  const { isLoggedIn } = __auth()

  return (
    <AreaView>
      {action_buttons.map((el, key) => (
        <LogoutButton
          key={key}
          title={el.title}
          icon={el.icon}
          func={el.function}
        />
      ))}
      {isLoggedIn ? (
        <LogoutButton title={'leave feedback'} icon={'rss'} />
      ) : (
        <LogoutButton title={'leave anonym feedback'} icon={'rss'} />
      )}
    </AreaView>
  )
}

const action_buttons = [
  {
    title: 'theme',
    icon: 'toggle',
    function: () => {},
  },
  {
    title: 'languages',
    icon: 'earth',
    function: () => {},
  },
  {
    title: 'Privacy & cookies',
    icon: 'chat-private',
    function: () => {},
  },
  {
    title: 'contact us',
    icon: 'customer-service-2',
    function: () => {},
  },
]
