import React, { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import { WindowSize } from '../hooks/useWindowsize';

export default function Footer() {
    const isMobilee = WindowSize();

    return isMobilee ? <MobileFooter /> : <DesktopFooter />;
}
