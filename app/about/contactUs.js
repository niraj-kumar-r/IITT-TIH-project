import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { COLORS, SIZES } from "../../constants/theme";

const ContactUs = () => {
    return (
        <View>
            <Drawer.Screen
                options={{
                    title: "Contact Us",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "NunitoBold",
                        fontSize: SIZES.xLarge,
                    },
                    headerStyle: { backgroundColor: COLORS.pureWhite },
                }}
            />
            <Text>ContactUs</Text>
        </View>
    );
};

export default ContactUs;
