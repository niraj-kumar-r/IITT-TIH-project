import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const AccentButton = ({
    label,
    onSubmit,
    accentColor,
    textColor,
    width,
    textStyle,
}) => {
    return (
        <TouchableOpacity onPress={onSubmit}>
            <Text
                style={{
                    width: width ?? "100%",
                    textAlign: "center",
                    padding: SIZES.xSmall,
                    backgroundColor: accentColor ?? COLORS.tertiary,
                    color: textColor ?? COLORS.pureWhite,
                    marginVertical: SIZES.large,
                    borderRadius: SIZES.medium / 2,
                    fontFamily: "NunitoSemiBold",
                    ...textStyle,
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default AccentButton;
