import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ icon, dimension, handlePress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            {icon}
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;
