import AreaView from 'utils/TabAreaView'

import { lang } from 'lang/lang.i18n'
import { __t } from 'store/LocalizationProvider'
import { LogoutButton } from '../Profile.screen'

const LanguageScreen = () => {
  const { changeLangauge, local } = __t()

  const t = (key) => {
    const translation = lang[local][key]
    if (!translation) {
      return key
    }
    return translation
  }

  return (
    <AreaView>
      {lang_list.map((el, key) => (
        <LogoutButton
          key={key}
          icon={'book-3'}
          title={t(el.name)}
          func={() => changeLangauge(el.local)}
        />
      ))}
    </AreaView>
  )
}

export default LanguageScreen

export const lang_list = [
  {
    name: 'english',
    local: 'en',
  },
  {
    name: 'french',
    local: 'fr',
  },
  {
    name: 'spanish',
    local: 'es',
  },
]
