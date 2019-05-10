import React from "react";
import { Content, View } from "native-base";
import CardBasic from "../components/CardBasic";
import CardLg from "../components/CardLg";

export default (SearchTabStrains = props => {
  return (
    <View>
      {/* {this.state.focusedStrain.map((strain, index) => {
        return (
          <CardLg
            key={index}
            name={strain.strain_name}
            img={strain.strain_img}
            rating={strain.strain_avg_rating}
            id={strain.id}
            description={strain.strain_descr}
            type={strain.strain_race}
            flavor={strain.strain_flavor}
            positive={strain.strain_positive}
            negative={strain.strain_negative}
            medical={strain.strain_medical}
            labels={strain.strain_labels}
          />
        );
      })} */}
      <Content>
        {props.apiStrains.map((strain, index) => {
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
    </View>
  );
});
