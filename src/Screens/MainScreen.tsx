import React, { FC } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { ROUTES } from '../routes';
import { DATA } from '../data';

import Post from '../Components/Post';

import { PostType } from '../types'
import type { ScreenNavigationProps } from '../Navigation/AppNavigation';

type PostItemIncludes = { item: PostType };
type Props = ScreenNavigationProps<ROUTES.MAIN>;

const MainScreen: FC<Props> = ({ navigation }: Props) => {
    const goToPost = () => navigation.navigate(ROUTES.POST);
    const renderItem = ({ item }: PostItemIncludes) => <Post post={item} />;

    return (
        <View style={styles.wrapper}>
            <FlatList data={DATA} keyExtractor={(p) => p.id.toString()} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
});

export default MainScreen;
