import "@/global.css";
import { Link } from "expo-router";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);


export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center bg-white pt-20 gap-4">
      <Text className="text-xl font-bold text-blue-500">
        welcome to react native
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="rounded bg-blue-500 px-4 py-3">
          <Text className="text-white font-semibold">
            Go to onboarding
          </Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/Sign-In" asChild>
        <Pressable className="rounded bg-green-500 px-4 py-3">
          <Text className="text-white font-semibold">
            Go to sign in
          </Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/Sign-up" asChild>
        <Pressable className="rounded bg-purple-500 px-4 py-3">
          <Text className="text-white font-semibold">
            Go to sign up
          </Text>
        </Pressable>
      </Link>

      <Link
        href={{
          pathname: "/Subscriptions/[id]",
          params: { id: "spotify" },
        }}
        asChild
      >
        <Pressable className="rounded bg-pink-500 px-4 py-3">
          <Text className="text-white font-semibold">
            Spotify Subscription
          </Text>
        </Pressable>
      </Link>

      <Link
        href={{
          pathname: "/Subscriptions/[id]",
          params: { id: "claude" },
        }}
        asChild
      >
        <Pressable className="rounded bg-black px-4 py-3">
          <Text className="text-white font-semibold">
            Claude Max Subscription
          </Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}