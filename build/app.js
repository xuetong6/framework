"use strict";

var _Koa = require("Koa");

var _Koa2 = _interopRequireDefault(_Koa);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _koaSwig = require("koa-swig");

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _config = require("./configs/config");

var _config2 = _interopRequireDefault(_config);

var _errorHandler = require("./middlewares/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _initController = require("./controllers/initController");

var _initController2 = _interopRequireDefault(_initController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _Koa2.default();

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  varControls: ["[[", "]]"],
  writeBody: false
}));

app.use((0, _koaStatic2.default)(_config2.default.staticDir));

_log4js2.default.configure({
  appenders: { cheese: { type: "file", filename: "./logs/yd.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = _log4js2.default.getLogger("cheese");
_errorHandler2.default.error(app, logger);
// 初始化路由
_initController2.default.getAllrouters(app, _koaSimpleRouter2.default);

app.listen(_config2.default.port);