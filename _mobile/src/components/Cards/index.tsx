import React from "react";
import {
    View,
    TouchableOpacity,
    ImageBackground,
    ImageSourcePropType,
    TouchableOpacityProps,
    Text
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./style";
import { THEME } from "../../theme";

export interface CardsProps {
    id: string,
    title: string,
    _count: {
        ads: number,
    },
    bannerUrl: string
}

interface Props extends TouchableOpacityProps {
    data: CardsProps
}
export function Cards({ data, ...rest }: Props) {

    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <ImageBackground
                style={styles.cover}
                source={{ uri: data.bannerUrl != ""? data.bannerUrl : undefined }}
            >
                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>
                        {data.title}
                    </Text>
                    <Text style={styles.ads}>
                        {data._count.ads} anuncios
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity >
    )
}