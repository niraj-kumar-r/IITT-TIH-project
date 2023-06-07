import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../constants/theme";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Home",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "NunitoBold",
                        fontSize: 20,
                    },
                    headerStyle: { backgroundColor: COLORS.pureWhite },
                    headerShadowVisible: false,
                }}
            />
            <Text>Hello, world</Text>
        </SafeAreaView>
    );
};

export default Home;
