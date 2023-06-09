import React, { useState } from "react";
import Login from "../../components/login/Login";
import { Stack } from "expo-router";
import { COLORS, SIZES } from "../../constants/theme";
import { View, Text } from "react-native";

const StudentLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {};
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Stack.Screen
                options={{
                    title: "Student Login",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "NunitoBold",
                        fontSize: SIZES.xLarge,
                    },
                    headerStyle: { backgroundColor: COLORS.pureWhite },
                }}
            />
            <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                signUpPath="student/signup"
                onSubmit={handleSubmit}
            />
        </View>
    );
};

export default StudentLogin;
