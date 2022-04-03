import { FilterTransactionItem } from '../Components/FilterTransaction/FilterTransaction.types'

const FilterTransaction: FilterTransactionItem[] = [
  {
    id: 1,
    title: 'URUTKAN',
    key: '',
    method: ''
  },
  {
    id: 2,
    title: 'Nama A-Z',
    method: 'sort',
    key: 'beneficiary_name'
  },
  {
    id: 3,
    title: 'Nama Z-A',
    method: 'reverse',
    key: 'beneficiary_name'
  },
  {
    id: 4,
    title: 'Tanggal Terbaru',
    method: 'sort',
    key: 'created_at'
  },
  {
    id: 5,
    title: 'Tanggal Terlama',
    method: 'reverse',
    key: 'created_at'
  }
]

export default FilterTransaction
