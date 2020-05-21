import Reactotron, {networking} from 'reactotron-react-native';
import {AsyncStorage} from 'react-native';

console.tron = (message: string, ...args: any[]) => {
    Reactotron.display({
        name: 'CONSOLE.TRON',
        preview: message,
        value: { message, args },
    });
};

const reactotron = Reactotron
.configure({ host: '192.168.0.148' })
.useReactNative(networking()) // add all built-in react native plugins
.setAsyncStorageHandler(AsyncStorage)
.connect(); // let's connect!
export default reactotron