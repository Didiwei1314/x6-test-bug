import { Node } from '@antv/x6';
import endNode from '@/assets/images/end@2x.png';
import defaultStyle from '../common/defaultStyle';
import drop from 'lodash/drop';
import { NodeTypeName } from '../constants';

const defaultSetting = defaultStyle(NodeTypeName.END);

const vEndtNode: Node.Config = {
  inherit: 'circle',
  width: 80,
  height: 80,
  attrs: {
    body: {
      stroke: 'rgba(95,149,255, 0.3)',
      fill: '#F5F9FF',
      strokeWidth: 1,
    },
    image: {
      'xlink:href': endNode,
      ...defaultSetting.iconSize,
      x: 32,
      y: 22,
    },
    text: {
      textWrap: {
        ...defaultSetting.textWrap,
        text: '结束',
        width: -10,
      },
      ...defaultSetting.label,
      refX: 0.5,
      refY: 0.7
    }
  },
  markup: [{
    tagName: 'circle',
    selector: 'body',
  },...drop(defaultSetting.markup)],
  ports: defaultSetting.ports,
}
export default vEndtNode;