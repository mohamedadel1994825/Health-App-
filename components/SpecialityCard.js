
import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { setSpecialityState } from './actions/usersActions';
import React ,{Component}from 'react'
class SpecialityCard extends Component {
constructor(props) {
    super(props);
    this.state = {
        onPress:this.props.onPress,
        iconPath:this.props.iconPath,
        btnWidth:this.props.btnWidth,
        btnHeight:this.props.btnHeight,
        MarginLeft:this.props.MarginLeft,
        pressed:false,
        name:this.props.name
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.SpecialityState) {
// this.setState({pressed:true})
    }
  }
    render(){
        const{onPress,iconPath,btnWidth,btnHeight,MarginLeft,name,pressed}=this.state
        const myIcon = <Image
    source={iconPath }
    tintColor={MyColors.specialityIconColor}
    style={{ width: 26, height: 26,      
        }} />
        return (
            <TouchableOpacity
                onPress={
                    onPress
    
                }
                activeOpacity={.9}
                style={{ width:btnWidth, height:btnHeight,
                    justifyContent: 'space-evenly', flexDirection: 'row',
                    alignItems: 'center',marginLeft:MarginLeft,
                    borderColor:MyColors.borderColorSpeciality,
                    borderWidth:Width*.005,
                    backgroundColor:this.props.SpecialityState?MyColors.tabActiveColor:MyColors.specialityInnerColor,
                    borderRadius:Width*.1}}>
                <View style={styles.textImageParent}>
                      <View style={styles.txtView}>
                    <Text style={styles.textUp}>{name}</Text> 
                       </View>
                    <View style={{
                        width:Width*.1, height: Width * .1,
                        justifyContent: 'center', alignItems: 'center',
                    }}>
                        {myIcon}
                    </View>
                   
                </View>
            </TouchableOpacity>
        ) 
    }
    
}
const mapStateToProps = state => ({
    SpecialityState: state.users.SpecialityState,
});
export default connect(
    mapStateToProps,
    { setSpecialityState }
)(SpecialityCard);
const styles = StyleSheet.create({
    backBtn:{
        width: Width * .1,height:'100%',flexDirection:'row',
        justifyContent:'flex-start',alignItems:'center',backgroundColor:MyColors.whiteColor
    },
    textImageParent:{
        height:'60%', 
        width:'90%',flexDirection:'row',
        justifyContent:'space-between',alignItems:'center',
    },

    txtView: {
        width:'70%', height:'100%',
        justifyContent:'center',alignItems:'flex-start'
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
// import { MyColors, Width } from '..';
// import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
// import { Icon } from 'react-native-elements'
// import React from 'react'
// export default SpecialityCard = ({ onPress,name,details,iconPath,
//     btnWidth,btnHeight,MarginLeft,pressed}) => {
//     const myIcon =   <Image
//     source={iconPath }
//     tintColor={MyColors.specialityIconColor}
//     style={{ width: 26, height: 26,      
//         }} />
//     const btnRight = <Icon
//     name='chevron-right'
//     type='feather'
//     color={MyColors.tabActiveColor}
//     size={33}
//   />
//     return (
//         <TouchableOpacity
//             onPress={
//                 onPress

//             }
//             activeOpacity={.9}
//             style={{ width:btnWidth, height:btnHeight,
//                 justifyContent: 'space-evenly', flexDirection: 'row',
//                 alignItems: 'center',marginLeft:MarginLeft,
//                 borderColor:MyColors.borderColorSpeciality,
//                 borderWidth:Width*.005,
//                 backgroundColor:onPress?MyColors.tabActiveColor:MyColors.specialityInnerColor,
//                 borderRadius:Width*.1}}>
//             <View style={styles.textImageParent}>
//                   <View style={styles.txtView}>
//                 <Text style={styles.textUp}>{name}</Text> 
//                    </View>
//                 <View style={{
//                     width:Width*.1, height: Width * .1,
//                     justifyContent: 'center', alignItems: 'center',
//                 }}>
//                     {myIcon}
//                 </View>
               
//             </View>
//         </TouchableOpacity>
//     )
// }
// const styles = StyleSheet.create({
//     backBtn:{
//         width: Width * .1,height:'100%',flexDirection:'row',
//         justifyContent:'flex-start',alignItems:'center',backgroundColor:MyColors.whiteColor
//     },
//     textImageParent:{
//         height:'60%', 
//         width:'90%',flexDirection:'row',
//         justifyContent:'space-between',alignItems:'center',
//     },

//     txtView: {
//         width:'70%', height:'100%',
//         justifyContent:'center',alignItems:'flex-start'
//     },
//     textUp:{
//         color:MyColors.specialityColor,
//         fontSize: 17,
//         fontWeight: '500',
        
//     },
//     textDown:{
//         color:MyColors.gray1,
//         fontSize: 17,
//         fontWeight: '500',
        
//     }
// });