import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FormInputWithLabel from "../common/input/FormInputWithLabel";
import FormPickerInput from "../common/input/FormPickerInput";
import AccentButton from "../common/btns/AccentButton";
import { COLORS, SIZES, FONT } from "../../constants/theme";
import { set } from "react-native-reanimated";

const StudentSignup = ({
    formState,
    setFieldValue,
    onSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
}) => {
    return (
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
                    <Text style={{ color: COLORS.gray }}> Register with </Text>
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
                        Upload your resume/cv in seconds with the autofill
                        option
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
                        value={formState.email}
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
                        value={formState.password}
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
                        value={formState.confirmPassword}
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
                        value={formState.firstName}
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
                        value={formState.lastName}
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
                        value={formState.mobile}
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
                        value={formState.street}
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
                        value={formState.city}
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
                        value={formState.stateOrProvince}
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
                        value={formState.zipOrPostalCode}
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
                        value={formState.country}
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
                            // setFormState({
                            //     ...formState,
                            //     currentJobTitle: "",
                            //     skillSet: "",
                            // });
                            setFieldValue("currentJobTitle", "");
                            setFieldValue("skillSet", "");
                        }}
                    />
                </View>

                <View style={{ width: "100%", gap: 10, alignItems: "center" }}>
                    <FormPickerInput
                        label="Current Job Title"
                        optionsList={[
                            "None",
                            "Fresher",
                            "Project Lead",
                            "Project Manager",
                        ]}
                        value={formState.currentJobTitle}
                        handleChange={handleChange("currentJobTitle")}
                        handleBlur={handleBlur("currentJobTitle")}
                        error={errors.currentJobTitle}
                        touched={touched.currentJobTitle}
                    />

                    <FormInputWithLabel
                        label="Skill Set"
                        value={formState.skillSet}
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
                            setFormState({
                                ...formState,
                            });
                        }}
                    />
                </View>

                <View style={{ width: "90%" }}>
                    <AccentButton
                        label={"+Add"}
                        accentColor={"transparent"}
                        textColor={COLORS.tertiary}
                        width="20%"
                        textStyle={{ marginVertical: 0, padding: 0 }}
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
                        Experience Details
                    </Text>
                    <AccentButton
                        label="Clear"
                        textStyle={{
                            marginVertical: SIZES.xSmall,
                            paddingVertical: SIZES.xSmall / 2,
                        }}
                        onSubmit={() => {
                            setFormState({
                                ...formState,
                            });
                        }}
                    />
                </View>

                <View style={{ width: "90%" }}>
                    <AccentButton
                        label={"+Add"}
                        accentColor={"transparent"}
                        textColor={COLORS.tertiary}
                        width="20%"
                        textStyle={{ marginVertical: 0, padding: 0 }}
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
                            // marginBottom: 20,
                            // marginTop: 10,
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
                    onSubmit={() => setFormState({})}
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
                    onSubmit={onSubmit}
                    width="100%"
                    textStyle={{
                        fontSize: SIZES.medium,
                        paddingHorizontal: SIZES.xxLarge,
                        marginVertical: 0,
                    }}
                />
            </View>
        </View>
    );
};

export default StudentSignup;
