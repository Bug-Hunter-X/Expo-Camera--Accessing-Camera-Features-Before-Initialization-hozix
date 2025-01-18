This solution uses the `onCameraReady` callback to ensure the camera is initialized before attempting to take a picture.

```javascript
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

// ... other code

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [camera, setCamera] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

if (hasPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  const takePicture = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      console.log(photo);
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => {
          setCamera(ref);
        }}
        onCameraReady={() => {
            console.log('Camera is ready');
        }}>
      </Camera>
      <Button title="Take Picture" onPress={takePicture} />
    </View>
  );
}
```