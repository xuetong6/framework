"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dns = require("dns");

/**
 * IndexModel类，生成一段异步的数据
 * @author 学彤
 */
class IndexModel {
    contructor() {}
    /**
    * 获取具体的API接口数据，返回异步处理结果
    * @author 学彤
    */
    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello IndexAction");
            }, 1000);
        });
    }

}
exports.default = IndexModel; /**
                               * 实现Index的数据模型
                               * @author 学彤
                               */