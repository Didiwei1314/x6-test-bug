
import { Node } from '@antv/x6';
import forkNode from '@/assets/images/if@2x.png';
import defaultStyle from '../common/defaultStyle';
import drop from 'lodash/drop';
import { NodeTypeName } from '../constants';

const defaultSetting = defaultStyle(NodeTypeName.FORK);

const vForkNode: Node.Config = {
  inherit: 'polygon',
  width: 96,
  height: 96,
  attrs: {
    body: {
      stroke: 'rgba(128,110,255, 0.3)',
      fill: '#F8F6FF',
      strokeWidth: 1,
      refPoints: '0,10 10,0 20,10 10,20',
    },
    image: {
      'xlink:href': forkNode,
      ...defaultSetting.iconSize,
      x: 40,
      y: 30,
    },
    text: {
      textWrap: {
        text: '条件节点',
        height: 20,
        width: -10,
      },
      ...defaultSetting.label,
      refX: 0.5,
      refY: 0.65,
      zIndex: -1
    }
  },
  markup: [{
    tagName: 'polygon',
    selector: 'body',
  },...drop(defaultSetting.markup)],
  ports: defaultSetting.ports,
}
export default vForkNode;