import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonIcon from '../assets/images/Buttons/Button_Notification.svg';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import OneByOneButton from '../components/Buttons/OneByOneButton';
import TwoByOneButton from '../components/Buttons/TwoByOneButton';
import ThreeByOneButton from '../components/Buttons/ThreeByOneButton';
import TwoByTwoButton from '../components/Buttons/TwoByTwoButton';

export default function HomeScreen() {
    const navigation = useNavigation();

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <View style={styles.shadowBox}>
                <Image
                    source={require('../assets/images/Icons/Icon_Neulbom.png')}
                    style={styles.icon}
                />
                <TouchableOpacity onPress={() => navigateToScreen('NotificationScreen')}>
                    <ButtonIcon width={24} height={24} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.buttonWrapper}>
                    {/* 첫 번째 행 */}
                    <View style={styles.row}>
                        <View style={styles.buttonContainer}>
                            <TwoByTwoButton title="수업자료" onPress={() => navigateToScreen('DownloadScreen')} />
                        </View>
                        <View style={styles.column}>
                            <View style={styles.buttonContainer}>
                                <OneByOneButton title="공지사항" onPress={() => navigateToScreen('NoticeScreen')} />
                            </View>
                            <View style={styles.buttonContainer}>
                                <OneByOneButton title="학사일정" onPress={() => navigateToScreen('ScheduleScreen')} />
                            </View>
                        </View>
                    </View>

                    {/* 두 번째 행 */}
                    <View style={styles.row}>
                        <View style={styles.buttonContainer}>
                            <TwoByOneButton title="서류제출" onPress={() => navigateToScreen('UploadScreen')} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <OneByOneButton title="오시는길" onPress={() => navigateToScreen('DirectionScreen')} />
                        </View>
                    </View>

                    {/* 세 번째 행 */}
                    <View style={styles.row}>
                        <View style={styles.buttonContainer}>
                            <ThreeByOneButton title="SNS" onPress={() => navigateToScreen('SNS')} />
                        </View>
                    </View>

                    {/* 네 번째 행 */}
                    <View style={styles.row}>
                        <View style={styles.buttonContainer}>
                            <ThreeByOneButton title="인사말" onPress={() => navigateToScreen('WelcomeMessageScreen')} />
                        </View>
                    </View>

                    {/* 다섯 번째 행 */}
                    <View style={styles.row}>
                        <View style={styles.buttonContainer}>
                            <ThreeByOneButton title="문의처" onPress={() => navigateToScreen('ContactScreen')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray050,
        height: '90%',
    },
    shadowBox: {
        backgroundColor: colors.gray050,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '8%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    icon: {
        width: '15%',
        resizeMode: 'contain',
    },
    buttonWrapper: {
        backgroundColor: colors.gray050,
        paddingTop: 5,
        alignItems: 'center',
    },
    buttonContainer: {
        margin: 5,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
