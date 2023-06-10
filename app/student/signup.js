import { ScrollView } from "react-native";
import React, { useState } from "react";
import StudentSignup from "../../components/signup/StudentSignup";
import { Stack } from "expo-router";
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
            <Stack.Screen
                options={{
                    title: "Student Signup",
                }}
            />
            <StudentSignup
                formState={formState}
                setFormState={setFormState}
                onSubmit={onSubmit}
            />
        </ScrollView>
    );
};

export default Signup;
