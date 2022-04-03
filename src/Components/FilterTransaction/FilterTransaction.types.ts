import type { ViewStyle } from 'react-native'

export interface FilterTransactionItem {
  id: number
  title: string
  key: string
  method: string
}

export interface Props {
  showFilterModal: boolean
  onPressFilterItem: (item: FilterTransactionItem) => void
  onClose: () => void
  selectedFilter: FilterTransactionItem | null
}

export interface Styles {
  containerModal: ViewStyle
  contentModal: ViewStyle
  containerButtonClose: ViewStyle
  containerButtonFilter: ViewStyle
  textButtonFilter: ViewStyle
}
