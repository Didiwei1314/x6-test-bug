import { Edge } from '@antv/x6';
const EdgeCustom: Edge.Config = {
  inherit: 'edge',
  attrs: {
    line: {
      stroke: 'rgb(157, 166, 183)',
      strokeWidth: 1,
      targetMarker: {
        name: 'classic',
        size: 6
      },
    }
  },
  zIndex: -1,
  connector: {
    name: 'rounded',
    args: { radius: 4 },
  },
  router: {
    name: 'manhattan'
  },
  defaultLabel: {
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      label: {
        textWrap: {
          width: 80,
          height: 300
        },
        fill: 'black',
        fontSize: 10,
        textAnchor: 'middle',
        textVerticalAnchor: 'middle',
        pointerEvents: 'none',
      },
      body: {
        ref: 'label',
        fill: 'white',
        stroke: '#5755a1',
        strokeWidth: 1,
        rx: 3,
        ry: 3,
        refWidth: '120%',
        refHeight: '120%',
        refX: '-10%',
        refY: '-10%',
      },
    },
    position: {
      distance: 0.5, // 绝对定位
      options: {
        absoluteDistance: true,
      },
    },
  },
}

export default EdgeCustom;