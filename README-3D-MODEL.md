# 3D Jewelry Model Animation Implementation

This document provides instructions for setting up and testing the 3D jewelry model animation that has been added to the HomePage component.

## Required Packages

Before running the application, you need to install the following packages:

```bash
npm install @react-three/fiber @react-three/drei three
```

These packages are required for rendering and animating the 3D model:

- `@react-three/fiber`: React renderer for Three.js
- `@react-three/drei`: Useful helpers for React Three Fiber
- `three`: The core Three.js library

## 3D Model

The implementation expects a 3D model file in GLB format at the following location:
```
/public/models/jewelry_ring.glb
```

You need to:
1. Create the `/public/models/` directory if it doesn't exist
2. Add a jewelry ring 3D model in GLB format to this directory
3. Name the file `jewelry_ring.glb`

You can find free 3D models on websites like:
- [Sketchfab](https://sketchfab.com/)
- [TurboSquid](https://www.turbosquid.com/)
- [CGTrader](https://www.cgtrader.com/)

Look for models with appropriate licenses for your use case.

## Implementation Details

The implementation includes:

1. A new `JewelryModel` component in `components/Organisms/JewelryModel/index.tsx`
2. Integration of this component in the HomePage after the BannerSection
3. Scroll-based horizontal rotation of the 3D model using the Lenis smooth scrolling library

## How It Works

- The 3D model rotates horizontally as the user scrolls down the page
- The rotation is controlled by the scroll position using the Lenis smooth scrolling library
- The model is displayed in a full-height section with descriptive text overlay

## Testing

To test the implementation:

1. Install the required packages as mentioned above
2. Add a 3D model file as described
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the homepage
5. Scroll down past the BannerSection to see the 3D model animation

## Customization

You can customize the 3D model animation by:

- Adjusting the rotation speed by changing the multiplier in `modelRef.current.rotation.y = scrollY.current * 0.1;`
- Modifying the camera position and field of view in the Canvas component
- Changing the lighting setup (ambient light, spot light, point light)
- Updating the text overlay content and styling