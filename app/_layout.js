import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { COLORS, SIZES } from "../constants/theme";

const Layout = () => {
    const [fontsLoaded] = useFonts({
        NunitoRegular: require("../assets/fonts/NunitoSans_10pt-Regular.ttf"),
        NunitoBold: require("../assets/fonts/NunitoSans_10pt-Bold.ttf"),
        NunitoMedium: require("../assets/fonts/NunitoSans_10pt-Medium.ttf"),
        NunitoSemiBold: require("../assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
    });

    if (!fontsLoaded) {
        return <SplashScreen />;
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
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                    ...headerOptions,
                }}
            />
            {/* <Drawer.Screen
                name="/about/index"
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
