import { Node } from '@antv/x6';
import userNode from '@/assets/images/userNode@2x.png';
import defaultStyle from '../common/defaultStyle';
import { NodeTypeName } from '../constants';

const defaultSetting = defaultStyle(NodeTypeName.USER);

const vUserNode: Node.Config = {
  inherit: 'rect',
  width: 200,
  height: 50,
  attrs: {
    body: {
      ...defaultSetting.style,
      stroke: 'rgba(248, 84, 21, 0.3)',
      fill: '#FFF6F0',
    },
    image: {
      'xlink:href': userNode,
      ...defaultSetting.iconSize,
      x: 15,
      y: 17,
    },
    text: {
      textWrap: {
        text: '用户',
        ...defaultSetting.textWrap
      },
      ...defaultSetting.label
    }
  },
  markup: [...defaultSetting.markup],
  ports: defaultSetting.ports,
}
export default vUserNode;