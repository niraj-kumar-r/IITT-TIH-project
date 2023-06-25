import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { COLORS, SIZES, FONT } from "../../../constants/theme";

const FormPickerInput = ({
    label,
    optionsList,
    value,
    handleChange,
    handleBlur,
    errors,
    touched,
    showAsterisk = false,
    inputWidth,
}) => {
    return (
        <View
            style={{
                gap: SIZES.xSmall / 1.5,
                width: inputWidth ?? "100%",
                alignItems: "center",
            }}
        >
            <Text style={{ fontFamily: FONT.bold, width: "90%" }}>
                {label}
                {showAsterisk ? (
                    <Text style={{ color: COLORS.tertiary }}>*</Text>
                ) : null}
            </Text>
            <View
                style={{
                    borderWidth: 0.5,
                    borderRadius: SIZES.medium / 2,
                    width: "90%",
                    justifyContent: "center",
                }}
            >
                <Picker
                    selectedValue={value}
                    onValueChange={handleChange}
                    onBlur={handleBlur}
                    prompt={label}
                >
                    {optionsList?.map((area, index) => (
                        <Picker.Item value={area} key={index} label={area} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default FormPickerInput;
