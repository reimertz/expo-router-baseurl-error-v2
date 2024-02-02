import { Text, View } from 'tamagui'

import TestComponent from '@components/TestComponent'

export default function TabOneScreen() {
  return (
    <View flex={1} alignItems="center">
      <Text fontSize={20}>Tab One</Text>
      <TestComponent/>
    </View>
  )
}
