import React, { FunctionComponent } from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 150;

type Props = {};

const images = [
    "https://www.sampritionline.com/Assets/images/main-banner1-1920x602.jpg",
    "https://www.sampritionline.com/Assets/images/main-banner1-1920x602.jpg",
    "https://www.sampritionline.com/Assets/images/main-banner1-1920x602.jpg"
];

const Banner: FunctionComponent<Props> = (props) => {

    const renderPage = (image:string,index:number) => {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }

  return <View style={styles.container}>
      <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}
      >
          {images.map((image, index) => renderPage(image, index))}
      </Carousel>
  </View>;
};

export default Banner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});
