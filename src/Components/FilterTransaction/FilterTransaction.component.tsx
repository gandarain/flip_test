import React from 'react'
import {
  View,
  TouchableOpacity,
  Modal
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { GeneralText } from '../../Components'
import { Props, FilterTransactionItem } from './FilterTransaction.types'
import config from './FilterTransaction.config'
import styles from './FilterTransaction.styles'
import { Fonts, Colors, FilterTransaction as FilterTransactionConstant } from '../../Constants'

/**
 * renderFilterItem
 * @param {FilterTransactionItem} item -item
 * @param {number} index -index
 * @param {Props} props -props
 * @returns {JSX.Element} props - props
 * @private
 */
const renderFilterItem = (
  item: FilterTransactionItem,
  index: number,
  props: Props
): JSX.Element => (
  <TouchableOpacity
    key={index}
    style={styles.containerButtonFilter}
    onPress={() => props.onPressFilterItem(item)}
  >
    <FontAwesome
      name={props.selectedFilter === item ? 'dot-circle-o' : 'circle-o'}
      size={Fonts.SIZE.LARGE}
      color={Colors.ORANGE}
    />
    <View style={styles.textButtonFilter}>
      <GeneralText
        title={item.title}
        color={Colors.ORANGE}
        variant={Fonts.VARIANT.BOLD}
        size={Fonts.SIZE.MEDIUM}
      />
    </View>
  </TouchableOpacity>
)

/**
 * renderFilter
 * @param {Props} props -props
 * @returns {JSX.Element} props - props
 * @private
 */
const renderFilter = (props: Props): JSX.Element => (
  <React.Fragment>
    {FilterTransactionConstant.map((item, index) => renderFilterItem(item, index, props))}
  </React.Fragment>
)

/**
 * FilterTransaction
 * @param {Props} props - props
 * @returns {React.FC} props = props
 * @constructor
 */
const FilterTransaction: React.FC<Props> = (props: Props): JSX.Element => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={props.showFilterModal}
    onRequestClose={() => props.onClose()}
  >
    <View style={styles.containerModal}>
      <View style={styles.contentModal}>
        {renderFilter(props)}
      </View>
    </View>
  </Modal>
)

FilterTransaction.defaultProps = config.defaultProps
FilterTransaction.displayName = config.displayName

export default FilterTransaction
