import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

async function loadApplication() {
    await Font.loadAsync({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'openSans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'openSans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
}

const App: FC = () => {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return <AppLoading startAsync={loadApplication} onError={console.log} onFinish={() => setIsReady(true)} />;
    }

    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
};

export default App;
