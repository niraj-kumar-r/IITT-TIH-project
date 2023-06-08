import React from "react";
import { View, Text } from "react-native";
import StudentSignup from "../../components/signup/StudentSignup";
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
            <StudentSignup />
        </View>
    );
};

export default Signup;
