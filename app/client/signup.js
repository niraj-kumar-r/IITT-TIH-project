import { View, Text } from "react-native";
import React, { useState } from "react";
import ClientSignup from "../../components/signup/ClientSignup";
import { COLORS } from "../../constants/theme";

const Signup = () => {
    const [formState, setFormState] = useState({});
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.lightWhite,
            }}
        >
            <ClientSignup formState={formState} setFormState={setFormState} />
        </View>
    );
};

export default Signup;
