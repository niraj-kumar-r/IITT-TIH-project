import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";
import rightIcon from "../../../assets/icons/next.png";

const AnnouncementBtn = ({ announcement }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.pureWhite,
                borderColor: COLORS.gray2,
                borderWidth: 1,
                borderRadius: SIZES.small / 2,
                marginTop: 5,
                marginBottom: 5,
                padding: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >
            <View style={{ width: "90%" }}>
                <Text numberOfLines={1}>{announcement.title}</Text>
            </View>
            <Image
                source={rightIcon}
                resizeMode="contain"
                style={{
                    height: 20,
                    width: 20,
                }}
            />
        </TouchableOpacity>
    );
};

export default AnnouncementBtn;
