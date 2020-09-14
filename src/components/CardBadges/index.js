import React from 'react';
import {
  VscDebugBreakpointData,
  VscDebugBreakpointFunction,
  VscDebugBreakpointLog,
} from 'react-icons/vsc';

import { Badge } from './styles';

const badgeIcons = {
  bug: (
    <Badge color="#ff0055">
      <VscDebugBreakpointData color="white" />
    </Badge>
  ),
  feature: (
    <Badge color="#0062ff">
      <VscDebugBreakpointFunction color="white" />
    </Badge>
  ),
  story: (
    <Badge color="#3eb36c">
      <VscDebugBreakpointLog color="white" />
    </Badge>
  ),
};

export default badgeIcons;
