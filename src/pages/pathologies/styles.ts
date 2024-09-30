import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
 
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#BABABA',
    flex: 1,
  },

  
  buttonView: {
    marginStart: '5%',
    marginTop: '18%',
    width: 50,
    backgroundColor: '#BABABA',
  },


  topContent: {
    alignItems: "center",
    flexDirection: "row",
    height: "14%",
    width: "100%",
  },

 
  topIten: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },

 
  headerText: {
    fontSize: 20,
    color: themes.colors.darkGreen,
    fontFamily: themes.fonts.title,
  },


  headerContent: {
    width: "100%",
    marginBottom: 5,
  },

 
  infoText: {
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: themes.colors.gray,
  },

  
  registerContainer: {
    height: "30%",
    width: "99%",
    backgroundColor: themes.colors.white,
    borderRadius: 12,
  },

  
  inputContent: {
    margin: "4%",
    justifyContent: "space-between",
    flex: 1,
  },

 
  dataInput: {
    height: "15%",
    borderBottomWidth: 1,
    borderBottomColor: themes.colors.gray,
    marginTop: 5,
  },

 
  inputStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: themes.fonts.text,
    fontWeight: "regular",
  },

 
  registerBtn: {
    height: "6%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.colors.orange,
    borderRadius: 8,
    marginTop: "4%",
  },

 
  btnText: {
    fontSize: 20,
    fontFamily: themes.fonts.text,
  },

  
  returnButton: {
    height: 30,
    width: 30,
  },


  textTitle: {
    color: "#34502B",
    fontSize: 20,
    fontWeight: 'bold',
  },

 
  buttonContainer: {
    backgroundColor: '#fff',
    marginTop: '50%',
    marginRight: '50%',
  },

 
  test: {
    width: '100%',
    height: '15%',
  },


  containerText: {
    marginStart: '40%',
    width: '80%',
    marginTop: '-7%',
  },

  
  test2: {
    backgroundColor: '#fff',
    width: '85%',
    height: '180%',
    marginStart: '8%',
    marginTop: '10%',
    borderRadius: 9,
  },

  
  Leptospirose: {
    marginStart: '7%',
    marginBottom: '5%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  Leishmaniose: {
    marginStart: '7%',
    marginBottom: '5%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  Raiva: {
    marginStart: '7%',
    marginBottom: '5%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  Toxoplasmose: {
    marginStart: '7%',
    marginBottom: '5%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  
  flexa: {
    marginEnd: '7%',
  },
});
