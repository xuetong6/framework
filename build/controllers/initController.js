'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initController = {
    getAllrouters(app, router) {
        app.use(router(_ => {
            _.get('/index', _indexController2.default.indexAction());
            _.get('/test', _indexController2.default.testAction());
        }));
    }
};
exports.default = initController;