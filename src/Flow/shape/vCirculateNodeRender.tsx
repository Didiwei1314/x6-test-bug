import { Node } from '@antv/x6';
import circulateNode from '@/assets/images/circulate@2x.png';
import defaultStyle from '../common/defaultStyle';
import { NodeTypeName } from '../constants';

const defaultSetting = defaultStyle(NodeTypeName.CIRCULATE);

const vCirculateNode: Node.Config = {
  inherit: 'rect',
  width: 200,
  height: 50,
  attrs: {
    body: {
      ...defaultSetting.style,
      stroke: 'rgba(254, 169, 23, 0.3)',
      fill: '#FFFAF0',
    },
    image: {
      'xlink:href': circulateNode,
      ...defaultSetting.iconSize,
      x: 15,
      y: 17,
    },
    text: {
      textWrap: {
        text: '抄送节点',
        ...defaultSetting.textWrap
      },
      ...defaultSetting.label
    }
  },
  markup: [...defaultSetting.markup],
  ports: defaultSetting.ports,
}
export default vCirculateNode;