"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _util = require("util");

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getStat = (0, _util.promisify)(_fs.default.stat);

const streamAudio = async (req, res, trackId) => {
  const filePath = (0, _path.resolve)(__dirname, 'music', trackId);

  if (!_fs.default.existsSync(filePath)) {
    return res.status(400).json({
      error: 'Musica não encontrada!'
    });
  }

  const stat = await getStat(filePath); // informações sobre o tipo do conteúdo e o tamanho do arquivo

  res.writeHead(200, {
    'Content-Type': 'audio/mp3',
    'Content-Length': stat.size,
    'Accept-Ranges': 'bytes'
  });

  const stream = _fs.default.createReadStream(filePath); // só exibe quando terminar de enviar tudo
  // stream.on('end', () => console.log('acabou'))
  // faz streaming do audio


  return stream.pipe(res);
};

var _default = streamAudio;
exports.default = _default;