import React from 'react'
import { Text } from 'react-native'

import config from './GeneralText.config'
import { Props } from './GeneralText.types'
import styles from './GeneralText.styles'

/**
 * GeneralText
 * @param {Props} props - props
 * @return {JSX.Element} - GeneralText Component
 * @constructor
 */
const GeneralText: React.FC<Props> = ({
  title,
  color,
  variant,
  size,
}: Props): JSX.Element => (
  <Text style={ styles.title(color, variant, size) }>{ title }</Text>
)

GeneralText.displayName = config.displayName
GeneralText.defaultProps = config.defaultProps

export default GeneralText
