"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _routes = require("./routes/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.set('views', _path.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_express.default.static(_path.default.join(__dirname, 'public')));
app.use(_express.default.json());
app.use(_routes.router);
app.get('/version', (req, res) => {
  return {
    version: '0.0.0'
  };
});
app.listen(3333);