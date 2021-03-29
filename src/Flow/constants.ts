export enum GraphCanvasEvent {
  onCanvasClick = 'blank:click',
  onCanvasDoubleClick = 'blank:dblclick',
  onCanvasContextmenu = 'blank:contextmenu',
}

export enum GraphNodeEvent {
  /** 鼠标左键单击节点时触发 */
  onNodeClick = 'node:click',
  onNodeSelected = 'node:selected',
  /** 鼠标双击左键节点时触发 */
  onNodeDoubleClick = 'node:dblclick',
  onNodeContextmenu = 'node:contextmenu',
}

export enum GraphEdgeEvent {
  /** 鼠标左键单击边时触发 */
  onEdgeClick = 'edge:click',
  onEdgeSelected = 'edge:selected',
  /** 鼠标双击左键边时触发 */
  onEdgeDoubleClick = 'edge:dblclick',
  onEdgeContextmenu = 'edge:contextmenu',
}


export enum GraphChangeEvent {
  onCellChanged = 'cell:changed',
  onNodeAdded = 'node:added',
  onEdgeAdded = 'edge:added',
  onNodeRemoved = 'node:removed',
  onEdgeRemoved = 'edge:removed'
}

export enum NodeTypeName {
  START = 'v-start-node',
  END = 'v-end-node',
  CIRCULATE = 'v-circulate-node',
  CYCLECHAINDEPT = 'v-cycleChainDept-node',
  CYCLECHAIN = 'v-cycleChain-node',
  FORK = 'v-fork-node',
  USER = 'v-user-node',
  WORK = 'v-work-node'
}

