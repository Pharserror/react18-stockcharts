import * as React from 'react';
import PropTypes from 'prop-types';

declare module 'react-stockcharts' {
    export interface ChartProps {
      data: Array<any>;
      width: number;
      height: number;
      margin: {
        left: number;
        right: number;
        top: number;
        bottom: number;
      };
      type: string;
      xAccessor: (data: any) => any;
      xScale: any;
      yScale: any;
      displayXAccessor?: (data: any) => any;
      children: any;
      seriesName: string;
      svgDraw?: any;
      defaultFocus: boolean;
      focus?: any;
      zoomEvent: boolean;
      clamp: boolean;
      pointsPerPxThreshold: number;
      panEvent: boolean;
      zoomAnchor?: (e: any) => any;
      onContextMenu?: (e: any) => void;
    }
  
    export class Chart extends React.Component<ChartProps, any> {}
  
    export interface ChartCanvasProps {
      width: number;
      height: number;
      ratio: number;
      margin: {
        left: number;
        right: number;
        top: number;
        bottom: number;
      };
      type: string;
      seriesName?: string;
      xAccessor?: (data: any) => any;
      xScale?: any;
      displayXAccessor?: (data: any) => any;
      data: Array<any>;
      disableMouseMoveEvent: boolean;
      panEvent: boolean;
      zoomEvent: boolean;
      clamp: boolean;
      pointsPerPxThreshold: number;
      useCrossHairStyleCursor: boolean;
      context: any;
      onContextMenu?: (e: any) => void;
      onDoubleClick?: (e: any) => void;
      onMouseMove?: (e: any) => void;
      onClick?: (e: any) => void;
      onPanEnd?: () => void;
      onPan?: () => void;
      onZoom?: () => void;
    }
  
    export class ChartCanvas extends React.Component<ChartCanvasProps, any> {}
  
    // 继续添加其他类型定义
    export interface ChartData {
        date: Date;
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
    }
    
    export interface ChartDataArray extends Array<ChartData> {}

    export interface ChartConfig {
        width: number;
        height: number;
        margin: {
          left: number;
          right: number;
          top: number;
          bottom: number;
        };
        clamp: boolean;
        yExtents: Array<any> | ((data: ChartDataArray) => Array<any>);
        xAccessor: (data: ChartData) => any;
        xScale?: any;
        series: Array<{
          yAccessor: (data: ChartData) => any;
          stroke?: string;
          fill?: string;
          type: string;
        }>;
    }

    export function discontinuousTimeScaleProviderBuilder(inputDateAccessor: (data: any) => any): any;
    
    export function fitWidth<T>(
        C: React.ComponentClass<T>,
        options?: { minWidth: number; maxWidth: number; widthRatio: number }
    ): React.ComponentClass<T>;
    
    export function last<T>(array: Array<T>): T;
    
    export function zipper(): any;



  }
  