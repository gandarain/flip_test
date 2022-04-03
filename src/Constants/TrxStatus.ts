import { Colors } from '../Constants'

const TrxStatus = {
  PENDING: {
    LEFT_BACKGROUND: Colors.ORANGE,
    FONT: Colors.BLACK,
    BACKGROUND: Colors.WHITE,
    TITLE: 'Pengecekan',
    BORDER: Colors.ORANGE
  },
  SUCCESS: {
    LEFT_BACKGROUND: Colors.GREEN,
    BACKGROUND: Colors.GREEN,
    TITLE: 'Berhasil',
    BORDER: '',
    FONT: Colors.WHITE
  }
}

export default TrxStatus
