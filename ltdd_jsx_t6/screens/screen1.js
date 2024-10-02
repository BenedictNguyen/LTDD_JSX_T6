import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const ChatScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch mock API data
  const fetchData = async () => {
    try {
      const response = await fetch('https://66f4d07977b5e889709a8de9.mockapi.io/BanHang');
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>Shop: <Text style={styles.shopHighlight}>{item.shop}</Text></Text>
      </View>
      <TouchableOpacity style={styles.chatButton} onPress={() => alert('Chat with ' + item.shop)}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#ff0000" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333', 
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    color: 'white',
  },
  shopName: {
    fontSize: 14,
    color: 'white',
  },
  shopHighlight: {
    color: 'red', // Red color for shop name to match the design
  },
  chatButton: {
    backgroundColor: 'red', // Red button
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;