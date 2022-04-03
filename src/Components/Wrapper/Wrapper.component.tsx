import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import { Colors } from '../../Constants'
import type { Props } from './Wrapper.types'
import config from './Wrapper.config'
import styles from './Wrapper.styles'

/**
 * Wrapper
 * @param {Props} props - props
 * @returns {React.FC<Props>} - Component
 * @constructor
 */
const Wrapper: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <StatusBar animated={true} backgroundColor={Colors.STATUS_BAR} />
    {children}
  </SafeAreaView>
)

Wrapper.displayName = config.displayName
Wrapper.defaultProps = config.defaultProps

export default Wrapper
