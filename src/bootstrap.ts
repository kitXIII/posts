import * as Font from 'expo-font';

const bootstrap = async (): Promise<void> => {
    await Font.loadAsync({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
    });
};

export default bootstrap;
