 
import { Edge } from '@antv/x6';
 const settings: {
   [key: string]: any
 } = {
   background: {
     color: '#fff'
   },
   snapline: true,
   autoResize: true,
  //  async: true,
   scroller: {
     enabled: true,
     pageVisible: false,
     pannable: true,
   },
   history: { // 撤销/重做
     enabled: true,
     beforeAddCommand(event: any, args: any) {
       // 忽略历史变更
       if (args.options.ignoreHistory) {
         return false
       }
     }
   },
   clipboard: true, // 剪切板
   keyboard: true, // 键盘快捷键
   selecting: { // 点选/框选
     enabled: true,
     className: 'my-selecting',
     multiple: true,
     rubberband: true,
     movable: true,
     following: false,
     modifiers: 'alt',
     showNodeSelectionBox: true,
   },
   grid: true,
   connecting: { // 连接线
     snap: true,
     allowPort: true,
     allowNode: false,
     allowBlank: false,
     allowLoop: false,
     highlight: true,
     createEdge() {
       return Edge.create({
         shape: 'edge'
       })
     },
   },
   interacting: {
     arrowheadMovable: true
   }
 }

 export default settings;