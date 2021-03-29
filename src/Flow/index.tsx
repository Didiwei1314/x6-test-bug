import React, { 
  FC, 
  useEffect, 
  useRef
} from 'react';
import { Graph as IGraph, Model, Cell, Node, Edge, View, JQuery } from '@antv/x6';
import pick from 'lodash/pick';
import initEvent from './common/event';
import { GraphReactEventProps } from '../utils/types';
import GraphContext from './context';
import settings from './settings';
import disabledSettings from './disabledSettings';
import './shape';

export interface IEventArgs {
  cell?: Cell
  node?: Node
  edge?: Edge
  view?: View
  x?: number
  y?: number
  e?: JQuery.MouseUpEvent
  options?: {ignoreHistory: boolean}
}

type EventDefinde = Partial<GraphReactEventProps>

interface GraphFlow extends EventDefinde {
  data: Model.FromJSONData
  disabled?: undefined | boolean
  style?: React.CSSProperties
  className?: string
  children?: React.ReactHTML[]
}

export interface GraphContext {
  Graph: IGraph | null
  [key: string]: any
}

const Flow: FC<GraphFlow> = (props: GraphFlow) => {
  const { children, data, disabled } = props;
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if(containerRef.current) {
      initGraph(containerRef.current);
    }
  }, [containerRef])

  const initGraph = (container: HTMLElement) => {
    const { clientWidth = 0, clientHeight = 0 } = container;
    const graphSetting = disabled ? disabledSettings : settings;

    const graph: IGraph = new IGraph({
      container,
      width: clientWidth,
      height: clientHeight,
      ...graphSetting
    });
    initEvent(graph, container)
    graph?.fromJSON(data);
  }

  return (
      <div style={{width: '100%', height: '100%'}}
        ref={containerRef}
        {...pick(props, ['className', 'style'])}>
        {children}
      </div>
  )
}

export default Flow;

