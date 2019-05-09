import React, { Component } from "react";
import {
  WebView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Platform
} from "react-native";
import { Container, Content, Header } from "native-base";
import { NavigationActions } from "react-navigation";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import CardBasic from "../components/CardBasic";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    bookSearch: "",
    books: [],
    user: null,
    savingBook: false,

    apiStrains: [],


    hardStrains: [
      {
        img:
          "https://cdn4.iconfinder.com/data/icons/weed-marijuana-and-pot-leaf/50/24-128.png",
        name: "Blue Dream",
        aveRating: "5/7",
        wishListed: false,
        tried: true,
        id: 1
      },
      {
        img:
          "https://cdn1.iconfinder.com/data/icons/medical-cannabis-flat/64/indica-cannabis-marijuana-hemp-leaf-128.png",
        name: "Granddaddy Purple",
        aveRating: "20/4",
        wishListed: true,
        tried: false,
        id: 2
      }
    ]
  };

  componentDidMount() {
    console.log("HomeScreen triggered");
    //TODO: API call to fill apiStrains[]
    API.getStrains().then((response) => {
      // console.log("RESPONSE DATA",response.data)
      this.setState({
        apiStrains: response.data
      })
    }).then(
    console.log("this.state.API strains:",this.state.apiStrains))
  }

  handleInputChange = search => {
    this.setState({ bookSearch: search });
  };

  goHome = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Auth"
    });
    this.props.navigation.dispatch(navigateAction);
  };

  logout = () => {
    API.logoutUser()
      .then(res => this.goHome())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container style={styles.container}>
        <SearchBar
          handleInputChange={this.handleInputChange}
          search={this.searchBook}
          logout={this.logout}
        />
        <Content>
          {this.state.apiStrains.map(function(strain, index) {
            return (
              <CardBasic
                key={index}
                name={strain.strain_name}
                img={strain.img}
                aveRating={strain.strain_avg_rating}
                wishListed={strain.wishListed}
                tried={strain.tried}
                id={strain.id}
              />
            );
          })}
          </Content>
        {/*<Text>Elevated</Text>*/}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
