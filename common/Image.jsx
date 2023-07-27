/* packages */
import PropTypes from 'prop-types'

/* styles */
import { StyledImage, StyledImageView } from '@/common/ui/image.ui'

const Image = ({ source = undefined, alt, contentFit = 'cover', width = '100%', height = '100%', radii = 'none', ...rest }) => {
  return (
    <StyledImageView width={width} height={height} activeOpacity={0.8} radii={radii} {...rest}>
      <StyledImage source={source ? source : require('@/assets/images/placeholder-image.png')} alt={alt} contentFit={contentFit} />
    </StyledImageView>
  )
}

Image.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  contentFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  radii: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'rounded']),
}

export default Image
