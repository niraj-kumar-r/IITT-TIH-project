import React from "react";
import Login from "../../components/login/Login";
import { Stack } from "expo-router";
import { SIZES } from "../../constants/theme";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import BackIconSvg from "../../assets/icons/arrow-back-sharp.svg";

const StudentLogin = () => {
    const router = useRouter();
    const loginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    });

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        values,
        resetForm,
    } = useFormik({
        validationSchema: loginSchema,
        initialValues: { username: "", password: "" },
        onSubmit: (values) => {
            alert(`Email: ${values.username}, Password: ${values.password}`);
            resetForm();
        },
    });

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
                handleBlur={handleBlur}
                onSubmit={handleSubmit}
                errors={errors}
                touched={touched}
                signUpPath="student/signup"
            />
        </View>
    );
};

export default StudentLogin;
