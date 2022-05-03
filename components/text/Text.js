import { StyledText } from 'styles/text.module'

/**
 * @param0 {string} content
 * @param1 {number} size
 * @param2 {number} font
 * @param3 { "white" | "gray" } color
 * @param4 {string} align
 * @param5 {boolean} up
 */
export default function Text({
  content,
  size,
  weight,
  color,
  align,
  up = false,
}) {
  return (
    <StyledText scale={size} font={weight} color={color} up={up} align={align}>
      {content}
    </StyledText>
  )
}
