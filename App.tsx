import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import bootstrap from './src/bootstrap';

const App: FC = () => {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return <AppLoading startAsync={bootstrap} onError={console.log} onFinish={() => setIsReady(true)} />;
    }

    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
};

export default App;
