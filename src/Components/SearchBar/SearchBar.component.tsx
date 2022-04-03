import React from 'react'
import {
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {
  GeneralText,
} from '../../Components'
import config from './SearchBar.config'
import styles from './SearchBar.styles'
import { Fonts, Colors } from '../../Constants'
import { Props } from './SearchBar.types'

/**
 * SearchBar
 * @param {Props} props - props
 * @returns {React.FC<Props>} SearchBar
 * @constructor
 */
const SearchBar: React.FC<Props> = (props: Props): JSX.Element => (
  <View style={styles.containerSearch}>
    <View style={styles.containerTextInput}>
      <AntDesign name="search1" size={Fonts.SIZE.LARGE} color={Colors.BLACK} />
      <TextInput
        placeholder="Cari nama, bank atau nominal"
        style={styles.textInput}
        onChangeText={(value) => props.onChangeValue(value)}
        value={props.value}
      />
    </View>
    <TouchableOpacity
      onPress={() => props.setShowFilterModal()}
      style={styles.containerSort}
    >
      <GeneralText
        title="URUTKAN "
        color={Colors.ORANGE}
        variant={Fonts.VARIANT.BOLD}
        size={Fonts.SIZE.SMALL}
      />
      <AntDesign name="down" size={Fonts.SIZE.LARGE} color={Colors.ORANGE} />
    </TouchableOpacity>
  </View>
)

SearchBar.defaultProps = config.defaultProps
SearchBar.displayName = config.displayName

export default SearchBar
