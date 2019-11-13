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
  TouchableOpacity
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";

import * as theme from "../theme";

const { width, height } = Dimensions.get("window");
const mocks = [
  {
    id: 1,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/71.jpg"
    },
    saved: true,
    location: "Dubrovnik, Croatia",
    temperature: 25,
    title: "Dubrovnik",
    description:
      "Dubrovnik is a city on the Adriatic Sea in southern Croatia. It is one of the most prominent tourist destinations in the Mediterranean Sea. Its total population is 42,615 in 2011.",
    rating: 4.6,
    reviews: 3242,
    preview:
      "https://images.unsplash.com/photo-1533331639-74f1863c7b3c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1533331639-74f1863c7b3c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565784623522-7fdf499a94a4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572207785266-d6cc1a7fda1f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519156867924-82c1846c390d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/72.jpg"
    },
    saved: false,
    location: "Split, Croatia",
    temperature: 28,
    title: "Split",
    description:
      "Split is the second-largest city of Croatia and the largest city of the region of Dalmatia, with about 250,000 people living in its urban area. It lies on the eastern shore of the Adriatic Sea and is spread over a central peninsula and its surroundings. An intraregional transport hub and popular tourist destination, the city is linked to the Adriatic islands and the Apennine peninsula.",
    rating: 4.4,
    reviews: 3102,
    preview:
      "https://images.unsplash.com/photo-1555990538-1149ac2dac44?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555990538-1149ac2dac44?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555990538-7d6f0f0b8f07?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502542068853-07bc5d568c4e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568114145601-ceebf6bf063f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/73.jpg"
    },
    saved: true,
    location: "Hvar, Croatia",
    temperature: 32,
    title: "Hvar",
    description:
      "Hvar is a Croatian island in the Adriatic Sea, located off the Dalmatian coast, lying between the islands of Brač, Vis and Korčula. Approximately 68 km (42.25 mi) long,[1] with a high east-west ridge of Mesozoic limestone and dolomite, the island of Hvar is unusual in the area for having a large fertile coastal plain, and fresh water springs.",
    rating: 3.2,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1475684445162-3b4f94c831b6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1475684445162-3b4f94c831b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1474399786282-6bcb918a794d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475684404829-ede208404728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1474398250613-33a0daed25d7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/74.jpg"
    },
    location: "Zadar, Croatia",
    temperature: 34,
    title: "Zadar",
    description:
      "Zadar is the oldest continuously-inhabited Croatian city. It is situated on the Adriatic Sea, at the northwestern part of Ravni Kotari region. The city population was 75,082 in 2011, making it the second-largest city of the region of Dalmatia and the fifth-largest city in the country.",
    rating: 5.0,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1533552264244-b4324b0c8958?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1533552264244-b4324b0c8958?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568714710249-3b6190eb1d91?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568842623456-0f87e45abb22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571046604668-2bea2ccd9fe0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 5,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    location: "Zagreb, Croatia",
    temperature: 20,
    title: "Zagreb",
    description:
      "Zagreb is the capital and the largest city of Croatia. It is located in the northwest of the country, along the Sava river, at the southern slopes of the Medvednica mountain. The population of the Zagreb urban agglomeration is about 1.2 million, approximately a quarter of the total population of Croatia.",
    rating: 4.9,
    reviews: 3252,
    preview:
      "https://images.unsplash.com/photo-1563708848350-2b7f37174b94?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1563708848350-2b7f37174b94?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549163986-da279e1f27c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543438853-7932005c6012?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1538738543915-5b8fabe9d834?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: "space-between",
    alignItems: "center",
  },
  articles: {

  },
  destinations: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  destination: {
    width: width - (theme.sizes.padding * 2),
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - (theme.sizes.padding * 4 )) / (Platform.OS === 'ios' ? 3.7 : 3),
    backgroundColor: theme.colors.white,
    width: (width - (theme.sizes.padding * 4)),
  },
  recommended: {
    
  },
  recommendedHeader: {
    justifyContent: "space-between", 
    alignItems: "flex-end",
    paddingHorizontal: theme.sizes.padding,
  },
  recommendedList: {
   
  },
  recommendation: {
    width: (width - theme.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.sizes.padding / 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  recommedationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - theme.sizes.padding * 2) / 2,
    height: (width - theme.sizes.padding * 2) / 2,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: "bold"
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: "transparent"
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 6.25,
    borderColor: theme.colors.active
  }
});

class Articles extends Component {
  scrollX = new Animated.Value(0);
  static navigationOptions = ({ navigation, item }) => {
    return {
      header: (
        <View style={[styles.flex, styles.row, styles.header,]}>
          <View>
            <Text style={{ color: theme.colors.caption }}>Search for place</Text>
            <Text style={{ fontSize: theme.sizes.font * 2 }}>Croatia</Text>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Profile', { profile: item })}>
              <Image style={styles.avatar} source={{ uri: "https://randomuser.me/api/portraits/women/79.jpg" }}
              />
              </TouchableOpacity>
              </View>
              </View>
      )
    }
  };

  renderDots() {
    // function used to show active dot
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          {
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }
        ]}>
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: borderWidth }]}
            />
          );
        })}
      </View>
    )
  }

  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return (
      stars.map((value, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? "active" : "gray"]}
          />
          )
      })
    )
  }

  renderDestinations = () => {
    // returns a FlatList of all elements of Destinations
    return (
      <View style={[styles.flex, styles.column, styles.destinations]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow: "visible", height: 280 }}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX }} }
          ])}
          renderItem={({ item }) => this.renderDestination(item)}
        />
        {this.renderDots()}
      </View>
    );
  };

  renderDestination = item => {
    const { navigation } = this.props;
    // returns a destination image tab
    return (
      <TouchableOpacity activeOpacity={0.8} 
      onPress={() => navigation.navigate('Article',{ article: item })}>
      <ImageBackground
        style={[styles.flex, styles.destination, styles.shadow, ]}
        imageStyle={{ borderRadius: theme.sizes.radius, }}
        source={{ uri: item.preview }}>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View style={{ flex: 0 }}>
            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          </View>
          <View
            style={[
              styles.column,
              { flex: 2, paddingHorizontal: (theme.sizes.padding / 2) }
            ]}>
            <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
              {item.user.name}
            </Text>
            <Text style={{ color: theme.colors.white }}>
              <Octicons
                name="location"
                size={theme.sizes.font * 0.8}
                color={theme.colors.white}
              />
              <Text> {item.location}</Text>
            </Text>
          </View>
          <View
            style={{
              flex: 0,
              justifyContent: "center",
              alignItems: "flex-end"
            }}>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        </ImageBackground>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text
            style={{
              fontSize: theme.sizes.font * 1.25,
              fontWeight: "500",
              paddingBottom: 8,
            }}>
            {item.title}
          </Text>
          <View
            style={[ styles.row,
              { justifyContent: "space-between", alignItems: "flex-end" }
            ]}>
            <Text style={{ color: theme.colors.caption }}>
              {item.description.split('').slice(0,35)}...
            </Text>
            <FontAwesome
              name="chevron-right"
              size={theme.sizes.font * 0.75}
              color={theme.colors.caption}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View
          style={[
            styles.row,
            styles.recommendedHeader,
          ]}
        >
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
          <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment='center'
            style={[styles.shadow, { overflow: 'visible' }]}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderRecommendation(item, index)}
          />
        </View>
      </View>
    );
  };

  renderRecommendation = (item, index) => {
    const { destinations } = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View
        style={[
          styles.flex, styles.column, styles.recommendation,
          index === 0 ? { marginLeft: theme.sizes.margin } : null,
          isLastItem ? { marginRight: theme.sizes.margin / 2 } : null
        ]}
      >
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image
            style={[styles.recommendationImage]}
            source={{ uri: item.preview }}/>
          <View
            style={[ styles.flex, styles.row, styles.recommendationOptions ]}
          >
            <Text style={[styles.recommedationTemp]}>{item.temperature}˚C</Text>
            <FontAwesome
              name={item.saved ? "bookmark" : "bookmark-o"}
              size={theme.sizes.font * 1.25}
              color={theme.colors.white}
            />
          </View>
        </View>
        <View style={[ styles.flex, styles.column, styles.shadow, 
        { justifyContent: "space-evenly", padding: theme.sizes.padding / 2 } ]}>
          <Text
            style={{
              fontSize: theme.sizes.font * 1.25,
              fontWeight: "500",
              paddingBottom: theme.sizes.padding / 4.5,
            }}>
            {item.title}
          </Text>
          <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
          <View
            style={[
              styles.row,
              { alignItems: "center", justifyContent: "space-between", marginTop: theme.sizes.margin }
            ]}>
            {this.renderRatings(item.rating)}
            <Text style={{ color: theme.colors.active }}>
              {item.rating}
              </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        {this.renderDestinations()}
        {this.renderRecommended()}
      </ScrollView>
    );
  }
}

Articles.defaultProps = {
  destinations: mocks
};

export default Articles;
