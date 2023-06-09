import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FormInputWithLabel from "../common/input/FormInputWithLabel";
import FormPickerInput from "../common/input/FormPickerInput";
import AccentButton from "../common/btns/AccentButton";
import { COLORS, SIZES } from "../../constants/theme";

const StudentSignup = ({ formState, setFormState, onSubmit }) => {
    const handleFormChange = (key, value) => {
        setFormState({ ...formState, [key]: value });
    };

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
                        fontFamily: "NunitoBold",
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
                            fontFamily: "NunitoBold",
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
                            fontFamily: "NunitoRegular",
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
                        <Text style={{ fontFamily: "NunitoRegular" }}>
                            <Text
                                style={{
                                    color: COLORS.primary,
                                    textDecorationLine: "underline",
                                    fontFamily: "NunitoRegular",
                                }}
                            >
                                Upload your resume
                            </Text>
                            {" or"} drag and drop it here
                        </Text>
                        <Text style={{ fontFamily: "NunitoRegular" }}>
                            Only .doc, .docx, .pdf, .odt, .rtd
                        </Text>
                        <Text style={{ fontFamily: "NunitoRegular" }}>
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
                            fontFamily: "NunitoBold",
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
                            setFormState({
                                ...formState,
                                email: "",
                                password: "",
                                reEnterPassword: "",
                            });
                        }}
                    />
                </View>

                <View style={{ width: "90%", gap: 10 }}>
                    <FormInputWithLabel
                        label="Email"
                        value={formState.email}
                        setValue={(value) => handleFormChange("email", value)}
                        inputOptions={{
                            inputMode: "email",
                            autoComplete: "email",
                        }}
                        showAsterisk={true}
                    />
                    <FormInputWithLabel
                        label="Password"
                        value={formState.password}
                        setValue={(value) =>
                            handleFormChange("password", value)
                        }
                        inputOptions={{
                            autoComplete: "new-password",
                            secureTextEntry: true,
                        }}
                        showAsterisk={true}
                    />
                    <FormInputWithLabel
                        label="Re-Enter Password"
                        value={formState.reEnterPassword}
                        setValue={(value) =>
                            handleFormChange("reEnterPassword", value)
                        }
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
                            fontFamily: "NunitoBold",
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
                            setFormState({
                                ...formState,
                                firstName: "",
                                lastName: "",
                                mobile: "",
                            });
                        }}
                    />
                </View>

                <View style={{ width: "90%", gap: 10 }}>
                    <FormInputWithLabel
                        label="First Name"
                        value={formState.firstName}
                        setValue={(value) =>
                            handleFormChange("firstName", value)
                        }
                        inputOptions={{
                            autoComplete: "given-name",
                        }}
                    />
                    <FormInputWithLabel
                        label="Last Name"
                        value={formState.lastName}
                        setValue={(value) =>
                            handleFormChange("lastName", value)
                        }
                        inputOptions={{
                            autoComplete: "family-name",
                        }}
                        showAsterisk={true}
                    />
                    <FormInputWithLabel
                        label="Mobile"
                        value={formState.mobile}
                        setValue={(value) => handleFormChange("mobile", value)}
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
                            fontFamily: "NunitoBold",
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
                            setFormState({
                                ...formState,
                                street: "",
                                city: "",
                                stateOrProvince: "",
                                zipOrPostalCode: "",
                                country: "",
                            });
                        }}
                    />
                </View>

                <View style={{ width: "90%", gap: 10 }}>
                    <FormInputWithLabel
                        label="Street"
                        value={formState.street}
                        setValue={(value) => handleFormChange("street", value)}
                        inputOptions={{
                            autoComplete: "street-address",
                        }}
                    />
                    <FormInputWithLabel
                        label="City"
                        value={formState.city}
                        setValue={(value) => handleFormChange("city", value)}
                        inputOptions={{
                            autoComplete: "address-line2",
                        }}
                    />
                    <FormInputWithLabel
                        label="State/Province"
                        value={formState.stateOrProvince}
                        setValue={(value) =>
                            handleFormChange("stateOrProvince", value)
                        }
                        inputOptions={{
                            autoComplete: "address-line2",
                        }}
                    />
                    <FormInputWithLabel
                        label="Zip/Postal Code"
                        value={formState.zipOrPostalCode}
                        setValue={(value) =>
                            handleFormChange("zipOrPostalCode", value)
                        }
                        inputOptions={{
                            autoComplete: "postal-code",
                            inputMode: "numeric",
                        }}
                    />
                    <FormInputWithLabel
                        label="Country"
                        value={formState.country}
                        setValue={(value) => handleFormChange("country", value)}
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
                            fontFamily: "NunitoBold",
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
                            setFormState({
                                ...formState,
                                currentJobTitle: "",
                                skillSet: "",
                            });
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
                        setValue={(value) => {
                            handleFormChange("currentJobTitle", value);
                        }}
                    />

                    <FormInputWithLabel
                        label="Skill Set"
                        value={formState.skillSet}
                        setValue={(value) =>
                            handleFormChange("skillSet", value)
                        }
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
                            fontFamily: "NunitoBold",
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
                            fontFamily: "NunitoBold",
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
                            fontFamily: "NunitoBold",
                            fontSize: SIZES.large,
                            width: "80%",
                            textAlign: "left",
                        }}
                    >
                        Attachment Information
                    </Text>
                    <Text
                        style={{
                            fontFamily: "NunitoRegular",
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
                                fontFamily: "NunitoRegular",
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
