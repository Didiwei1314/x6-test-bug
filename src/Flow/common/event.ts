import { Graph as IGraph, Edge, Cell } from '@antv/x6';
import debounce from 'lodash/debounce'

export default function(Graph: IGraph, container: HTMLElement) {
  // 线动画
  Graph.on('edge:mouseenter', ({ cell }) => {
    cell.attr('line/style/stroke', '#666', {ignoreHistory: true});
    // cell.prop('zIndex', -1, {ignoreHistory: true})
    cell.attr('line/style/animation', 'ant-line 30s infinite linear', {ignoreHistory: true});
    cell.attr('line/strokeDasharray', 5, {ignoreHistory: true});
  })
  Graph.on('edge:mouseleave', ({cell}) => {
    cell.attr('line/style/stroke', 'rgb(157, 166, 183)', {ignoreHistory: true});
    cell.attr('line/style/animation', null, {ignoreHistory: true});
    cell.attr('line/strokeDasharray', null, {ignoreHistory: true});
  })

  // 监听连线到边界时移动画布
  Graph.on('edge:change:terminal', (args: {
    cell: Cell
    edge: Edge        
    current?: {x: number, y: number}
    previous?: {x: number, y: number} // 改变之前的值
    options: any      // 透传的 options
  }) => { 
    const { clientHeight, clientWidth } = document.body;
    if(args.current && args.previous){
      const pos = args.current.x ? Graph.localToClient(args.current?.x, args.current?.y) : {x: clientWidth / 2, y: clientHeight / 2};
      const scrollBar = Graph.getScrollbarPosition();
      if(pos.x <= 5) {
        scrollBar.left -= 40;
      }
      if(pos.x >= clientWidth - 5) {
        scrollBar.left += 40;
      }
      if(pos.y <= 5) {
        scrollBar.top -= 40;
      }
      if(pos.y >= clientHeight - 5) {
        scrollBar.top += 40;
      }
      Graph.setScrollbarPosition(scrollBar.left, scrollBar.top);
    }
  })

  // 选择edge样式切换
  Graph.on('edge:selected', ({cell}) => {
    cell.attr('line/strokeWidth', 2, {ignoreHistory: true});
    cell.addTools(['vertices', 'segments'], null, {ignoreHistory: true});
  });
  Graph.on('edge:unselected', ({cell}) => {
    cell.attr('line/strokeWidth', 1, {ignoreHistory: true});
    cell.removeTools({ignoreHistory: true});
  });

  // 删除
  Graph.bindKey(['backspace', 'del'], () => {
    const selected = Graph.getSelectedCells();
    selected.forEach(view => view.remove());
  })

  const showPorts = (ports: NodeListOf<SVGAElement>, show: boolean) => {
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden'
    }
  }

  Graph.on(
    'node:mouseenter',
    debounce(() => {
      const ports = container.querySelectorAll(
        '.x6-port-body',
      ) as NodeListOf<SVGAElement>
      showPorts(ports, true)
    }),
    500,
  )
  Graph.on('node:mouseleave', () => {
    const ports = container.querySelectorAll(
      '.x6-port-body',
    ) as NodeListOf<SVGAElement>
    showPorts(ports, false)
  })


}