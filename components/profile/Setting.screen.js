import AreaView from 'utils/TabAreaView'

import { LogoutButton } from './Profile.screen'
import { __auth } from 'store/AuthSusbcribeProvider'

export default function SettingScreen({ navigation }) {
  const { isLoggedIn } = __auth()

  return (
    <AreaView>
      {action_buttons.map((el, key) => (
        <LogoutButton
          key={key}
          title={el.title}
          icon={el.icon}
          func={() => navigation.navigate(el.path)}
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
    path: '',
  },
  {
    title: 'languages',
    icon: 'earth',
    path: 'menu-tab-stack-setting-language',
  },
  {
    title: 'Privacy & cookies',
    icon: 'chat-private',
    path: '',
  },
  {
    title: 'contact us',
    icon: 'customer-service-2',
    path: '',
  },
]
