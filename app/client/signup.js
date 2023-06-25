import { ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClientSignup from "../../components/signup/ClientSignup";
import { COLORS } from "../../constants/theme";

const Signup = () => {
    const coreAreaList = [
        "Quantum Technologies",
        "Geospatial Tools",
        "Data Science",
        "Radio Frequency",
        "Image Processing",
        "Indoor Mapping",
        "Robotics",
        "Defence",
    ];

    const appliedAreaList = [
        "Precision Agriculture",
        "Disaster Management",
        "Smart Cities",
        "Smart Villages",
        "Land Records and Insurance",
        "Navigation",
        "Policy and Legal",
    ];

    const clientSignupSchema = Yup.object().shape({
        companyName: Yup.string().required("Company Name is required"),
        contactPersonName: Yup.string().required(
            "Contact Person Name is required"
        ),
        designation: Yup.string().required("Designation is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        contact: Yup.string().required("Contact is required"),
        website: Yup.string()
            .url("Invalid website URL")
            .required("Website is required"),
        coreArea: Yup.string()
            .oneOf(coreAreaList, "Invalid core area")
            .required("Core Area is required"),
        appliedArea: Yup.string()
            .oneOf(appliedAreaList, "Invalid applied area")
            .required("Applied Area is required"),
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
        validationSchema: clientSignupSchema,
        initialValues: {
            companyName: "",
            contactPersonName: "",
            designation: "",
            email: "",
            contact: "",
            website: "",
            coreArea: "",
            appliedArea: "",
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
                    title: "Client Signup",
                }}
            />
            <ClientSignup
                formState={values}
                setFieldValue={setFieldValue}
                onSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                coreAreaList={coreAreaList}
                appliedAreaList={appliedAreaList}
            />
        </ScrollView>
    );
};

export default Signup;
