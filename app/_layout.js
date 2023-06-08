import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Drawer } from "expo-router/drawer";
import menuIcon from "../assets/icons/menu.png";
import { COLORS, SIZES } from "../constants/theme";

const Layout = () => {
    const [fontsLoaded] = useFonts({
        NunitoRegular: require("../assets/fonts/NunitoSans_10pt-Regular.ttf"),
        NunitoBold: require("../assets/fonts/NunitoSans_10pt-Bold.ttf"),
        NunitoMedium: require("../assets/fonts/NunitoSans_10pt-Medium.ttf"),
        NunitoSemiBold: require("../assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Drawer
            onLayout={onLayoutRootView}
            options={{
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "NunitoBold",
                    fontSize: 20,
                },
                headerStyle: { backgroundColor: COLORS.pureWhite },
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={menuIcon} dimension="60%" />
                ),
            }}
        />
    );
};

export default Layout;
