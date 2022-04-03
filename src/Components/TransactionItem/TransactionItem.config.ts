import { EnumStatus } from '../../Constants'

const displayName = "TransactionItem"
const defaultProps = {
  id: "",
  amount: 0,
  unique_code: 0,
  status: EnumStatus.PENDING,
  sender_bank: "",
  account_number: "",
  beneficiary_name: "s",
  beneficiary_bank: "",
  remark: "",
  created_at: "",
  completed_at: "",
  fee: 0,
  onPress: () => { }
}

export default { displayName, defaultProps }
