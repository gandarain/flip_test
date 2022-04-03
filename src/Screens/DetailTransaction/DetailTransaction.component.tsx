import React from 'react'
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {
  Wrapper,
  GeneralText
} from '../../Components'
import config from './DetailTransaction.config'
import { Props } from './DetailTransaction.types'
import { Props as TransactionItem } from '../../Components/TransactionItem/TransactionItem.types'
import { TrxStatus, Colors, Fonts } from '../../Constants'
import Utils from '../../Utils'
import styles from './DetailTransaction.styles'

const {
  String: { generateBankName },
  Date: { getDayFormatted },
  Fee: { convertToRupiah }
} = Utils

/**
 * renderBankInfo
 * @param {TransactionItem} params - params
 * @returns {JSX.Element} bank info
 * @private
 */
const renderBankInfo = (
  params: TransactionItem
): JSX.Element => (
  <View style={styles.containerBank}>
    <GeneralText
      title={generateBankName(params.sender_bank)}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
    <View style={styles.containerIconRight}>
      <FontAwesome name="arrow-right" size={Fonts.SIZE.LARGE} color={Colors.BLACK} />
    </View>
    <GeneralText
      title={generateBankName(params.beneficiary_bank)}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
  </View>
)

/**
 * renderSecondContent
 * @param {string} secondTitle - secondTitle
 * @param {string} secondValue - secondValue
 * @returns {JSX.Element} Bank Detail
 * @private
 */
const renderSecondContent = (
  secondTitle: string,
  secondValue: string
): JSX.Element => (
  <View style={styles.subContentWidth}>
    <GeneralText
      title={secondTitle}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.SEMI_BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
    <GeneralText
      title={secondValue}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.REGULAR}
      size={Fonts.SIZE.MEDIUM}
    />
  </View>
)

/**
 * renderBankDetail
 * @param {string} firstTitle - firstTitle
 * @param {string} firstValue - firstValue
 * @param {string} secondTitle - secondTitle
 * @param {string} secondValue - secondValue
 * @returns {JSX.Element} Bank Detail
 * @private
 */
const renderBankDetail = (
  firstTitle: string,
  firstValue: string,
  secondTitle?: string,
  secondValue?: string
): JSX.Element => (
  <View style={styles.containerName}>
    <View style={styles.contentWidth}>
      <GeneralText
        title={firstTitle}
        color={Colors.BLACK}
        variant={Fonts.VARIANT.SEMI_BOLD}
        size={Fonts.SIZE.MEDIUM}
      />
      <GeneralText
        title={firstValue}
        color={Colors.BLACK}
        variant={Fonts.VARIANT.REGULAR}
        size={Fonts.SIZE.MEDIUM}
      />
    </View>
    {(secondTitle && secondValue) && renderSecondContent(secondTitle, secondValue)}
  </View>
)

/**
 * renderId
 * @param {TransactionItem} params - params
 * @returns {JSX.Element} Transaction ID
 * @private
 */
const renderId = (params: TransactionItem): JSX.Element => (
  <View style={styles.containerId}>
    <GeneralText
      title={`ID TRANSAKSI: #${params.id} `}
      color={Colors.BLACK}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
  </View>
)

/**
 * renderId
 * @param {TransactionItem} params - params
 * @returns {JSX.Element} Transaction ID
 * @private
 */
const renderStatus = (params: TransactionItem): JSX.Element => (
  <View style={styles.containerDetail}>
    <GeneralText
      title="DETAIL TRANSAKSI"
      color={Colors.BLACK}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
    <GeneralText
      title={TrxStatus[params.status].TITLE}
      color={TrxStatus[params.status].LEFT_BACKGROUND}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.MEDIUM}
    />
  </View>
)

/**
 * DetailTransaction
 * @param {Props} props -props
 * @returns {React.FC<Props>} props = props
 * @constructor
 */
const DetailTransaction: React.FC<Props> = ({ route }: Props): JSX.Element => (
  <Wrapper>
    <View style={styles.container}>
      {renderId(route.params)}
      {renderStatus(route.params)}
      {renderBankInfo(route.params)}
      {renderBankDetail(
        route.params.beneficiary_name.toUpperCase(),
        route.params.account_number,
        'NOMINAL',
        convertToRupiah(route.params.amount)
      )}
      {renderBankDetail(
        'BERITA TRANSFER',
        route.params.remark,
        'KODE UNIK',
        route.params.unique_code.toString()
      )}
      {renderBankDetail(
        'WAKTU DIBUAT',
        getDayFormatted(route.params.created_at)
      )}
    </View>
  </Wrapper>
)

DetailTransaction.defaultProps = config.defaultProps
DetailTransaction.displayName = config.displayName

export default DetailTransaction
