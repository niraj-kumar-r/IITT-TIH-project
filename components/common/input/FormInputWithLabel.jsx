import React from "react";
import { View, Text, TextInput } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants/theme";

const FormInputWithLabel = ({
    label,
    value,
    handleChange,
    handleBlur,
    error,
    touched,
    placeholder,
    icon,
    inputOptions,
    inputWidth,
    showAsterisk = false,
}) => {
    const validationColor = !touched
        ? "black"
        : error
        ? COLORS.tertiary
        : "black";
    return (
        <View style={{ gap: SIZES.xSmall / 1.5, width: inputWidth }}>
            <Text style={{ fontFamily: FONT.bold }}>
                {label}
                {showAsterisk ? (
                    <Text style={{ color: COLORS.tertiary }}>*</Text>
                ) : null}
            </Text>

            <View
                style={{
                    borderWidth: 0.5,
                    borderRadius: SIZES.medium / 2,
                    borderColor: validationColor,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {icon !== undefined ? (
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: SIZES.xSmall,
                        }}
                    >
                        {icon}
                    </View>
                ) : null}
                <TextInput
                    value={value}
                    placeholder={placeholder ?? ""}
                    onChangeText={handleChange}
                    onBlur={handleBlur}
                    style={{
                        width: icon !== undefined ? "85%" : "93%",
                        marginHorizontal: SIZES.xSmall,
                        paddingVertical: SIZES.xSmall / 2,
                    }}
                    {...inputOptions}
                />
            </View>
        </View>
    );
};

export default FormInputWithLabel;
