import { Stack } from "expo-router";
import { COLORS, SIZES, FONT } from "../../constants/theme";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: FONT.bold,
                    fontSize: SIZES.xLarge,
                },
                headerStyle: { backgroundColor: COLORS.pureWhite },
            }}
            initialRouteName="login"
        />
    );
}
