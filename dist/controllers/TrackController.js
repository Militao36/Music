"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackController = void 0;

var _Track = require("../Entity/Track");

var _core = _interopRequireDefault(require("../stream/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TrackController {
  view(req, res) {
    return res.render('index');
  }

  stream(req, res) {
    try {
      const trackId = req.params.id;
      return (0, _core.default)(req, res, trackId);
    } catch (error) {
      return res.status(500).json({
        error: 'SERVE_ERROR'
      });
    }
  }

  upload(req, res) {
    try {
      const track = new _Track.Track(req.body);
      track.trackId = req.file.filename;
      return res.json(track);
    } catch (error) {
      return res.status(500).json({
        error: 'SERVE_ERROR'
      });
    }
  }

}

exports.TrackController = TrackController;