/* components */
import { OptionHeader } from '@/shared'

/* screens */
import { AuthLogin } from '@/page/(AUTH)/screens'

export const AuthRoutesConfig = [
  (login = {
    id: '[auth] stack-auth-login',
    component: AuthLogin,
    option: {
      headerShown: false,
      headerTitle: 'Login',
      header: () => <OptionHeader />,
    },
  }),
]
