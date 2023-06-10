import { Drawer } from "expo-router/drawer";
import { COLORS, SIZES, FONT } from "../../constants/theme";

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: FONT.bold,
                    fontSize: SIZES.xLarge,
                },
                headerStyle: { backgroundColor: COLORS.pureWhite },
            }}
            initialRouteName="aboutUs"
        >
            <Drawer.Screen
                name="aboutUs"
                options={{
                    title: "About Us",
                }}
            />
            <Drawer.Screen
                name="people"
                options={{
                    title: "People",
                }}
            />
            <Drawer.Screen
                name="activities"
                options={{
                    title: "Activities",
                }}
            />
            <Drawer.Screen
                name="contactUs"
                options={{
                    title: "Contact Us",
                }}
            />
        </Drawer>
    );
}
