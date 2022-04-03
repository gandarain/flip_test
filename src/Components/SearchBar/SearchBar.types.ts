import type { ViewStyle, TextStyle } from 'react-native'

export interface Styles {
  containerSearch: ViewStyle
  containerTextInput: ViewStyle
  textInput: TextStyle
  containerSort: ViewStyle
}

export interface Props {
  value: string
  onChangeValue: (value: string) => void
  setShowFilterModal: () => void
}
