import React, { Component } from "react";
import {
  Tab,
  Tabs,
  View
} from "native-base";
import SearchTabStrains from "./SearchTabStrains";
import SearchTabLabels from "./SearchTabLabels";
import SearchTabAdv from "./SearchTabAdv";
import API from "../utils/API";
import SearchBar from "./SearchBar";

export default class TopTab extends Component {
  state = {
    bookSearch: "",
    books: [],
    user: null,
    savingBook: false,
    apiStrains: [],
    apiLabels: [],
    focusedStrain: []
  };

  componentDidMount() {
    API.getStrains().then(response => {
      // Pushing "real" dummy data to a selected strain for CardLg.
      // Can't push within setState, so do it above and setState to itself.
      // response.data[0] is the first object in the array.
      this.state.focusedStrain.push(response.data[0]);
      this.setState({
        // response.data is the array of objects.
        apiStrains: response.data,
        focusedStrain: this.state.focusedStrain
      });
      console.log("STATE", this.state);
    });

    API.getLabels().then(response => {
      this.setState({
        apiLabels: response.data
      });
    });
    //.catch((error)=> console.log("lul error", error))
  }

  render() {
    return (
      <View>
        <SearchBar />
        <Tabs>
          <Tab heading="Strains">
            <SearchTabStrains apiStrains={this.state.apiStrains} />
          </Tab>
          <Tab heading="Labels">
            <SearchTabLabels />
          </Tab>
          <Tab heading="Filter">
            <SearchTabAdv />
          </Tab>
        </Tabs>
      </View>
    );
  }
}
