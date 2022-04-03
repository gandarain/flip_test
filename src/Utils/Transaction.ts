import { TransactionList } from '../Screens/Transaction/Transaction.types'
import { FilterTransactionItem } from '../Components/FilterTransaction/FilterTransaction.types'
import { Props as TransactionItem } from '../Components/TransactionItem/TransactionItem.types'

/**
 * searchTransaction
 * @param {TransactionList} trxList - trxList
 * @param {string} input - input
 * @returns {TransactionList} TransactionList
 * @private
 */
const searchTransaction = (trxList: TransactionList, input: string): TransactionList => {
  const result: TransactionList = {}
  for (const key in trxList) {
    if (trxList[key].beneficiary_name.includes(input.toLowerCase()) ||
      trxList[key].beneficiary_bank.includes(input.toLowerCase()) ||
      trxList[key].sender_bank.includes(input.toLowerCase()) ||
      trxList[key].amount.toString().includes(input.toLowerCase())
    ) {
      result[key] = trxList[key]
    }
  }
  return result
}

/**
 * sortingTransactionDescending
 * @param {TransactionList} trxList - trxList
 * @returns {TransactionList} TransactionList
 * @private
 */
const sortingNameDescending = (trxList: TransactionList): TransactionList => {
  const arr: TransactionItem[] = []
  const result: TransactionList = {}

  for (const key in trxList) {
    arr.push(trxList[key])
  }

  arr.sort((a: TransactionItem, b: TransactionItem) => {
    const fa = a.beneficiary_name.toLowerCase()
    const fb = b.beneficiary_name.toLowerCase()

    if (fa < fb) {
      return -1
    }
    if (fa > fb) {
      return 1
    }
    return 0
  })

  arr.forEach(item => {
    result[item.id] = item
  })

  return result
}

/**
 * sortingTransactionAscending
 * @param {TransactionList} trxList - trxList
 * @returns {TransactionList} TransactionList
 * @private
 */
const sortingNameAscending = (trxList: TransactionList): TransactionList => {
  const arr: TransactionItem[] = []
  const result: TransactionList = {}

  for (const key in trxList) {
    arr.push(trxList[key])
  }

  arr.sort((a: TransactionItem, b: TransactionItem) => {
    const fa = a.beneficiary_name.toLowerCase()
    const fb = b.beneficiary_name.toLowerCase()

    if (fa > fb) {
      return -1
    }
    if (fa < fb) {
      return 1
    }
    return 0
  })

  arr.forEach(item => {
    result[item.id] = item
  })

  return result
}

/**
 * sortingDateDescending
 * @param {TransactionList} trxList - trxList
 * @returns {TransactionList} TransactionList
 * @private
 */
const sortingDateDescending = (trxList: TransactionList): TransactionList => {
  const arr: TransactionItem[] = []
  const result: TransactionList = {}

  for (const key in trxList) {
    arr.push(trxList[key])
  }

  arr.sort((a: TransactionItem, b: TransactionItem) => {
    const da: Date = new Date(a.created_at)
    const db: Date = new Date(b.created_at)
    return da.getTime() - db.getTime()
  })

  arr.forEach(item => {
    result[item.id] = item
  })

  return result
}

/**
 * sortingTransactionAscending
 * @param {TransactionList} trxList - trxList
 * @returns {TransactionList} TransactionList
 * @private
 */
const sortingDateAscending = (trxList: TransactionList): TransactionList => {
  const arr: TransactionItem[] = []
  const result: TransactionList = {}

  for (const key in trxList) {
    arr.push(trxList[key])
  }

  arr.sort((a: TransactionItem, b: TransactionItem) => {
    const da: Date = new Date(a.created_at)
    const db: Date = new Date(b.created_at)
    return db.getTime() - da.getTime()
  })

  arr.forEach(item => {
    result[item.id] = item
  })

  return result
}

/**
 * sortingTransaction
 * @param {TransactionList} trxList - trxList
 * @param {string} input - input
 * @returns {TransactionList} TransactionList
 * @private
 */
const sortingTransaction = (trxList: TransactionList, input: FilterTransactionItem): TransactionList => {
  if (input.key === 'beneficiary_name') {
    if (input.method === 'sort') {
      return sortingNameDescending(trxList)
    } else {
      return sortingNameAscending(trxList)
    }
  } else if (input.key === 'created_at') {
    if (input.method === 'sort') {
      return sortingDateAscending(trxList)
    } else {
      return sortingDateDescending(trxList)
    }
  }

  return trxList
}

export {
  searchTransaction,
  sortingTransaction
}
