/**
 * capitalize
 * @param {string} str - str
 * @returns {string} string
 * @private
 */
const capitalize = (str: string): string => (
  str[0].toUpperCase() + str.substr(1).toLowerCase()
)

/**
 * generateBankName
 * @param {string} bank - bank
 * @returns {string} string
 * @private
 */
const generateBankName = (bank: string): string => (
  bank.length === 3 ? bank.toUpperCase() : capitalize(bank)
)

export { capitalize, generateBankName }
