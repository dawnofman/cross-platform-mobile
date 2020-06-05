import React, { Component } from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
    Modal
} from 'react-native';

export default class LoadingScreen extends Component {
    render() {
        return (
            <Modal
                visible={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                            animating={true} />
                        <Text>Loading..</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        height: 100,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

});