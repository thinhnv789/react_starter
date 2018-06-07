import React from 'react';

export const devices = {
    DESKTOP: 'Desktop', 
    TABLET: 'Tablet',
    MOBILE: 'Mobile'
};
  
export const DeviceContext = React.createContext({
    device: devices.DESKTOP
});