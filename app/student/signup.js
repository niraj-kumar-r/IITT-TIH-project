import { ScrollView } from "react-native";
import React, { useState } from "react";
import StudentSignup from "../../components/signup/StudentSignup";
import { COLORS } from "../../constants/theme";

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
            <StudentSignup
                formState={formState}
                setFormState={setFormState}
                onSubmit={onSubmit}
            />
        </ScrollView>
    );
};

export default Signup;
