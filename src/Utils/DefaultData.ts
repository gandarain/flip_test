/* eslint-disable require-jsdoc */
import { EnumStatus } from '../Constants'

const emptyString = ''
const emptyObject = {}
const noop = () => { }
const trxExample = {
  id: "FT52687",
  amount: 3014000,
  unique_code: 622,
  status: EnumStatus.PENDING,
  sender_bank: "bni",
  account_number: "1261391782",
  beneficiary_name: "Hal Matthams",
  beneficiary_bank: "muamalat",
  remark: "sample remark",
  created_at: "2022-03-26 05:43:03",
  completed_at: "2022-04-01 13:43:03",
  fee: 0
}

export { emptyObject, emptyString, noop, trxExample }
