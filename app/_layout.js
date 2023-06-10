import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { COLORS, SIZES } from "../constants/theme";

export default function Layout() {
    const [fontsLoaded] = useFonts({
        NunitoRegular: require("../assets/fonts/NunitoSans_10pt-Regular.ttf"),
        NunitoBold: require("../assets/fonts/NunitoSans_10pt-Bold.ttf"),
        NunitoMedium: require("../assets/fonts/NunitoSans_10pt-Medium.ttf"),
        NunitoSemiBold: require("../assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
    });

    if (!fontsLoaded) {
        return <SplashScreen />;
    }

    return (
        <Drawer
            screenOptions={{
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "NunitoBold",
                    fontSize: SIZES.xLarge,
                },
                headerStyle: { backgroundColor: COLORS.pureWhite },
            }}
            initialRouteName="index"
        >
            <Drawer.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
            <Drawer.Screen
                name="about"
                options={{
                    title: "About Us",
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="client"
                options={{
                    title: "Client Login",
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="student"
                options={{
                    title: "Student Login",
                    headerShown: false,
                }}
            />
        </Drawer>
    );
}
