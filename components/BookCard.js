import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Icon } from 'react-native-elements'
import React from 'react'
export default BookCard = ({ onPress,name,details,iconPath}) => {
    const myIcon =   <Image
    source={iconPath }
    tintColor={MyColors.tabActiveColor}
    style={{ width: 35, height: 35,      
        }} />
    const btnRight = <Icon
    name='chevron-right'
    type='feather'
    color={MyColors.tabActiveColor}
    size={33}
  />
    return (
        <TouchableOpacity
            onPress={
                onPress

            }
            activeOpacity={.9}
            style={styles.btnCard}>
         
            <View style={styles.backBtn}>
                {btnRight}
            </View>
            <View style={styles.textImageParent}>
                  <View style={styles.txtView}>
                <Text style={styles.textUp}>{name}</Text>
                <Text style={styles.textDown}>{details}</Text> 
                               </View>
                <View style={{
                    width: Width * .13, height: Width * .13, borderRadius: Width * .1,
                    borderWidth: Width * .005,borderColor:'transparent', 
                    justifyContent: 'center', alignItems: 'center',backgroundColor:MyColors.circleIcon
                }}>
                    {myIcon}
                </View>
               
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnCard: {
        width: Width * .9, height: Width * .18, marginTop: Width * .06,
        justifyContent: 'space-between', flexDirection: 'row',
        alignItems: 'center', 
        shadowOpacity: 10, shadowRadius: Width * .02,
       
    },
    backBtn:{
        width: Width * .1,height:'100%',flexDirection:'row',
        justifyContent:'flex-start',alignItems:'center',backgroundColor:MyColors.whiteColor
    },
    textImageParent:{
        height:'100%', 
        width: Width * .8,flexDirection:'row',
        justifyContent:'space-between',alignItems:'center'
    },

    txtView: {
        width: Width * .63, height:'100%',
        justifyContent:'center',alignItems:'flex-end'
    },
    textUp:{
        color:MyColors.specialityColor,
        fontSize: 17,
        fontWeight: '500',
        
    },
    textDown:{
        color:MyColors.gray1,
        fontSize: 17,
        fontWeight: '500',
        
    }
});