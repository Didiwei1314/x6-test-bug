import { Node } from '@antv/x6';
import nodeIcon from '@/assets/images/node@2x.png';
import defaultStyle from '../common/defaultStyle';
import { NodeTypeName } from '../constants';

const defaultSetting = defaultStyle(NodeTypeName.WORK);

const vWorkNode: Node.Config = {
  inherit: 'rect',
  width: 200,
  height: 50,
  attrs: {
    body: {
      ...defaultSetting.style,
      stroke: 'rgba(1, 180, 119, 0.3)',
      fill: 'rgba(1, 180, 119, 0.05)',
    },
    image: {
      'xlink:href': nodeIcon,
      ...defaultSetting.iconSize,
      x: 15,
      y: 17,
    },
    text: {
      textWrap: {
        text: '业务节点',
        ...defaultSetting.textWrap
      },
      ...defaultSetting.label
    }
  },
  markup: [...defaultSetting.markup],
  ports: defaultSetting.ports,
}
export default vWorkNode;