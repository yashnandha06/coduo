import React from 'react';
import {
  Image,
  ScrollView,
  View,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import style from './intro.style';
import useIntro from './useIntro';
import imageIndex from '../../assets/imageIndex';
import Button from '../../components/comman/Button/Button';
import * as Animatable from 'react-native-animatable';
import CustomStatusbar from '../../components/comman/customStatusbar/CustomStatusbar';
import colors from '../../theme/colors';

const Intro = () => {
  const {
    sliderState,
    setSliderPage,
    setSliderState,
    scrollViewRef,
    handleDotClick,
    onPress,
    onPressGetStart,
  } = useIntro({});
  const {currentPage: pageIndex} = sliderState;
  return (
    <View style={style.container}>
      <CustomStatusbar
        translucent
        backgroundColor={colors.transparent}
        barStyle="light-content"
      />
      <ScrollView
        //@ts-ignore
        ref={scrollViewRef}
        style={{flex: 1}}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}>
        {/* First Slider */}
        <View style={style.introSlide}>
          <Image
            source={imageIndex.introBanner}
            style={style.intoSlidesImage}
          />

          <View style={style.contentContainer}>
            <Text style={style.introTitle}>
              The Future of JavaScript App Development
            </Text>

            <Text style={style.introDescription}>
              JavaScript is a simple and powerful tool that allows you to create
              dynamic and interactive apps that respond to user input in real
              time. With JavaScript Flow, you can control the flow of your app,
              making it easy to create complex and engaging experience
            </Text>
          </View>
        </View>
        <View style={style.introSlide}>
          <Image
            source={imageIndex.introBanner2}
            style={style.intoSlidesImage}
          />

          <View style={style.contentContainer}>
            <Text style={style.introTitle}>
              Web 3.0: The Future of the Internet
            </Text>

            <Text style={style.introDescription}>
              Web 3.0 is the next generation of the World Wide Web, built on
              blockchain technology. It is a decentralized web that is owned and
              controlled by its users, rather than by large corporations. Web
              3.0 promises to be more secure, transparent, and efficient than
              the current web.
            </Text>
          </View>
        </View>

        <View style={style.introSlide}>
          <Image
            source={imageIndex.introBanner4}
            style={style.intoSlidesImage}
          />

          <View style={style.contentContainer}>
            <Text style={style.introTitle}>AI: The Future of Technology</Text>

            <Text style={style.introDescription}>
              AI-powered chatbot are revolutionizing the way businesses interact
              with their customers. These chatbot can answer customer questions,
              resolve issues, and even sell products. As AI technology continues
              to develop, chatbot will become even more sophisticated and
              capable
            </Text>
          </View>
        </View>

        <View style={style.introSlide}>
          <Image
            source={imageIndex.introBanner3}
            style={style.intoSlidesImage}
          />

          <View style={style.contentContainer}>
            <Text style={style.introTitle}>
              Automation: The Key to Productivity and Efficiency
            </Text>

            <Text style={style.introDescription}>
              Automation is changing the way we work, and with it comes both
              pros and cons. On the one hand, automation can lead to increased
              productivity and efficiency. On the other hand, it can also lead
              to job displacement and a loss of control over our work.
            </Text>
          </View>

          <View style={style.buttonContainer}>
            <Button label="Get Started" onPress={() => onPressGetStart()} />

            <TouchableOpacity
              style={style.loginButtonContainer}
              onPress={() => onPress()}>
              <Text>I already have an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* indicators Style */}
      <View style={style.paginationWrapper}>
        {Array.from(Array(4).keys()).map((key, index) => (
          <TouchableOpacity
            onPress={() => handleDotClick(index)}
            style={[
              style.paginationDots,
              {
                opacity: pageIndex === index ? 1 : 0.2,
                width: pageIndex === index ? 30 : 10,
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default Intro;
