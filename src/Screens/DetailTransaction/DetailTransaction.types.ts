import type { ViewStyle } from 'react-native'

import { Props as TransactionItem } from '../../Components/TransactionItem/TransactionItem.types'

export interface Props {
  route: {
    key: string
    name: string
    params: TransactionItem
    path: string | null
  }
}

export interface Styles {
  container: ViewStyle
  containerId: ViewStyle
  containerDetail: ViewStyle
  containerListItem: ViewStyle
  containerBank: ViewStyle
  containerIconRight: ViewStyle
  containerName: ViewStyle
  contentWidth: ViewStyle
  subContentWidth: ViewStyle
}
