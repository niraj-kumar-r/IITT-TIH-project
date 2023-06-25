import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FormInputWithLabel from "../common/input/FormInputWithLabel";
import FormPickerInput from "../common/input/FormPickerInput";
import AccentButton from "../common/btns/AccentButton";
import EduDetail from "./EduDetail";
import { COLORS, SIZES, FONT } from "../../constants/theme";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";

const StudentSignup = () => {
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

    const initialValues = {
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
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={studentSignupSchema}
            onSubmit={async (values, onSubmitProps) => {
                alert(JSON.stringify(values, null, 2));
                onSubmitProps.resetForm();
            }}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <View style={{ marginBottom: SIZES.xxLarge * 2 }}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.pureWhite,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                            marginTop: 15,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONT.bold,
                                fontSize: SIZES.large,
                                width: "90%",
                                textAlign: "left",
                                marginBottom: 20,
                                marginTop: 10,
                            }}
                        >
                            <Text style={{ color: COLORS.gray }}>
                                {" "}
                                Register with{" "}
                            </Text>
                            IITT Navavishkar I-HUB Foundation
                        </Text>
                    </View>

                    <View
                        style={{
                            borderWidth: StyleSheet.hairlineWidth,
                            borderColor: COLORS.gray,
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.pureWhite,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <View style={{ width: "90%" }}>
                            <Text
                                style={{
                                    fontFamily: FONT.bold,
                                    fontSize: SIZES.large,
                                    width: "100%",
                                    textAlign: "left",
                                    marginBottom: 0,
                                    marginTop: 10,
                                }}
                            >
                                Autofill Application
                            </Text>
                            <Text
                                style={{
                                    fontFamily: FONT.regular,
                                    fontSize: SIZES.medium * 0.85,
                                    color: COLORS.gray,
                                    width: "100%",
                                    textAlign: "left",
                                    // marginBottom: 20,
                                    // marginTop: 10,
                                }}
                            >
                                Upload your resume/cv in seconds with the
                                autofill option
                            </Text>
                            <View
                                style={{
                                    backgroundColor: COLORS.gray2,
                                    padding: SIZES.large,
                                    paddingHorizontal: SIZES.xSmall,
                                    borderRadius: SIZES.medium / 2,
                                    borderStyle: "dashed",
                                    borderWidth: 1,
                                    borderColor: COLORS.gray,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginVertical: SIZES.large,
                                    gap: 2.5,
                                }}
                            >
                                <Text style={{ fontFamily: FONT.regular }}>
                                    <Text
                                        style={{
                                            color: COLORS.primary,
                                            textDecorationLine: "underline",
                                            fontFamily: FONT.regular,
                                        }}
                                    >
                                        Upload your resume
                                    </Text>
                                    {" or"} drag and drop it here
                                </Text>
                                <Text style={{ fontFamily: FONT.regular }}>
                                    Only .doc, .docx, .pdf, .odt, .rtd
                                </Text>
                                <Text style={{ fontFamily: FONT.regular }}>
                                    (Optional)
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONT.bold,
                                    fontSize: SIZES.large,
                                    width: "80%",
                                    textAlign: "left",
                                }}
                            >
                                Create your credentials
                            </Text>
                            <AccentButton
                                label="Clear"
                                textStyle={{
                                    marginVertical: SIZES.xSmall,
                                    paddingVertical: SIZES.xSmall / 2,
                                }}
                                onSubmit={() => {
                                    setFieldValue("email", "");
                                    setFieldValue("password", "");
                                    setFieldValue("confirmPassword", "");
                                }}
                            />
                        </View>

                        <View style={{ width: "90%", gap: 10 }}>
                            <FormInputWithLabel
                                label="Email"
                                value={values.email}
                                handleChange={handleChange("email")}
                                handleBlur={handleBlur("email")}
                                error={errors.email}
                                touched={touched.email}
                                inputOptions={{
                                    inputMode: "email",
                                    autoComplete: "email",
                                }}
                                showAsterisk={true}
                            />
                            <FormInputWithLabel
                                label="Password"
                                value={values.password}
                                handleChange={handleChange("password")}
                                handleBlur={handleBlur("password")}
                                error={errors.password}
                                touched={touched.password}
                                inputOptions={{
                                    autoComplete: "new-password",
                                    secureTextEntry: true,
                                }}
                                showAsterisk={true}
                            />
                            <FormInputWithLabel
                                label="Re-Enter Password"
                                value={values.confirmPassword}
                                handleChange={handleChange("confirmPassword")}
                                handleBlur={handleBlur("confirmPassword")}
                                error={errors.confirmPassword}
                                touched={touched.confirmPassword}
                                inputOptions={{
                                    autoComplete: "new-password",
                                    secureTextEntry: true,
                                }}
                                showAsterisk={true}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: COLORS.gray,
                            marginVertical: SIZES.xLarge,
                            marginHorizontal: SIZES.large,
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.pureWhite,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONT.bold,
                                    fontSize: SIZES.large,
                                    width: "80%",
                                    textAlign: "left",
                                }}
                            >
                                Basic Info
                            </Text>
                            <AccentButton
                                label="Clear"
                                textStyle={{
                                    marginVertical: SIZES.xSmall,
                                    paddingVertical: SIZES.xSmall / 2,
                                }}
                                onSubmit={() => {
                                    setFieldValue("firstName", "");
                                    setFieldValue("lastName", "");
                                    setFieldValue("mobile", "");
                                }}
                            />
                        </View>

                        <View style={{ width: "90%", gap: 10 }}>
                            <FormInputWithLabel
                                label="First Name"
                                value={values.firstName}
                                handleChange={handleChange("firstName")}
                                handleBlur={handleBlur("firstName")}
                                error={errors.firstName}
                                touched={touched.firstName}
                                inputOptions={{
                                    autoComplete: "given-name",
                                }}
                            />
                            <FormInputWithLabel
                                label="Last Name"
                                value={values.lastName}
                                handleChange={handleChange("lastName")}
                                handleBlur={handleBlur("lastName")}
                                error={errors.lastName}
                                touched={touched.lastName}
                                inputOptions={{
                                    autoComplete: "family-name",
                                }}
                                showAsterisk={true}
                            />
                            <FormInputWithLabel
                                label="Mobile"
                                value={values.mobile}
                                handleChange={handleChange("mobile")}
                                handleBlur={handleBlur("mobile")}
                                error={errors.mobile}
                                touched={touched.mobile}
                                inputOptions={{
                                    autoComplete: "tel",
                                    inputMode: "tel",
                                }}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: COLORS.gray,
                            marginVertical: SIZES.xLarge,
                            marginHorizontal: SIZES.large,
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.pureWhite,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONT.bold,
                                    fontSize: SIZES.large,
                                    width: "80%",
                                    textAlign: "left",
                                }}
                            >
                                Address Information
                            </Text>
                            <AccentButton
                                label="Clear"
                                textStyle={{
                                    marginVertical: SIZES.xSmall,
                                    paddingVertical: SIZES.xSmall / 2,
                                }}
                                onSubmit={() => {
                                    setFieldValue("street", "");
                                    setFieldValue("city", "");
                                    setFieldValue("stateOrProvince", "");
                                    setFieldValue("zipOrPostalCode", "");
                                    setFieldValue("country", "");
                                }}
                            />
                        </View>

                        <View style={{ width: "90%", gap: 10 }}>
                            <FormInputWithLabel
                                label="Street"
                                value={values.street}
                                handleChange={handleChange("street")}
                                handleBlur={handleBlur("street")}
                                error={errors.street}
                                touched={touched.street}
                                inputOptions={{
                                    autoComplete: "street-address",
                                }}
                            />
                            <FormInputWithLabel
                                label="City"
                                value={values.city}
                                handleChange={handleChange("city")}
                                handleBlur={handleBlur("city")}
                                error={errors.city}
                                touched={touched.city}
                                inputOptions={{
                                    autoComplete: "address-line2",
                                }}
                            />
                            <FormInputWithLabel
                                label="State/Province"
                                value={values.stateOrProvince}
                                handleChange={handleChange("stateOrProvince")}
                                handleBlur={handleBlur("stateOrProvince")}
                                error={errors.stateOrProvince}
                                touched={touched.stateOrProvince}
                                inputOptions={{
                                    autoComplete: "address-line2",
                                }}
                            />
                            <FormInputWithLabel
                                label="Zip/Postal Code"
                                value={values.zipOrPostalCode}
                                handleChange={handleChange("zipOrPostalCode")}
                                handleBlur={handleBlur("zipOrPostalCode")}
                                error={errors.zipOrPostalCode}
                                touched={touched.zipOrPostalCode}
                                inputOptions={{
                                    autoComplete: "postal-code",
                                    inputMode: "numeric",
                                }}
                            />
                            <FormInputWithLabel
                                label="Country"
                                value={values.country}
                                handleChange={handleChange("country")}
                                handleBlur={handleBlur("country")}
                                error={errors.country}
                                touched={touched.country}
                                inputOptions={{
                                    autoComplete: "country",
                                }}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: COLORS.gray,
                            marginVertical: SIZES.xLarge,
                            marginHorizontal: SIZES.large,
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.pureWhite,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONT.bold,
                                    fontSize: SIZES.large,
                                    width: "80%",
                                    textAlign: "left",
                                }}
                            >
                                Professional Details
                            </Text>
                            <AccentButton
                                label="Clear"
                                textStyle={{
                                    marginVertical: SIZES.xSmall,
                                    paddingVertical: SIZES.xSmall / 2,
                                }}
                                onSubmit={() => {
                                    setFieldValue("currentJobTitle", "");
                                    setFieldValue("skillSet", "");
                                }}
                            />
                        </View>

                        <View
                            style={{
                                width: "100%",
                                gap: 10,
                                alignItems: "center",
                            }}
                        >
                            <FormPickerInput
                                label="Current Job Title"
                                optionsList={[
                                    "None",
                                    "Fresher",
                                    "Project Lead",
                                    "Project Manager",
                                ]}
                                value={values.currentJobTitle}
                                handleChange={handleChange("currentJobTitle")}
                                handleBlur={handleBlur("currentJobTitle")}
                                error={errors.currentJobTitle}
                                touched={touched.currentJobTitle}
                            />

                            <FormInputWithLabel
                                label="Skill Set"
                                value={values.skillSet}
                                handleChange={handleChange("skillSet")}
                                handleBlur={handleBlur("skillSet")}
                                error={errors.skillSet}
                                touched={touched.skillSet}
                                inputWidth="90%"
                                inputOptions={{
                                    multiLine: true,
                                    marginVertical: SIZES.small * 0.7,
                                }}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: COLORS.gray,
                            marginVertical: SIZES.xLarge,
                            marginHorizontal: SIZES.large,
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.pureWhite,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONT.bold,
                                    fontSize: SIZES.large,
                                    width: "80%",
                                    textAlign: "left",
                                }}
                            >
                                Educational Details
                            </Text>
                            <AccentButton
                                label="Clear"
                                textStyle={{
                                    marginVertical: SIZES.xSmall,
                                    paddingVertical: SIZES.xSmall / 2,
                                }}
                                onSubmit={() => {
                                    setFieldValue("educationalDetails", []);
                                }}
                            />
                        </View>

                        <View style={{ width: "90%" }}>
                            <FieldArray name="educationalDetails">
                                {({ insert, remove, push }) => (
                                    <View>
                                        {values.educationalDetails.length > 0 &&
                                            values.educationalDetails.map(
                                                (educationalDetail, index) => (
                                                    <EduDetail
                                                        key={index}
                                                        details={
                                                            educationalDetail
                                                        }
                                                    />
                                                )
                                            )}
                                        <AccentButton
                                            label={"+Add"}
                                            accentColor={"transparent"}
                                            textColor={COLORS.tertiary}
                                            width="20%"
                                            textStyle={{
                                                marginVertical: 0,
                                                padding: 0,
                                            }}
                                            onSubmit={() => {
                                                push({
                                                    instituteOrSchool: "",
                                                    majorOrDepartment: "",
                                                    degree: "",
                                                    startMonth: "",
                                                    startYear: "",
                                                    endMonth: "",
                                                    endYear: "",
                                                    currentlyPursuing: false,
                                                });
                                            }}
                                        />
                                    </View>
                                )}
                            </FieldArray>
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: COLORS.gray,
                            marginVertical: SIZES.xLarge,
                            marginHorizontal: SIZES.large,
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.pureWhite,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONT.bold,
                                    fontSize: SIZES.large,
                                    width: "80%",
                                    textAlign: "left",
                                }}
                            >
                                Experience Details
                            </Text>
                            <AccentButton
                                label="Clear"
                                textStyle={{
                                    marginVertical: SIZES.xSmall,
                                    paddingVertical: SIZES.xSmall / 2,
                                }}
                                onSubmit={() => {}}
                            />
                        </View>

                        <View style={{ width: "90%" }}>
                            <AccentButton
                                label={"+Add"}
                                accentColor={"transparent"}
                                textColor={COLORS.tertiary}
                                width="20%"
                                textStyle={{
                                    marginVertical: 0,
                                    padding: 0,
                                }}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: COLORS.gray,
                            marginVertical: SIZES.xLarge,
                            marginHorizontal: SIZES.large,
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.pureWhite,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <View
                            style={{
                                width: "90%",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONT.bold,
                                    fontSize: SIZES.large,
                                    width: "80%",
                                    textAlign: "left",
                                }}
                            >
                                Attachment Information
                            </Text>
                            <Text
                                style={{
                                    fontFamily: FONT.regular,
                                    fontSize: SIZES.medium * 0.85,
                                    color: COLORS.gray,
                                    width: "100%",
                                    textAlign: "left",
                                }}
                            >
                                Resume
                            </Text>
                            <View
                                style={{
                                    backgroundColor: COLORS.gray2,
                                    padding: SIZES.large,
                                    borderRadius: SIZES.medium / 2,
                                    borderStyle: "dashed",
                                    borderWidth: 1,
                                    borderColor: COLORS.gray,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginVertical: SIZES.large,
                                    gap: 2.5,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: FONT.regular,
                                    }}
                                >
                                    Browse
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: COLORS.gray,
                            marginVertical: SIZES.xLarge,
                            marginHorizontal: SIZES.large,
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            columnGap: SIZES.medium,
                            marginTop: 20,
                        }}
                    >
                        <AccentButton
                            label="Cancel"
                            width="100%"
                            onSubmit={() => setvalues({})}
                            accentColor={COLORS.gray2}
                            textColor="black"
                            textStyle={{
                                fontSize: SIZES.medium,
                                paddingHorizontal: SIZES.xxLarge,
                                marginVertical: 0,
                            }}
                        />
                        <AccentButton
                            label="Register"
                            onSubmit={handleSubmit}
                            width="100%"
                            textStyle={{
                                fontSize: SIZES.medium,
                                paddingHorizontal: SIZES.xxLarge,
                                marginVertical: 0,
                            }}
                        />
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default StudentSignup;
