import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../constants/theme";
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
            }}
        >
            <View>
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
            <View>
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
            <TouchableOpacity onPress={onSubmit}>
                <Text
                    style={{
                        textAlign: "center",
                        padding: SIZES.xSmall,
                        backgroundColor: COLORS.tertiary,
                        color: COLORS.pureWhite,
                        marginVertical: SIZES.large,
                        borderRadius: SIZES.medium / 2,
                        fontFamily: "NunitoSemiBold",
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>
            <View>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.push(signUpPath)}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
