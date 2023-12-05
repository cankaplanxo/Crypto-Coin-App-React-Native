// App.js

import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import Item from "./Item";
import fetchData from "./Api";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => setData(data))
      .catch(error => console.error('App.js - Error:', error));
  }, []);

  // Stil verilerini tanımladık
  const titleStyle = {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  };

  return (
    <SafeAreaView>
      <Text style={titleStyle}>
        Coins
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;