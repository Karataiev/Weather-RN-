import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import IGranted from '../interface/interface';

const CoordsService = async (): void => {
  try {
    if (Platform.OS === 'android') {
      const granted: IGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: "App needs access to your phone's location.",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(position => {
          return position;
        });
      } else {
        console.log('Location permission denied');
      }
    }
  } catch (err: string) {
    console.log(err);
  }
};

export default CoordsService;
