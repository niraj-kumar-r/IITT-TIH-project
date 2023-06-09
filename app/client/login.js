import React, { useState } from "react";
import Login from "../../components/login/Login";
import { View } from "react-native";
import { Stack } from "expo-router";
import { SIZES, COLORS } from "../../constants/theme";

const ClientLogin = () => {
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
                    title: "Client Login",
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
                signUpPath="/client/signup"
                onSubmit={handleSubmit}
            />
        </View>
    );
};

export default ClientLogin;
