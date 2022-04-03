import { Styles } from './FilterTransaction.types'
import { Colors } from '../../Constants'

const styles: Styles = {
  containerModal: {
    flex: 1,
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentModal: {
    width: '95%',
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10
  },
  containerButtonClose: {
    alignItems: 'flex-end',
    marginBottom: 10
  },
  containerButtonFilter: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  textButtonFilter: {
    marginLeft: 10,
  }
}

export default styles
