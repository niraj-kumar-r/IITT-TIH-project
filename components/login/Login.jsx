import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { COLORS, SIZES, FONT } from "../../constants/theme";
import AccentButton from "../common/btns/AccentButton";
import FormInputWithLabel from "../common/input/FormInputWithLabel";
import UsernameIcon from "../../assets/icons/username.svg";
import PasswordIcon from "../../assets/icons/password.svg";

const Login = ({
    username,
    password,
    setUsername,
    setPassword,
    signUpPath,
    onSubmit,
}) => {
    const router = useRouter();
    return (
        <View
            style={{
                backgroundColor: COLORS.pureWhite,
                padding: SIZES.large,
                width: "90%",
                borderRadius: SIZES.medium / 2,
                gap: SIZES.small,
            }}
        >
            <FormInputWithLabel
                label="Username"
                value={username}
                setValue={setUsername}
                placeholder="Enter your username"
                icon={
                    <UsernameIcon
                        width={SIZES.medium}
                        height={SIZES.medium}
                        color="black"
                    />
                }
                inputOptions={{
                    autoComplete: "username",
                    inputMode: "text",
                }}
            />

            <FormInputWithLabel
                label="Password"
                value={password}
                setValue={setPassword}
                placeholder="Enter your account password"
                icon={
                    <PasswordIcon
                        width={SIZES.medium}
                        height={SIZES.medium}
                        color="black"
                    />
                }
                inputOptions={{
                    autoComplete: "password",
                    inputMode: "text",
                    secureTextEntry: true,
                }}
            />

            <AccentButton label="Login" onSubmit={onSubmit} />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: SIZES.xSmall,
                }}
            >
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.push(signUpPath)}>
                    <Text
                        style={{
                            color: COLORS.secondary,
                            fontFamily: FONT.semibold,
                        }}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
