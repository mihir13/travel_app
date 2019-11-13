import React, { Component } from "react";
import {
    Animated,
    Text,
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    Image,
    ImageBackground,
    Dimensions,
    Platform,
    SafeAreaView,
    TouchableOpacity
  } from "react-native";
  
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import MaterialIcons from "react-native-vector-icons/MaterialIcons";
  
  import * as theme from "../theme";

  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    flex: {
      flex: 0,
    },
    column: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row'
    },
    header: {
      paddingHorizontal: theme.sizes.padding,
      paddingTop: theme.sizes.padding,
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    back: {
      width: theme.sizes.base * 3,
      height: theme.sizes.base * 3,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    content: {

    },
    contentHeader: {
      backgroundColor: 'transparent',
      paddingVertical: theme.sizes.padding * 2,
      padding: theme.sizes.padding,
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: theme.sizes.radius,
      borderTopRightRadius: theme.sizes.radius,
      marginTop: -theme.sizes.padding / 2,
    },
    avatar: {
      position: 'absolute',
      top: -theme.sizes.margin,
      right: theme.sizes.margin,
      width: theme.sizes.padding * 2,
      height: theme.sizes.padding * 2,
      borderRadius: theme.sizes.padding,
    },
    shadow: {
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    dotsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 36,
      right: 0,
      left: 0
    },
    dots: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 6,
      backgroundColor: theme.colors.gray,
    },
    title: {
      fontSize: theme.sizes.font * 2,
      fontWeight: 'bold'
    },
    description: {
      fontSize: theme.sizes.font * 1.2,
      lineHeight: theme.sizes.font * 2,
      color: theme.colors.caption
    }
  });
  
  class Profile extends Component {
    scrollX = new Animated.Value(0);
    
    static navigationOptions = ({ navigation }) => {
      return {
        header: (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" color={theme.colors.caption} size={theme.sizes.font * 1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-horiz" color={theme.colors.caption} size={theme.sizes.font * 1.5} />
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true,
    }
  }

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam('article');

    return (
      <View style={styles.flex}>
        <View style={styles.flex}>
        <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
          >
            </ScrollView>
            </View>
            <View style={[styles.flex, styles.contentHeader]}>
            <Text style={[styles.flex, styles.contentHeader,
            { fontSize: 20 }]}>
              Profile Page 
              </Text>
             
              </View>
      </View>
      )
    }
  }

  export default Profile;