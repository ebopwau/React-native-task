import React, { useState }  from 'react';
import {View, Text, StyleSheet, Image, Modal, TouchableOpacity, Dimensions } from 'react-native';


export const ImageUnsplash = props => {

// Get the window size
    const getSize = () => {
        return {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        } 
    };    

// Initialize state of modal picture visibility 
    const [visible, setVisible] = useState(false);
    const onPress = () => setVisible(prevCount => !prevCount);

// Loading display
    const [load, setLoad] = useState(false);

    return (
        <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => onPress()}>
                    <Image
                        style={styles.img}
                        on
                        source={{
                        uri: props.src
                        }}
                    />
            </TouchableOpacity>

            <Modal visible={visible} animationType='slide'>
                <TouchableOpacity onPress={() => onPress()}>
                    <View style={styles.modalContainer}>
                        {/*If 'load' is true, shows Loading*/}
                        {
                            load && <Text
                            style={{
                                position:'absolute',
                                top: '50%',
                                zIndex: 100
                            }}
                            >
                            Loading...
                            </Text>    
                        }
                        
                        <Image
                            style={getSize()}
                            source={{
                            uri: props.srcFull
                            }}
                            resizeMode="contain"
                            onLoadStart={()=>{setLoad(true)}}
                            onLoadEnd={()=>{setLoad(false)}}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>

            <Text>
                Author: {props.name}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3
    },
    imgContainer: {
        fontFamily: '',
        alignItems: 'center',
        marginBottom: 5,
        marginHorizontal: 2,
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    modalContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})