import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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

    return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
