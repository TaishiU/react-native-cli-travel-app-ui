import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, Button } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


const More = ({ route, navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.MoreText}>Back!</Text>
                <TouchableOpacity
                    style={styles.MoreButton}
                    onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.black} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    MoreText: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 20,
    },
    MoreButton: {
        marginHorizontal: 20,
    },
});

export default More;
