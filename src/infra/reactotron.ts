import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: process.env.APP_NAME,
  host: String(process.env.IP_DEBUG),
})
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    overlay: false,
  })
  .use(reactotronRedux())
  .connect();

export default reactotron;
