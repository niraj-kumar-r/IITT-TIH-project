import { ScrollView } from "react-native";
import React, { useState } from "react";
import ClientSignup from "../../components/signup/ClientSignup";
import { COLORS, SIZES } from "../../constants/theme";

const Signup = () => {
    const [formState, setFormState] = useState({});
    const onSubmit = () => {};
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: COLORS.pureWhite,
            }}
        >
            <ClientSignup
                formState={formState}
                setFormState={setFormState}
                onSubmit={onSubmit}
            />
        </ScrollView>
    );
};

export default Signup;
