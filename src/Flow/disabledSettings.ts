 
const settings: {
  [key: string]: any
} = {
  background: {
    color: '#fff'
  },
  snapline: false,
  scroller: {
    enabled: true,
    pageVisible: false,
    pannable: true,
  },
  clipboard: false, // 剪切板
  keyboard: false, // 键盘快捷键
  selecting: false,
  grid: true,
  connecting: { // 连接线
    validateMagnet() {
      return false
    },
  },
  interacting: {
    arrowheadMovable: false
  }
}

export default settings;