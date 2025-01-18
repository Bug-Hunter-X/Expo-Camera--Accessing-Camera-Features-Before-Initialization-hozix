# Expo Camera Initialization Bug

This repository demonstrates a common bug encountered when using the Expo Camera API: attempting to access camera features before the camera has fully initialized. This can lead to unexpected behavior or errors. The solution involves using the `onCameraReady` callback to ensure the camera is ready before accessing its properties.

## Bug Description

The bug occurs when code that interacts with the camera (e.g., taking a picture, accessing camera settings) is executed before the camera has finished initializing. This can manifest as errors like `undefined is not an object (evaluating 'camera.takePicture')` or other unexpected behavior.

## Solution

The solution involves using the `onCameraReady` callback provided by the Expo Camera API. This callback function is executed once the camera is ready for use.