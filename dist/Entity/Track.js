"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _uuid = require("uuid");

class Track {
  constructor(props, id) {
    Object.assign(this, props);

    if (!id) {
      this.id = (0, _uuid.v4)();
    }
  }

}

exports.Track = Track;