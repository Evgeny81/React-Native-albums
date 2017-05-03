import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Linking

} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// It's possible to pass value of button:
// 1. By props
// 2. As a child element (this example)

const AlbumDetails = ({album}) => {
    const { title, artist, thumbnail_image, image, url } = album;// destruction of props to get rid of "props.albums"
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles ={
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,//to make image take full width of the screen
        flex: 1,//to make image take full width of the screen
        width: null, //to make image take full width of the screen
    }
};

export default AlbumDetails;