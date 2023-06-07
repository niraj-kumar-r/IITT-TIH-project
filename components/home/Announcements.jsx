import React from "react";
import { Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const Announcements = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
                style={{
                    fontFamily: "NunitoBold",
                    fontSize: 28,
                    textAlign: "center",
                }}
            >
                Announcements
            </Text>
            <View
                style={{
                    borderColor: COLORS.primary,
                    borderWidth: 0.5,
                    height: 1.5,
                    width: "45%",
                    margin: 10,
                }}
            ></View>
        </View>
    );
};

export default Announcements;
