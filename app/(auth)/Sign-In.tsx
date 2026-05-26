import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/Sign-up" asChild>
        <Text className="text-blue-500">{"Don't have an account? Sign Up"}</Text>
      </Link>
    </View>
  )
}

export default SignIn