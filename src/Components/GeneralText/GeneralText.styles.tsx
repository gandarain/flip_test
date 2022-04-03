import type { TextStyle } from 'react-native'

const styles = {
  title: (color: string, variant: string, size: number): TextStyle => ({
    fontFamily: variant,
    fontSize: size,
    color,
  }),
}

export default styles
