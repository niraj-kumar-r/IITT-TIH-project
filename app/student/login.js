import React, { useState } from "react";
import Login from "../../components/login/Login";
import { Stack } from "expo-router";
import { COLORS, SIZES } from "../../constants/theme";
import { View } from "react-native";
import { useRouter } from "expo-router";
import BackIconSvg from "../../assets/icons/arrow-back-sharp.svg";

const StudentLogin = () => {
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
                    title: "Student Login",

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
                signUpPath="student/signup"
                onSubmit={handleSubmit}
            />
        </View>
    );
};

export default StudentLogin;
