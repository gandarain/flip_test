import { StyleSheet } from 'react-native'

import { Colors } from '../../Constants'
import type { Styles } from './Wrapper.types'

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BLUE
  },
})
