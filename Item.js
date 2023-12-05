//Item.js
import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const Item = ({ item }) => {
    return (

        <SafeAreaView style={styles.container}>
            <Image
                source={{
                    uri: `https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`,
                }}
                style={styles.image}
            />
            <View style={styles.texts}>
                <Text>{item.symbol}</Text>
                <Text>{item.name}</Text>
                <Text>{item.priceUsd}$</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: "center",
    },
    image: {
        width: 64,
        height: 64,
        marginRight: 16,
    },
    texts: {
        flex: 1,
        marginStart: 8,
    },
});

export default Item;
