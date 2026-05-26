import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/(auth)/Sign-up" asChild>
        <Text className="text-blue-500">Already have an account? Sign In</Text>
      </Link>
    </View>
  )
}

export default Signup