import axios from 'axios'
import { TransactionApi } from '../API'
import { TransactionList } from '../Screens/Transaction/Transaction.types'

const URL = 'https://recruitment-test.flip.id/'

/**
 * GetTransactions
 * @returns {Promise<TransactionList>} - Transactions
 * @private
 */
export const GetTransactions = async (): Promise<TransactionList> => {
  const response = await axios.get(`${URL}${TransactionApi.getTransactions}`)
  return response.data
}
