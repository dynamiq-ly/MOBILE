/* packages */
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import PagerView from 'react-native-pager-view'

/* components */
import { Image, Text } from '@/common'

/* styles */

const Pager = ({ slider = undefined, interval = 2500 }) => {
  const [indexPage, setIndexPage] = useState(0)
  const viewPagerRef = useRef(null)

  useEffect(() => {
    const timings = setInterval(() => {
      setIndexPage((prevIndexPage) => (prevIndexPage + 1) % slider.length)
      viewPagerRef.current.setPage(indexPage)
    }, interval)

    return () => clearInterval(timings)
  }, [indexPage, slider])

  return (
    <View style={{ height: 254 }}>
      <PagerView style={{ flex: 1 }} ref={viewPagerRef} initialPage={0} scrollEnabled>
        {slider &&
          slider.map((el) => (
            <View style={{ flex: 1 }} key={el.id}>
              <Image source={el.image} height='254px' />
            </View>
          ))}
      </PagerView>
    </View>
  )
}

Pager.propTypes = {
  slider: PropTypes.arrayOf(PropTypes.object).isRequired,
  interval: PropTypes.number,
}

export default Pager
