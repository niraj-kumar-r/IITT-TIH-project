import { ScrollView } from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import StudentSignup from "../../components/signup/StudentSignup";
import { Stack } from "expo-router";
import { COLORS } from "../../constants/theme";

const Signup = () => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

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
        educationalDetails: Yup.array().of(
            Yup.object()
                .shape({
                    instituteOrSchool: Yup.string().required("Required"),
                    majorOrDepartment: Yup.string().required("Required"),
                    degree: Yup.string().required("Required"),
                    startMonth: Yup.string()
                        .oneOf(monthNames, "Invalid start month")
                        .required("Start month is required"),
                    startYear: Yup.number().required("Start year is required"),
                    endMonth: Yup.string()
                        .oneOf(monthNames, "Invalid end month")
                        .required("End month is required"),
                    endYear: Yup.number().required("End year is required"),
                    currentlyPursuing: Yup.boolean(),
                })
                .test(
                    "validDateRange",
                    "Invalid date range",
                    function (values) {
                        const { startMonth, startYear, endMonth, endYear } =
                            values;
                        const startMonthIndex = monthNames.indexOf(startMonth);
                        const endMonthIndex = monthNames.indexOf(endMonth);

                        if (startYear > endYear) {
                            return this.createError({
                                path: "endYear",
                                message:
                                    "End year should be greater than start year",
                            });
                        }

                        if (
                            startYear === endYear &&
                            startMonthIndex > endMonthIndex
                        ) {
                            return this.createError({
                                path: "endMonth",
                                message:
                                    "End month should be greater than start month",
                            });
                        }

                        return true;
                    }
                )
        ),
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
            educationalDetails: [],
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
