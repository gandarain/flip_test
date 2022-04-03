import { ViewStyle } from 'react-native'
import { Colors } from '../../Constants'
import { Styles } from './TransactionItem.types'

const styles: Styles = {
  containerItem: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5
  },
  subContainerItem: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    overflow: 'hidden'
  },
  containerColor: (color: string): ViewStyle => ({
    width: '2%',
    backgroundColor: color
  }),
  contentItem: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentTitle: {
    width: '60%',
  },
  containerSubtitle: {
    maxWidth: '40%'
  },
  subtitle: (background: string, border: string): ViewStyle => ({
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: border ? 1 : 0,
    borderRadius: 5,
    backgroundColor: background,
    borderColor: border
  }),
  containerBank: {
    flexDirection: 'row',
    paddingBottom: 5,
    flexWrap: 'wrap'
  },
  containerIconRight: {
    marginHorizontal: 5
  },
  containerDatePrice: {
    flexDirection: 'row',
    paddingTop: 5,
    flexWrap: 'wrap'
  },
  containerIconCircle: {
    marginHorizontal: 1
  }
}

export default styles
