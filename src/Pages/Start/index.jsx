import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Start() {
  
  return (
    
    <View>
      <ScrollView showVerticalScrollIndicator={false}>
        <view>
          <Image source={require("../../assets" / icons / logo3.png")} />
              <Text>
                Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o 
                melhor nível
              </Text>
        </view>
      </scrollView>
    </View>
  );
}