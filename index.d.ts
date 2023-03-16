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

    export interface InteractiveYCoordinateProps {
      readonly yValue: number;
      readonly yAxisPad: number;
      readonly chartHeight: number;
      readonly chartWidth: number;
      readonly xPosition?: number;
      readonly draggable?: boolean;
      readonly onDragStart?: (e: any) => void;
      readonly onDrag?: (e: any) => void;
      readonly onDragComplete?: (e: any) => void;
      readonly bgFill?: string;
      readonly bgOpacity?: number;
      readonly textFill?: string;
      readonly fontFamily?: string;
      readonly fontSize?: number;
      readonly fontWeight?: number;
      readonly stroke?: string;
      readonly strokeWidth?: number;
      readonly strokeOpacity?: number;
      readonly textAnchor?: string;
      readonly edge?: 'left' | 'right';
      readonly rectWidth?: number;
      readonly rectHeight?: number;
      readonly arrowWidth?: number;
      readonly hideLine?: boolean;
      readonly displayFormat?: (value: number) => string;
    }
 
    export interface InteractiveLineProps {
      readonly type: 'LINE';
      readonly x1Value: any;
      readonly x2Value: any;
      readonly y1Value: any;
      readonly y2Value: any;
      readonly stroke: string;
      readonly strokeWidth: number;
      readonly strokeOpacity?: number;
      readonly strokeDasharray?: string;
      readonly interactiveCursorClass?: string;
      readonly edgeClip?: boolean;
    }

    
    export interface InteractiveTextProps {
      readonly type: 'TEXT';
      readonly text: string;
      readonly fontFamily: string;
      readonly fontSize: number;
      readonly fontWeight: number;
      readonly fill: string;
      readonly textAnchor: string;
      readonly interactiveCursorClass?: string;
      readonly rotate?: number;
      readonly show?: boolean;
      readonly bgFill?: string;
      readonly bgOpacity?: number;
      readonly rectRadius?: number;
      readonly rectHeight?: number;
      readonly rectWidth?: number;
      readonly rectX?: number;
      readonly rectY?: number;
      readonly edgeClip?: boolean;
      readonly tooltip?: string;
    }

 
  
    export type InteractiveShapeProps = InteractiveLineProps | InteractiveTextProps | InteractiveYCoordinateProps | InteractiveYCoordinateTextProps;
   
    export interface EventCaptureProps {
      mouseMove?: boolean;
      zoom?: boolean;
      pan?: boolean;
      mainChart?: boolean;
      enableDragOnHover?: boolean;
      onClick?: (e: any, interactive: InteractiveShapeProps) => void;
      onDoubleClick?: (e: any, interactive: InteractiveShapeProps) => void;
      onContextMenu?: (e: any, interactive: InteractiveShapeProps) => void;
      onMouseEnter?: (e: any, interactive: InteractiveShapeProps) => void;
      onMouseLeave?: (e: any, interactive: InteractiveShapeProps) => void;
      onPanStart?: (e: any) => void;
      onPan?: (e: any) => void;
      onPanEnd?: (e: any) => void;
      onZoom?: (e: any) => void;
      onPinchZoom?: (e: any) => void;
      onPinchZoomEnd?: (e: any) => void;
    }

    

    export interface Chart {
      ChartCanvas: React.ComponentType<ChartCanvasProps>;
      Chart: React.ComponentType<ChartProps>;
      XAxis: React.ComponentType<any>;
      YAxis: React.ComponentType<any>;
      MouseCoordinateX: React.ComponentType<any>;
      MouseCoordinateY: React.ComponentType<any>;
      CrossHairCursor: React.ComponentType<any>;
      CurrentCoordinate: React.ComponentType<any>;
      EdgeIndicator: React.ComponentType<any>;
      OHLCTooltip: React.ComponentType<any>;
      MovingAverageTooltip: React.ComponentType<any>;
      SingleValueTooltip: React.ComponentType<any>;
      ToolTipText: React.ComponentType<any>;
      AreaSeries: React.ComponentType<any>;
      BarSeries: React.ComponentType<any>;
      CandlestickSeries: React.ComponentType<any>;
      LineSeries: React.ComponentType<any>;
      ScatterSeries: React.ComponentType<any>;
      CircleMarker: React.ComponentType<any>;
      SquareMarker: React.ComponentType<any>;
      TriangleMarker: React.ComponentType<any>;
      WhiskerTooltip: React.ComponentType<any>;
      GroupTooltip: React.ComponentType<any>;
      MACDSeries: React.ComponentType<any>;
      RSISeries: React.ComponentType<any>;
      BollingerSeries: React.ComponentType<any>;
      ElderRaySeries: React.ComponentType<any>;
      ElderRaySeriesFilled: React.ComponentType<any>;
      StochasticSeries: React.ComponentType<any>;
      StraightLine: React.ComponentType<any>;
      TrendLine: React.ComponentType<any>;
      FibonacciRetracement: React.ComponentType<any>;
      FibonacciExtension: React.ComponentType<any>;
      FibonacciFan: React.ComponentType<any>;
    }
  
  

  }
  