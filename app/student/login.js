import React, { useState } from "react";
import Login from "../../components/login/Login";
import { Stack } from "expo-router";
import { SIZES } from "../../constants/theme";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import BackIconSvg from "../../assets/icons/arrow-back-sharp.svg";

const StudentLogin = () => {
    const router = useRouter();
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: { username: "", password: "" },
        onSubmit: (values) =>
            alert(`Email: ${values.username}, Password: ${values.password}`),
    });

    // const handleSubmit = () => {};
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
                username={values.username}
                password={values.password}
                handleChange={handleChange}
                onSubmit={handleSubmit}
                signUpPath="student/signup"
            />
        </View>
    );
};

export default StudentLogin;
