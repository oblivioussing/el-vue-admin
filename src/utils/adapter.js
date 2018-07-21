// 列表高度自适应
const listAdapter = () => {
  let containerEl = document.querySelector('.list-container')
  containerEl.style.height = 'calc(100vh - 260px)'
}

window.onload = () => {
  // 列表高度自适应
  listAdapter()
}