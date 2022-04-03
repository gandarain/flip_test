/**
 * convertToRupiah
 * @param {number} fee - fee
 * @returns {string} string
 * @private
 */
const convertToRupiah = (fee: number): string => {
  const regex = /(\d)(?=(\d\d\d)+(?!\d))/g
  return `Rp${fee.toString().replace(regex, "$1.")}`
}

export { convertToRupiah }
