import { ScrollView } from "react-native";
import React, { useState } from "react";
import ClientSignup from "../../components/signup/ClientSignup";
import { COLORS } from "../../constants/theme";

const Signup = () => {
    const [formState, setFormState] = useState({});
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: COLORS.pureWhite,
            }}
        >
            <ClientSignup formState={formState} setFormState={setFormState} />
        </ScrollView>
    );
};

export default Signup;
