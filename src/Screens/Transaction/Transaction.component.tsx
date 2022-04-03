import React, { useState, useEffect } from 'react'
import {
  View,
  FlatList,
  Text
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Wrapper,
  TransactionItem,
  FilterTransaction,
  SearchBar
} from '../../Components'
import Services from '../../Services'
import { TransactionList, State } from './Transaction.types'
import { FilterTransactionItem } from '../../Components/FilterTransaction/FilterTransaction.types'
import { VoidFunction } from '../../index.types'
import config from './Transaction.config'
import styles from './Transaction.styles'
import Utils from '../../Utils'
import Routes from '../../Navigation/Routes'

const { TransactionServices } = Services
const { Transaction: {
  searchTransaction,
  sortingTransaction,

} } = Utils

/**
 * getTransactionList
 * @param {State} state - state
 * @returns {Promise<void>} promise = promise
 * @private
 */
const getTransactionList = async (state: State): Promise<void> => {
  try {
    const response = await TransactionServices.GetTransactions()
    state.setTrxList(response)
    state.setLoading(false)
  } catch (error) {
    state.setTrxList({})
    state.setLoading(false)
  }
}

/**
 * onRefresh
 * @param {State} state - state
 * @returns {VoidFunction} promise = promise
 * @private
 */
const onRefresh = (state: State): VoidFunction => (): void => {
  state.setLoading(true)
  state.setTrxList({})
  getTransactionList(state)
}

/**
 * renderTrxList
 * @param {State} state -state
 * @returns {JSX.Element} props - props
 * @private
 */
const renderTrxList = (state: State): JSX.Element => {
  const { loading, trxList } = state
  return (
    <FlatList
      refreshing={loading}
      showsVerticalScrollIndicator={false}
      data={Object.keys(trxList)}
      renderItem={({ item }) => (
        <View style={styles.containerListItem}>
          <TransactionItem
            {...trxList[item]}
            onPress={() => state.navigation.navigate(
              Routes.DETAIL_TRANSACTION, trxList[item])
            }
          />
        </View>
      )}
      keyExtractor={item => trxList[item].id}
      onRefresh={onRefresh(state)}
    />
  )
}

/**
 * renderTrxList
 * @param {State} state -state
 * @returns {JSX.Element} props - props
 * @private
 */
const renderSearch = (state: State): JSX.Element => (
  <SearchBar
    value={state.search}
    onChangeValue={(value) => {
      state.setSearch(value)
      if (value === '') state.setFilter(null)
    }}
    setShowFilterModal={() => state.setShowFilterModal(true)}
  />
)

/**
 * _useSearchHooks
 * @param {State} state = state
 * @returns {void} _useSearchHooks - _useSearchHooks
 * @private
 */
const _useSearchHooks = (state: State): void => {
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (state.filter?.method) {
        const filterTransaction = sortingTransaction(state.trxList, state.filter)
        state.setTrxList(filterTransaction)
      } else if (state.search) {
        const filterTransaction = searchTransaction(state.trxList, state.search)
        state.setTrxList(filterTransaction)
      } else {
        getTransactionList(state)
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.search, state.filter])
}

/**
 * _getState
 * @returns {State} State = State
 * @private
 */
const _getState = (): State => {
  const [trxList, setTrxList] = useState<TransactionList | {}>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false)
  const [filter, setFilter] = useState<FilterTransactionItem | null>(null)
  const navigation = useNavigation()

  return {
    trxList,
    setTrxList,
    loading,
    setLoading,
    search,
    setSearch,
    showFilterModal,
    setShowFilterModal,
    filter,
    setFilter,
    navigation
  }
}

/**
 * Transaction
 * @returns {React.FC} props = props
 * @constructor
 */
const Transaction: React.FC = (): JSX.Element => {
  const state = _getState()

  _useSearchHooks(state)

  return (
    <React.Fragment>
      <Wrapper>
        <View style={styles.container}>
          {renderSearch(state)}
          {renderTrxList(state)}
        </View>
      </Wrapper>
      <FilterTransaction
        showFilterModal={state.showFilterModal}
        onClose={() => state.setShowFilterModal(false)}
        onPressFilterItem={(item) => {
          state.setShowFilterModal(false)
          state.setFilter(item)
        }}
        selectedFilter={state.filter}
      />
    </React.Fragment>
  )
}

Transaction.defaultProps = config.defaultProps
Transaction.displayName = config.displayName

export default Transaction
