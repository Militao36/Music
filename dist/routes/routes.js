"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _TrackController = require("../controllers/TrackController");

var _core = require("../upload/core");

var _express = require("express");

const router = (0, _express.Router)();
exports.router = router;
const Audio = new _TrackController.TrackController();
router.get('/', Audio.view);
router.get('/stream/:id', Audio.stream);
router.post('/upload', _core.upload.single('track'), Audio.upload);