import * as React from 'react';

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    console.log("Navigating to:", name);
    navigationRef.navigate(name, params);
  } else {
    console.log("Navigation attempted before ready");
  }
}


