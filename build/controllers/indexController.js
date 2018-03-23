"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexModel = require("../models/indexModel");

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
    indexAction() {
        return async (ctx, next) => {
            const indexModelIns = new _indexModel2.default();
            const result = await indexModelIns.getData();
            ctx.body = await ctx.render('index', { data: result });
        };
    },
    testAction() {
        return async (ctx, next) => {
            ctx.body = "hi,test";
        };
    }
};
exports.default = indexController;