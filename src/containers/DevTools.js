import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import ChartMonitor from 'redux-devtools-chart-monitor-immutable'

const DevTools = createDevTools(
  // <DockMonitor
  //   toggleVisibilityKey='ctrl-v'
  //   changePositionKey='ctrl-q'>
  //   <LogMonitor theme='tomorrow' />
  // </DockMonitor>
  <DockMonitor
    toggleVisibilityKey='ctrl-v'
    changePositionKey='ctrl-q'>
    <ChartMonitor hasImmutables={true} />
  </DockMonitor>
)

export default DevTools
