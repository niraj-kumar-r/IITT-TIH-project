import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Drawer } from "expo-router/drawer";
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

    const headerOptions = {
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontFamily: "NunitoBold",
            fontSize: SIZES.xLarge,
        },
        headerStyle: { backgroundColor: COLORS.pureWhite },
    };

    return (
        <Drawer onLayout={onLayoutRootView}>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Home",
                    title: "Home",

                    ...headerOptions,
                }}
            />
            {/* <Drawer.Screen
                name="about/aboutUs"
                options={{
                    drawerLabel: "About Us",
                    title: "About Us",
                    ...headerOptions,
                }}
            /> */}
            <Drawer.Screen
                name="client/login"
                options={{
                    drawerLabel: "Client Login",
                    title: "Client Login",
                    ...headerOptions,
                }}
            />
            <Drawer.Screen
                name="student/login"
                options={{
                    drawerLabel: "Student Login",
                    title: "Student Login",
                    ...headerOptions,
                }}
            />
        </Drawer>
    );
};

export default Layout;
