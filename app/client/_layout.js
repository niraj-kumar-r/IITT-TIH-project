import { Stack } from "expo-router";
import { COLORS, SIZES } from "../../constants/theme";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "NunitoBold",
                    fontSize: SIZES.xLarge,
                },
                headerStyle: { backgroundColor: COLORS.pureWhite },
            }}
            initialRouteName="login"
        />
    );
}
