import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { COLORS, SIZES } from "../../constants/theme";

const People = () => {
    return (
        <View>
            <Drawer.Screen
                options={{
                    title: "People",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "NunitoBold",
                        fontSize: SIZES.xLarge,
                    },
                    headerStyle: { backgroundColor: COLORS.pureWhite },
                }}
            />
            <Text>People</Text>
        </View>
    );
};

export default People;
