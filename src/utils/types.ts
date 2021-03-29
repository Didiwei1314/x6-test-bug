// import { Rule } from 'rc-field-form/lib/interface';
// import { ReactNode } from 'react';
import { GraphCanvasEvent, GraphNodeEvent, GraphEdgeEvent, GraphChangeEvent } from '../Flow/constants';

export interface Response<T> {
  message: string;
  location: string;
  success: boolean;
  code: number;
  data: T;
}

export interface Pagination<T> {
  data: T[];
  total: number;
  totalPage: number;
  pageNo: number;
  pageSize: number;
}

export type GraphNativeEvent =  GraphNodeEvent | GraphEdgeEvent | GraphCanvasEvent | GraphChangeEvent;

export type GraphReactEvent =
  | keyof typeof GraphCanvasEvent
  | keyof typeof GraphNodeEvent
  | keyof typeof GraphEdgeEvent
  | keyof typeof GraphChangeEvent

export type GraphReactEventProps = Record<GraphReactEvent, (e: any) => void>;

export interface AnyObject {
  [key: string]: any
}
