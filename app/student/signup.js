import { ScrollView } from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import StudentSignup from "../../components/signup/StudentSignup";
import { Stack } from "expo-router";
import { COLORS } from "../../constants/theme";

const Signup = () => {
    const studentSignupSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        firstName: Yup.string(),
        lastName: Yup.string().required("Last Name is required"),
        mobile: Yup.string(),
        street: Yup.string(),
        city: Yup.string(),
        stateOrProvince: Yup.string(),
        zipOrPostalCode: Yup.string(),
        country: Yup.string(),
        currentJobTitle: Yup.string(),
        skillSet: Yup.string(),
    });

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        values,
        resetForm,
        setFieldValue,
    } = useFormik({
        validationSchema: studentSignupSchema,
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            mobile: "",
            street: "",
            city: "",
            stateOrProvince: "",
            zipOrPostalCode: "",
            country: "",
            currentJobTitle: "",
            skillSet: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
    });

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: COLORS.pureWhite,
            }}
        >
            <Stack.Screen
                options={{
                    title: "Student Signup",
                }}
            />
            <StudentSignup
                formState={values}
                setFieldValue={setFieldValue}
                onSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
        </ScrollView>
    );
};

export default Signup;
