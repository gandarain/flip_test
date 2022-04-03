import type { ViewStyle } from 'react-native'

import { EnumStatus } from '../../Constants'

export interface Props {
  id: string
  amount: number
  unique_code: number
  status: EnumStatus
  sender_bank: string
  account_number: string
  beneficiary_name: string
  beneficiary_bank: string
  remark: string
  created_at: string
  completed_at: string
  fee: number
  onPress: () => void
}

export interface Styles {
  containerItem: ViewStyle;
  subContainerItem: ViewStyle;
  containerColor: (color: string) => ViewStyle;
  contentItem: ViewStyle;
  contentTitle: ViewStyle;
  containerSubtitle: ViewStyle;
  subtitle: (background: string, border: string) => ViewStyle;
  containerBank: ViewStyle;
  containerIconRight: ViewStyle;
  containerDatePrice: ViewStyle;
  containerIconCircle: ViewStyle
}
