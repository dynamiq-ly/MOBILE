/* packages */
import PropTypes from 'prop-types'

/* components */
import Text from '@/common/Text'

/* styles */
import { shadow } from '@/util/shadow'
import { StyledEditField, StyledWrapper, StyledInput } from '@/common/ui/editField.ui'

const EditField = ({ label, value, onChange, placeholder = 'placeholder', hint, filled = false, rows = 1, multiline = false, maxLength, error = true }) => {
  return (
    <StyledEditField filled={filled} style={filled && { ...shadow() }}>
      <StyledWrapper>
        {label && (
          <Text size={8} weight='md' color='main' t={'capitalize'}>
            {label}
          </Text>
        )}
        {maxLength && (
          <Text size={6} weight='md' color={value ? (maxLength - value.length > 5 ? 'sub' : 'warning') : 'sub'} align='right'>
            {`${value ? value.length : 0} / ${maxLength}`}
          </Text>
        )}
      </StyledWrapper>
      <StyledInput
        multiline={multiline}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        background={filled ? 'tag' : 'container'}
        style={{ ...shadow(error && 'error') }}
      />
      {hint && (
        <StyledWrapper>
          <Text weight='md' size={6} color={error ? 'error' : 'small'}>
            {hint}
          </Text>
        </StyledWrapper>
      )}
    </StyledEditField>
  )
}

EditField.propTypes = {
  // controlls wether the container should have a background and padding or not
  filled: PropTypes.bool,

  // the value of the input
  value: PropTypes.string,
  onChange: PropTypes.func,

  // the placeholder of the input
  placeholder: PropTypes.string,

  // the hint and hint of the input
  label: PropTypes.string,
  hint: PropTypes.string,

  // the number of rows to show in the input
  rows: PropTypes.number,
  multiline: PropTypes.bool,

  // max length of the input
  maxLength: PropTypes.number,

  // error handling
  error: PropTypes.bool,
}

export default EditField
