import { ScrollView } from "react-native";
import React from "react";
import StudentSignup from "../../components/signup/StudentSignup";
import { Stack } from "expo-router";
import { COLORS } from "../../constants/theme";

const Signup = () => {
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
            <StudentSignup />
        </ScrollView>
    );
};

export default Signup;
