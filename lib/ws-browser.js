/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object} opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  wx.connectSocket({url: uri})
  return this;
}

ws.prototype = {
  onopen: wx.onSocketOpen,
  onclose: wx.onSocketClose,
  onmessage: wx.onSocketMessage,
  onerror: wx.onSocketError,
  send: wx.sendSocketMessage,
  close: wx.closeSocket
};

module.exports = ws;
