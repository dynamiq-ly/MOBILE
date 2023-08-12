/* packages */
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

/* components */
import { Icon } from '@/components'
import { Iconly, Text } from '@/common'

/* styles */
import { shadow } from '@/util/shadow'
import { StyledSafeHeader, StyledHeader, StyledBox, StyledTitle } from '@/style/header.style'
import { Pressable } from 'react-native'

const StackHeader = ({ title = '(stack) header', background = 'container', iconLeft, iconLeftParams, iconRight, iconRightParams }) => {
  const { top } = useSafeAreaInsets()
  const { navigate, goBack, dispatch } = useNavigation()

  return (
    <StyledSafeHeader background={background} style={[background !== 'view' && { ...shadow() }, { paddingTop: top }]}>
      <StyledHeader>
        {/* if iconLeftParam is not available in will redirect to else and the function will get invoket once  */}
        {iconLeftParams ? (
          <StyledBox align={true} onPress={() => (iconLeft && iconLeftParams.func ? iconLeftParams.func : dispatch(DrawerActions.toggleDrawer()))}>
            {iconLeft}
          </StyledBox>
        ) : (
          <StyledBox align={true} onPress={() => iconLeft && goBack()}>
            {iconLeft}
          </StyledBox>
        )}
        {/* here we test on type so we can add component instead of text {check typing below} */}
        <StyledTitle>
          {typeof title === 'string' ? (
            <Text size={8.5} weight='md' t={'capitalize'} color='main' align={'center'}>
              {title}
            </Text>
          ) : (
            title
          )}
        </StyledTitle>
        <StyledBox align={false} onPress={() => (iconRight && iconRightParams.func ? iconRightParams.fun : navigate(iconRightParams.path, iconRightParams.param))}>
          {iconRight}
        </StyledBox>
      </StyledHeader>
    </StyledSafeHeader>
  )
}

const OptionHeader = ({ menu = false, heart = { active: false, func: () => {} }, share = { active: false, func: () => {} } }) => {
  const { top } = useSafeAreaInsets()
  const { goBack } = useNavigation()

  const styling = { height: 42, width: 42, alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212', borderRadius: 99999 }

  return (
    <View style={{ paddingTop: top, position: 'absolute', width: '100%' }}>
      <StyledHeader>
        <Pressable onPress={() => goBack()} style={{ ...styling }}>
          {menu ? <Icon icon={require('@/assets/icons/product/monocrome/menu-light.png')} size={18} /> : <Icon icon={require('@/assets/icons/product/monocrome/arrow-back-light.png')} size={18} />}
        </Pressable>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {heart.active && (
            <Pressable style={{ ...styling }} onPress={heart.func}>
              <Icon icon={require('@/assets/icons/product/monocrome/heart-light.png')} size={18} />
            </Pressable>
          )}
          {share.active && (
            <Pressable style={{ ...styling }} onPress={share.func}>
              <Icon icon={require('@/assets/icons/product/monocrome/share-light.png')} size={18} />
            </Pressable>
          )}
        </View>
      </StyledHeader>
    </View>
  )
}

StackHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  /**
   * @this READ BEFORE USING
   * both there property should be defined in order to work
   * this is the correct definition
   * @description {path: '', param: '', func: undefined}
   * the key fun can hold a function that can be triggered or be defined to allow to navigation props to be dispatched
   */
  iconLeftParams: PropTypes.object,
  iconRightParams: PropTypes.object,
  /* ***************************** */
  background: PropTypes.oneOf(['view', 'container', 'error', 'success', 'warning', 'info', 'tag']),
}

OptionHeader.propTypes = {
  menu: PropTypes.bool,
  heart: PropTypes.object,
  share: PropTypes.object,
}

export { StackHeader, OptionHeader }
