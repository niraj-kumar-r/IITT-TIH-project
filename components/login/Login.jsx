import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../constants/theme";
import AccentButton from "../common/btns/AccentButton";
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
            <View style={{ gap: SIZES.xSmall / 1.5 }}>
                <Text style={{ fontFamily: "NunitoBold" }}>Username</Text>
                <View
                    style={{
                        borderWidth: 0.5,
                        borderRadius: SIZES.medium / 2,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: SIZES.xSmall,
                        }}
                    >
                        <UsernameIcon
                            width={SIZES.medium}
                            height={SIZES.medium}
                            color="black"
                        />
                    </View>
                    <TextInput
                        autoComplete="username"
                        value={username}
                        placeholder="Enter your username"
                        inputMode="text"
                        onChangeText={(text) => setUsername(text)}
                        style={{
                            width: "85%",
                            marginHorizontal: SIZES.xSmall,
                        }}
                    />
                </View>
            </View>
            <View style={{ gap: SIZES.xSmall / 1.5 }}>
                <Text style={{ fontFamily: "NunitoBold" }}>Password</Text>
                <View
                    style={{
                        borderWidth: 0.5,
                        borderRadius: SIZES.medium / 2,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: SIZES.xSmall,
                        }}
                    >
                        <PasswordIcon
                            width={SIZES.medium}
                            height={SIZES.medium}
                            color="black"
                        />
                    </View>
                    <TextInput
                        autoComplete="password"
                        value={password}
                        placeholder="Enter your account password"
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        style={{
                            width: "85%",
                            marginHorizontal: SIZES.xSmall,
                        }}
                    />
                </View>
            </View>
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
                            fontFamily: "NunitoSemiBold",
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
