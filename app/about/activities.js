import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { COLORS, SIZES } from "../../constants/theme";

const Activities = () => {
    return (
        <View>
            <Drawer.Screen
                options={{
                    title: "Activities",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "NunitoBold",
                        fontSize: SIZES.xLarge,
                    },
                    headerStyle: { backgroundColor: COLORS.pureWhite },
                }}
            />
            <Text>Activities</Text>
        </View>
    );
};

export default Activities;
