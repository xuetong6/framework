import Koa from "Koa";
import router from 'koa-simple-router';
import log4js from "log4js";
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';
import config from "./configs/config";
import errorHandler from "./middlewares/errorHandler";
import initController from './controllers/initController';

const app = new Koa();

app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  varControls:["[[","]]"],
  writeBody: false
}));

app.use(serve(config.staticDir));
 

log4js.configure({
  appenders: { cheese: { type: "file", filename: "./logs/yd.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
errorHandler.error(app, logger);
// 初始化路由
initController.getAllrouters(app,router);

app.listen(config.port);
