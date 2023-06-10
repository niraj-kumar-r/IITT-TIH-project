import React, { useState } from "react";
import Login from "../../components/login/Login";
import { View } from "react-native";
import { Stack } from "expo-router";
import { SIZES, COLORS } from "../../constants/theme";
import BackIconSvg from "../../assets/icons/arrow-back-sharp.svg";
import { useRouter } from "expo-router";

const ClientLogin = () => {
    const router = useRouter();
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
                    headerLeft: () => (
                        <BackIconSvg
                            color="black"
                            width={SIZES.xLarge}
                            height={SIZES.xLarge}
                            onPress={() => router.back()}
                            onHover={() => {}}
                        />
                    ),
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
