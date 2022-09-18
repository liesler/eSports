import React, { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo-nlw-esports.png"
import { Background } from "../../components/Background";
import { Cards, CardsProps } from "../../components/Cards";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";

export function Home() {
    const navigation = useNavigation();
    const [games, setGames] = useState<CardsProps[]>([])

    function handleOpenGaming({ id, title, bannerUrl }: CardsProps) {
        navigation.navigate('game', { id, title, bannerUrl });
    }

    useEffect(() => {
        fetch('http://192.168.3.17:3333/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, [])
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}
                />

                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />

                <FlatList
                    data={games}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Cards
                            data={item}
                            onPress={() => handleOpenGaming(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentList}
                />

            </SafeAreaView>
        </Background>
    )
}