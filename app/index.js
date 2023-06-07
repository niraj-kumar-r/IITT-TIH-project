import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SIZES } from "../constants/theme";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import menuIcon from "../assets/icons/menu.png";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "pink" }}>
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
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={menuIcon} dimension="60%" />
                    ),
                }}
            />
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        backgroundColor: "red",
                    }}
                >
                    <Text>Home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
