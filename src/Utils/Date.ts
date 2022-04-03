import { Month } from '../Constants'

/**
 * getDay
 * @param {string} date - date
 * @returns {string} string
 * @private
 */
const getDay = (date: string): string => {
  const convertedDate = new Date(date)
  return convertedDate.getDate().toString()
}

/**
 * getMonth
 * @param {string} date - date
 * @returns {string} string
 * @private
 */
const getMonth = (date: string): string => {
  const convertedDate = new Date(date)
  const month = convertedDate.getMonth()
  return Month[month]
}

/**
 * getYear
 * @param {string} date - date
 * @returns {string} string
 * @private
 */
const getYear = (date: string): string => {
  const convertedDate = new Date(date)
  return convertedDate.getFullYear().toString()
}

/**
 * getDayFormatted
 * @param {string} date - date
 * @returns {string} string
 * @private
 */
const getDayFormatted = (date: string): string => {
  const day = getDay(date)
  const month = getMonth(date)
  const year = getYear(date)
  return `${day} ${month} ${year}`
}

export { getDay, getMonth, getDayFormatted }
