import { theme } from '@/constant/theme'

export function shadow(hex = 'main') {
  return {
    elevation: 1.25,
    shadowRadius: 1,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: theme.core.text[`variant_${hex}`],
  }
}
