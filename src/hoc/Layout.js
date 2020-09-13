import React from 'react';
import {View, StyleSheet} from 'react-native';

const Layout = props => {

    return (
            <View style={styles.container}>
                {props.children}
            </View>   
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});