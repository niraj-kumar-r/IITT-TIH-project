import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../constants/theme";
import UsernameIcon from "../../assets/icons/username.svg";
import passwordIcon from "../../assets/icons/password.png";

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
                            // backgroundColor: "green",
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
                        style={{
                            // backgroundColor: "pink",
                            width: "90%",
                            marginHorizontal: SIZES.xSmall,
                        }}
                    />
                </View>
            </View>
            <View>
                <Text style={{ fontFamily: "NunitoBold" }}>Password</Text>
                <TextInput />
            </View>
        </View>
    );
};

export default Login;
