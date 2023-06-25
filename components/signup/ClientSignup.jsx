import React from "react";
import { View, Text } from "react-native";

import FormInputWithLabel from "../common/input/FormInputWithLabel";
import FormPickerInput from "../common/input/FormPickerInput";
import AccentButton from "../common/btns/AccentButton";
import { COLORS, SIZES, FONT } from "../../constants/theme";

const ClientSignup = ({
    formState,
    setFieldValue,
    onSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    coreAreaList,
    appliedAreaList,
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
                }}
            >
                <Text
                    style={{
                        fontFamily: FONT.bold,
                        fontSize: SIZES.large,
                        width: "90%",
                        textAlign: "left",
                        marginBottom: 20,
                        marginTop: 20,
                    }}
                >
                    Industries Clients
                </Text>
                <FormInputWithLabel
                    label="Company Name"
                    value={formState?.companyName}
                    handleChange={handleChange("companyName")}
                    handleBlur={handleBlur("companyName")}
                    error={errors.companyName}
                    touched={touched.companyName}
                    inputWidth="90%"
                    showAsterisk={true}
                    inputOptions={{
                        inputMode: "text",
                    }}
                />
                <FormInputWithLabel
                    label="Contact Person Name"
                    value={formState?.contactPersonName}
                    handleChange={handleChange("contactPersonName")}
                    handleBlur={handleBlur("contactPersonName")}
                    error={errors.contactPersonName}
                    touched={touched.contactPersonName}
                    inputWidth="90%"
                    showAsterisk={true}
                    inputOptions={{ inputMode: "text", autocomplete: "name" }}
                />
                <FormInputWithLabel
                    label="Designation"
                    value={formState?.designation}
                    handleChange={handleChange("designation")}
                    handleBlur={handleBlur("designation")}
                    error={errors.designation}
                    touched={touched.designation}
                    inputWidth="90%"
                    showAsterisk={true}
                    inputOptions={{ inputMode: "text" }}
                />
                <FormInputWithLabel
                    label="Email"
                    value={formState?.email}
                    handleChange={handleChange("email")}
                    handleBlur={handleBlur("email")}
                    error={errors.email}
                    touched={touched.email}
                    inputWidth="90%"
                    showAsterisk={true}
                    inputOptions={{ inputMode: "email", autocomplete: "email" }}
                />
                <FormInputWithLabel
                    label="Contact"
                    value={formState?.contact}
                    handleChange={handleChange("contact")}
                    handleBlur={handleBlur("contact")}
                    error={errors.contact}
                    touched={touched.contact}
                    inputWidth="90%"
                    showAsterisk={true}
                    inputOptions={{ inputMode: "tel", autocomplete: "tel" }}
                />
                <FormInputWithLabel
                    label="Website"
                    value={formState?.website}
                    handleChange={handleChange("website")}
                    handleBlur={handleBlur("website")}
                    error={errors.website}
                    touched={touched.website}
                    inputWidth="90%"
                    showAsterisk={true}
                    inputOptions={{ inputMode: "url" }}
                />
            </View>

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
                <Text
                    style={{
                        fontFamily: FONT.bold,
                        fontSize: SIZES.large,
                        width: "90%",
                        textAlign: "left",
                        marginBottom: 20,
                        marginTop: 40,
                    }}
                >
                    Subject Field
                </Text>
                <FormPickerInput
                    label="Core Area"
                    optionsList={coreAreaList}
                    value={formState?.coreArea}
                    handleChange={handleChange("coreArea")}
                    handleBlur={handleBlur("coreArea")}
                    error={errors.coreArea}
                    touched={touched.coreArea}
                    showAsterisk={true}
                />
                <FormPickerInput
                    label="Applied Area"
                    optionsList={appliedAreaList}
                    value={formState?.appliedArea}
                    handleChange={handleChange("appliedArea")}
                    handleBlur={handleBlur("appliedArea")}
                    error={errors.appliedArea}
                    touched={touched.appliedArea}
                    showAsterisk={true}
                />
            </View>

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
                    }}
                />
                <AccentButton
                    label="Register"
                    onSubmit={onSubmit}
                    width="100%"
                    textStyle={{
                        fontSize: SIZES.medium,
                        paddingHorizontal: SIZES.xxLarge,
                    }}
                />
            </View>
        </View>
    );
};

export default ClientSignup;
