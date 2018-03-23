import _ from 'lodash';
import path from "path";
let config = {
  "viewDir":path.join(__dirname,'..','/views'),
  "staticDir":path.join(__dirname,'..','/assets'),
  "env":process.env.NODE_ENV  //"development" (开发环境) / .  "production" （生产环境）
};
//开发环境下
if(process.env.NODE_ENV == "development"){
    const localConfig = {
        port:8081
    };
    config = _.extend(config,localConfig);
}
//上线环境下
if(process.env.NODE_ENV == "production"){
    const proConfig = {
        port:8081
    };
    config = _.extend(config,proConfig);
}
export default config;