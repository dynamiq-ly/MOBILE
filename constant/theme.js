export const theme = {
  core: {
    neutral: { 100: '#FFFFFE', 500: '#2353D9', 900: '#151718' },

    text: {
      variant_main: '#121212',
      variant_sub: '#5F6C7B',
      variant_small: '#AFAFAF',
      variant_error: '#F53535',
      variant_success: '#14AD4D',
      variant_warning: '#FFAB1F',
      variant_info: '#2353D9',
      variant_neutral: '#FFFFFE',
    },

    background: {
      variant_view: '#F3F4F6',
      variant_container: '#FFFFFE',
      variant_error: '#FFC9C9',
      variant_success: '#C1F4D4',
      variant_warning: '#FFE9BA',
      variant_info: '#BEE4FF',
      variant_tag: '#F6F6F6',
    },

    button: {
      variant_neutral: '#121212',
      variant_primary: '#2353D9',
      variant_secondary: '#FFFFFE',
      variant_error: '#F75656',
      variant_success: '#3BBA6A',
      variant_warning: '#FFB945',
      variant_info: '#48AFFA',
      variant_tag: '#F6F6F6',
    },
  },

  fontSize: (x) => `${x * 2}px`,
  fontFamily: (s) => `Helvetica-${s}`,

  fontWeight: {
    lg: 'Light',
    rg: 'Regular',
    md: 'Medium',
    bd: 'Bold',
  },

  radius: {
    sm: '5px',
    md: '10px',
    lg: '20px',
    rounded: '500px',
  },

  gap: {
    sm: '5px',
    md: '10px',
    sb: '14px',
    lg: '24px',
  },

  padding: {
    sm: '4px',
    md: '8px',
    sb: '12px',
    lg: '16px',
  },

  units: {
    sm: 5,
    md: 10,
    sb: 14,
    lg: 24,
  },
}
