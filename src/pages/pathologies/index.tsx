import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { style } from "./styles";
import Logo from '../../assets/returnIconM.png';
import Separator from "./separador";

export default function Pathologies() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={style.test}>
          
          
          <View style={style.buttonView}>
            <TouchableOpacity onPress={() => Alert.alert("vitão adiciona a rota aí lindo")}>
              <Image style={style.returnButton} source={Logo} />
            </TouchableOpacity>
          </View>

          
          <View style={style.containerText}>
            <Text style={style.textTitle}>Zoonoses</Text>
          </View>

          
          <View style={style.test2}>
           
            <View style={style.Leptospirose}>
              <Text style={style.btnText}>Leptospirose</Text>
              <TouchableOpacity style={style.flexa} onPress={() => Alert.alert("vitão adiciona a rota aí lindo")}>
                <Image source={require('../../assets/More Than.png')} />
              </TouchableOpacity>
            </View>
            <Separator />

            
            <View style={style.Leishmaniose}>
              <Text style={style.btnText}>Leishmaniose</Text>
              <TouchableOpacity style={style.flexa} onPress={() => Alert.alert("vitão adiciona a rota aí lindo")}>
                <Image source={require('../../assets/More Than.png')} />
              </TouchableOpacity>
            </View>
            <Separator />

            
            <View style={style.Raiva}>
              <Text style={style.btnText}>Raiva</Text>
              <TouchableOpacity style={style.flexa} onPress={() => Alert.alert("vitão adiciona a rota aí lindo")}>
                <Image source={require('../../assets/More Than.png')} />
              </TouchableOpacity>
            </View>
            <Separator />

            
            <View style={style.Toxoplasmose}>
              <Text style={style.btnText}>Toxoplasmose</Text>
              <TouchableOpacity style={style.flexa} onPress={() => Alert.alert("vitão adiciona a rota aí lindo")}>
                <Image source={require('../../assets/More Than.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
