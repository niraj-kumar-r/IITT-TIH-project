import { View, Text } from "react-native";
import React from "react";
import ClientSignup from "../../components/signup/ClientSignup";
import { COLORS } from "../../constants/theme";

const Signup = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.lightWhite,
            }}
        >
            <ClientSignup />
        </View>
    );
};

export default Signup;
