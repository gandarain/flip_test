// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Transaction from '../Screens/Transaction'
import DetailTransaction from '../Screens/DetailTransaction'
import Routes from './Routes'

const Stack = createNativeStackNavigator()

/**
 * TransactionScreen
 * @returns {JSX.Element} TransactionScreen = TransactionScreen
 * @private
 */
const TransactionScreen = (): JSX.Element => (
  <Stack.Screen
    name={Routes.TRANSACTION}
    component={Transaction}
    options={() => ({
      headerShown: false
    })}
  />
)

/**
 * DetailTransactionScreen
 * @returns {JSX.Element} DetailTransactionScreen = DetailTransactionScreen
 * @private
 */
const DetailTransactionScreen = (): JSX.Element => (
  <Stack.Screen
    name={Routes.DETAIL_TRANSACTION}
    component={DetailTransaction}
  />
)

/**
 * StackNavigator
 * @returns {JSX.Element} StackNavigator = StackNavigator
 * @private
 */
const StackNavigator = (): JSX.Element => (
  <Stack.Navigator>
    {TransactionScreen()}
    {DetailTransactionScreen()}
  </Stack.Navigator>
)

/**
 * Navigation
 * @returns {JSX.Element} Navigation = Navigation
 * @constructor
 */
const Navigation = (): JSX.Element => (
  <NavigationContainer>
    {StackNavigator()}
  </NavigationContainer>
)

export default Navigation
