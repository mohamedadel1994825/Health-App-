import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import React from 'react'
export default Header = ({ onPress, title, backTitle }) => {
    const btnRight = <Icon
        name='chevron-left'
        type='feather'
        color={MyColors.whiteColor}
        size={35}
    />
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={styles.backTitleView} >
                    <View style={styles.backTitleTextView}>
                        <Text style={styles.backtitleText}>{backTitle}</Text>
                    </View>
                    <TouchableOpacity onPress={onPress}
                     style={styles.backBtn}>
                        {btnRight}
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: Width, height: Width * .152,
        justifyContent: 'center', flexDirection: 'row',
        alignItems: 'center', backgroundColor: MyColors.tabActiveColor,
      
    },
    content: {
        width: '100%', height: '100%',
        justifyContent: 'space-between', flexDirection: 'row',
        alignItems: 'center', backgroundColor: MyColors.tabActiveColor
    },
    backTitleView: {
        width: Width * .3, height: '100%',
        justifyContent: 'flex-end', flexDirection: 'row',
        alignItems: 'center', backgroundColor: MyColors.tabActiveColor
    },
    backBtn: {
        width: Width * .1, height: '100%', flexDirection: 'row',
        justifyContent: 'flex-end', alignItems: 'center',

    },
    backTitleTextView: {
        width: Width * .15, height: '100%', flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
    },
    title: {
        width: Width * .7, height: '100%',
        justifyContent: 'flex-end', flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        color: MyColors.whiteColor,
        fontSize: 18,
        marginHorizontal: Width * .11
    },
    backtitleText: {
        color: MyColors.whiteColor,
        fontSize: 18,
    },
});