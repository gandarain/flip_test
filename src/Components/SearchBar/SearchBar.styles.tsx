import { Styles } from './SearchBar.types'
import { Colors, Fonts } from '../../Constants'

const styles: Styles = {
  containerSearch: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
  },
  containerTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%'
  },
  textInput: {
    marginLeft: 10,
    paddingVertical: 5,
    fontSize: Fonts.SIZE.MEDIUM,
    fontFamily: Fonts.VARIANT.REGULAR
  },
  containerSort: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '30%'
  }
}

export default styles
