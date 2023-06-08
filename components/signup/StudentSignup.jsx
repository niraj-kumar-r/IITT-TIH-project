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
                        <Text>
                            <Text
                                style={{
                                    color: COLORS.primary,
                                    textDecorationLine: "underline",
                                }}
                            >
                                Upload your resume
                            </Text>
                            or drag and drop it here
                        </Text>
                        <Text>Only .doc, .docx, .pdf, .odt, .rtd</Text>
                        <Text>(Optional)</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default StudentSignup;
