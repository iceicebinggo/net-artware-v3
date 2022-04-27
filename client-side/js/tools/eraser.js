/* global app */
window.tools.eraser = {
  name: 'eraser',
  icon: '/images/eraser-icon.png',
  state: {
    selected: false,
    mousePressed: false
  },

  events: {
    mousedown: function (e) {
      e.state.mousePressed = true
    },
    mouseup: function (e) {
      e.state.mousePressed = false
      e.state.prevMouse = { x: null, y: null }
    },
    mousemove: function (e) {
      if (e.state.selected && e.state.mousePressed) {
        const mouse = e.app.eventToMouse(e)
        const px = e.state.prevMouse.x || e.mouse.x
        const py = e.state.prevMouse.y || e.mouse.y
        e.app.ctx.setStrokeColor(0, 0, 0, 0)
        e.app.ctx.beginPath()
        e.app.ctx.moveTo(mouse.x, mouse.y)
        e.app.ctx.lineTo(px, py)
        e.app.ctx.closePath()
        e.app.ctx.stroke()
      }
    }
  }
}
