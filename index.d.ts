// Type definitions for react-stockcharts 0.7.8
// Project: https://github.com/rrag/react-stockcharts
// Definitions by: Your Name <https://github.com/yourusername>

import * as React from 'react';

declare module 'react-stockcharts' {
  // ChartCanvas
  export interface ChartCanvasProps {
    width: number;
    height: number;
    ratio: number;
    margin: { top: number; right: number; bottom: number; left: number };
    type: 'svg' | 'hybrid';
    seriesName: string;
    data: any[];
    xAccessor: (d: any) => any;
    xExtents: [number, number] | ((data: any[]) => [number, number]);
    xScale: any;
    panEvent: boolean;
    zoomEvent: boolean;
    clamp: boolean;
    zoomAnchor: (props: ChartCanvasProps) => void;
    xExtentsCalculator: (data: any[], width: number, xAccessor: (d: any) => any) => [number, number];
    onLoadMore: (start: number, end: number) => void;
    postCalculator: (data: any[]) => any[];
    flipXScale: boolean;
    padding: number | { top: number; right: number; bottom: number; left: number };
    defaultFocus: boolean;
  }
  export class ChartCanvas extends React.Component<ChartCanvasProps> {}

  // Chart
  export interface ChartProps {
    id: number;
    yExtents?: ((d: any) => number) | [number, number];
    yExtentsCalculator?: (data: any[], width: number, yAccessor: (d: any) => any) => [number, number];
    yScale?: any;
    origin?: (width: number, height: number) => [number, number];
    padding?: number | { top: number; right: number; bottom: number; left: number };
    height?: number;
  }
  export class Chart extends React.Component<ChartProps> {}

  // Series
  export interface SeriesProps {
    yAccessor: (d: any) => any;
    type: string;
    stroke?: string;
    fill?: string;
    className?: string;
    opacity?:number;
    strokeWidth?: number;
    clip?: boolean;
  }
  export class Series extends React.Component<SeriesProps> {}

  // Indicators
  export interface IndicatorsProps {
    options: any;
    stroke?: string | { [key: string]: string };
    fill?: string | { [key: string]: string };
    className?: string;
    opacity?: number;
  }
  export class Indicators extends React.Component<IndicatorsProps> {}

  // Axes
  export interface AxesProps {
    orient: 'top' | 'bottom' | 'left' | 'right';
    innerTickSize?: number;
    outerTickSize?: number;
    tickFormat?: (d: any) => string;
    tickPadding?: number;
    tickSize?: number;
    ticks?: number;
    tickValues?: any[];
    showDomain?: boolean;
    showTicks?: boolean;
    className?: string;
    axisAt?: 'top' | 'bottom' | 'left' | 'right' | 'middle' | number;
    strokeWidth?: number;
    stroke?: string;
    opacity?: number;
  }
  export class Axes extends React.Component<AxesProps> {}

  // Helpers
  export interface HelpersProps {
    type: string;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
    opacity?: number;
  }
  export class Helpers extends React.Component<HelpersProps> {}

  // Interactive
  export interface InteractiveProps {
    onDragStart?: (e: React.MouseEvent, moreProps: any) => void;
    onDrag?: (e: React.MouseEvent, moreProps: any) => void;
    onDragComplete?: (e: React.MouseEvent, moreProps: any) => void;
    onDoubleClick?: (e: React.MouseEvent, moreProps: any) => void;
    onSelect?: (e: React.MouseEvent, moreProps: any) => void;
    onContextMenu?: (e: React.MouseEvent, moreProps: any) => void;
    className?: string;
  }
  export class Interactive extends React.Component<InteractiveProps> {}

  // Utils
  export interface UtilsProps {
    // Unfortunately, I cannot find the properties and methods for Utils in react-stockcharts@0.7.8
  }
  export class Utils extends React.Component<UtilsProps> {}
}




