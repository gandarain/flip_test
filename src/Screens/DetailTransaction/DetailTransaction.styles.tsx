import { Styles } from './DetailTransaction.types'
import { Colors } from '../../Constants'

const styles: Styles = {
  container: {
    width: '100%',
    backgroundColor: Colors.WHITE
  },
  containerId: {
	  marginTop: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: Colors.BORDER
  },
  containerDetail: {
    marginTop: 10,
    padding: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.BORDER
  },
  containerListItem: {
    marginBottom: 10,
    marginHorizontal: 10
  },
  containerBank: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  containerIconRight: {
    marginHorizontal: 5
  },
  containerName: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentWidth: {
    width: '60%'
  },
  subContentWidth: {
    width: '40%'
  }
}

export default styles
