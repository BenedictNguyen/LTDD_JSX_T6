import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ImageComponent } from 'react-native';
import Arrow1 from '../assets/screen1/arrow2.png';
import Home from '../assets/screen1/home.png';
import Index from '../assets/screen1/index2.png';
import Arrow2 from '../assets/screen1/arrow.png';
import GioHang from '../assets/screen1/giohang.png';
const Screen2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch mock API data
  const fetchData = async () => {
    try {
      const response = await fetch('https://66f4d07977b5e889709a8de9.mockapi.io/Banhang');
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
      <Image source={{ uri: item.image }} style={styles.image}/>
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
      {/* Header: Taskbar */}
      <View style = {styles.taskBar}>
        <TouchableOpacity style = {styles.taskBarHeadedArrow}>
          <Image source={Arrow2} alt='arrow'/>
        </TouchableOpacity>
        <Text style = {styles.taskBarHeadedChat}>Chat</Text>
        <TouchableOpacity style = {styles.taskBarHeadedGioHang}>
          <Image source={GioHang} alt='giohang'/>
        </TouchableOpacity>
      </View>
      
      {/* Body */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
      {/* Footer: TaskBar */}
      <View style = {styles.taskBar}>
        <TouchableOpacity style = {styles.taskBarButtonArrow}>
          <Image source={Arrow1} alt='arrow2'/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Home} alt='home'/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.taskBarButtonIndex}>
          <Image source={Index} alt='index2'/>
        </TouchableOpacity>
      </View>
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
  taskBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    //marginTop: 20
  },
  // Begin header: taskbar
  taskBarHeadedArrow: {
    paddingLeft: 20
  },
  taskBarHeadedChat: {
    fontSize: 18,
    color: 'white'
  },
  taskBarHeadedGioHang: {
    paddingRight: 20
  },
  // End header: taskbar
  
  // Begin footer: taskbar
  taskBarButtonArrow: {
    paddingLeft: 20
  },
  taskBarButtonIndex: {
    paddingRight: 20
  },
  // End footer: task Bar
  
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
export default Screen2;