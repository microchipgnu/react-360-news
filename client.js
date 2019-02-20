// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);

  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Home', { /* initial props */ }),
    leftPanel,
  );

  r360.renderToSurface(
    r360.createRoot('Home'),
    rightPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('test.jpg'));
}

window.React360 = {init};
