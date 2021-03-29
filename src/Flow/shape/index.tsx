
import { Graph } from '@antv/x6';
import vFlowEdge from './vFlowEdge';
import vStartNode from './vStartNodeRender';
import vEndNode from './vEndNodeRender';
import vUserNode from './vUserNodeRender';
import vForkNode from './vForkNodeRender';
import vCycleChainNode from './vCycleChainRender';
import vCycleChainDeptNode from './vCycleChainDeptRender';
import vCirculateNode from './vCirculateNodeRender';
import vWorkNode from './vWorkNodeRender';

const jsons = {
  width: 100,
  height: 60,
  zIndex: 0,
  markup: [
    {
      tagName: "rect",
      selector: "body",
      // 在 Markup 中定义生命周期中不变的原生属性，不能定义特殊属性
      attrs: {
        stroke: 'blue',
        strokeWidth: 2,
        fill: 'yello'
      }
    },
    {
      tagName: "text",
      selector: "label",
      attrs: {
        fill: '#333'
      }
    }
  ],
  attrs: {
    body: {
      // 使用 ref-xxx 属性时，只要没有同时定义 ref 属性，所有计算都是纯 JavaScript 计算，
      // 因此计算非常快；一旦定义了 ref 属性，就需要先基于浏览器的包围盒计算拿到 ref 指代
      // 元素的包围盒，计算开销相对较大。
      refWidth: "100%",
      refHeight: "100%"
    },
    label: {
      refX: "50%",
      refY: "50%",
      fontSize: 12,
      // 尽量避免使用 `xAlign` 和 `yAlign` 属性，因为这两个属性的计算首先需要计算
      // <SVGText> 元素的包围盒，通常浏览器的包围盒计算都不是那么快。
      textAnchor: "middle",
      textVerticalAnchor: "middle"
    }
  },
  ports: {
    groups: {
      top: {
        position: "top",
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: "#5F95FF",
            strokeWidth: 1,
            fill: "#fff",
            style: {
              visibility: "auto"
            }
          }
        }
      },
      right: {
        position: "right",
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: "#5F95FF",
            strokeWidth: 1,
            fill: "#fff",
            style: {
              visibility: "auto"
            }
          }
        }
      },
      bottom: {
        position: "bottom",
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: "#5F95FF",
            strokeWidth: 1,
            fill: "#fff",
            style: {
              visibility: "auto"
            }
          }
        }
      },
      left: {
        position: "left",
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: "#5F95FF",
            strokeWidth: 1,
            fill: "#fff",
            style: {
              visibility: "auto"
            }
          }
        }
      }
    },
    items: [
      {
        group: "top",
        id: `top`
      },
      {
        group: "right",
        id: `right`
      },
      {
        group: "bottom",
        id: `bottom`
      },
      {
        group: "left",
        id: `left`
      }
    ]
  }
}

Graph.registerEdge('edge', vFlowEdge, true);


Graph.registerNode('v-start-node', jsons);
Graph.registerNode('v-end-node', jsons);
Graph.registerNode('v-user-node', jsons);
Graph.registerNode('v-fork-node', jsons);
Graph.registerNode('v-cycleChain-node', jsons);
Graph.registerNode('v-cycleChainDept-node', jsons);
Graph.registerNode('v-circulate-node', jsons);
Graph.registerNode('v-workNode-node', jsons);


// Graph.registerNode('v-start-node', vStartNode);
// Graph.registerNode('v-end-node', vEndNode);
// Graph.registerNode('v-user-node', vUserNode);
// Graph.registerNode('v-fork-node', vForkNode);
// Graph.registerNode('v-cycleChain-node', vCycleChainNode);
// Graph.registerNode('v-cycleChainDept-node', vCycleChainDeptNode);
// Graph.registerNode('v-circulate-node', vCirculateNode);
// Graph.registerNode('v-workNode-node', vWorkNode);

