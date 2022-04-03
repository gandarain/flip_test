import { Dispatch } from 'react'
import type { ViewStyle } from 'react-native'

import { Props as TransactionItem } from '../../Components/TransactionItem/TransactionItem.types'
import { FilterTransactionItem } from '../../Components/FilterTransaction/FilterTransaction.types'

export interface TransactionList {
  [key: string]: TransactionItem
}

export interface Styles {
  container: ViewStyle
  containerFlatList: ViewStyle
  containerListItem: ViewStyle
}

export interface State {
  trxList: TransactionList
  setTrxList: Dispatch<TransactionList>
  loading: boolean
  setLoading: Dispatch<boolean>
  search: string
  setSearch: Dispatch<string>
  showFilterModal: boolean,
  setShowFilterModal: Dispatch<boolean>
  filter: FilterTransactionItem | null,
  setFilter: Dispatch<FilterTransactionItem | null>
  navigation: {
    navigate: (route: string, params: {}) => void
  }
}
