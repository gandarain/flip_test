import React from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { GeneralText } from '../../Components'
import { TrxStatus, Colors, Fonts } from '../../Constants'
import { Props } from './TransactionItem.types'
import Utils from '../../Utils'
import config from './TransactionItem.config'
import styles from './TransactionItem.styles'

const {
  String: { generateBankName },
  Date: { getDayFormatted },
  Fee: { convertToRupiah }
} = Utils

/**
 * renderBankInfo
 * @param {Props} props - props
 * @returns {JSX.Element} bank info
 * @private
 */
const renderBankInfo = (props: Props): JSX.Element => (
  <View style={styles.containerBank}>
    <GeneralText
      title={generateBankName(props.sender_bank)}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
    <View style={styles.containerIconRight}>
      <FontAwesome name="arrow-right" size={Fonts.SIZE.LARGE} color={Colors.BLACK} />
    </View>
    <GeneralText
      title={generateBankName(props.beneficiary_bank)}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
  </View>
)

/**
 * renderFeeDate
 * @param {Props} props - props
 * @returns {JSX.Element} fee date
 * @private
 */
const renderFeeDate = (props: Props): JSX.Element => (
  <View style={styles.containerDatePrice}>
    <GeneralText
      title={convertToRupiah(props.amount)}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.SEMI_BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
    <View style={styles.containerIconCircle}>
      <EntypoIcon name="dot-single" size={Fonts.SIZE.LARGE} color={Colors.BLACK} />
    </View>
    <GeneralText
      title={getDayFormatted(props.created_at)}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.SEMI_BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
  </View>
)

/**
 * renderStatus
 * @param {Props} props - props
 * @returns {JSX.Element} status
 * @private
 */
const renderStatus = (props: Props): JSX.Element => (
  <View style={styles.containerSubtitle}>
    <View style={styles.subtitle(TrxStatus[props.status].BACKGROUND, TrxStatus[props.status].BORDER)}>
      <GeneralText
        title={TrxStatus[props.status].TITLE}
        color={TrxStatus[props.status].FONT}
        variant={Fonts.VARIANT.BOLD}
        size={Fonts.SIZE.SMALL}
      />
    </View>
  </View>
)

/**
 * TransactionItem
 * @param {Props} props - props
 * @returns {React.FC} Transaction Item
 * @constructor
 */
const TransactionItem: React.FC<Props> = (props: Props): JSX.Element => (
  <TouchableOpacity onPress={() => props.onPress()} activeOpacity={0.7} style={styles.containerItem}>
    <View style={styles.subContainerItem}>
      <View style={styles.containerColor(TrxStatus[props.status].LEFT_BACKGROUND)} />
      <View style={styles.contentItem}>
        <View style={styles.contentTitle}>
          {renderBankInfo(props)}
          <GeneralText
            title={props.beneficiary_name.toUpperCase()}
            color={Colors.BLACK}
            variant={Fonts.VARIANT.SEMI_BOLD}
            size={Fonts.SIZE.MEDIUM}
          />
          {renderFeeDate(props)}
        </View>
        {renderStatus(props)}
      </View>
    </View>
  </TouchableOpacity>
)

TransactionItem.defaultProps = config.defaultProps
TransactionItem.displayName = config.displayName

export default TransactionItem
