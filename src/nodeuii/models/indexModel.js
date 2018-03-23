/**
 * 实现Index的数据模型
 * @author 学彤
 */
import {resolve} from "dns";
/**
 * IndexModel类，生成一段异步的数据
 * @author 学彤
 */
export default class IndexModel {
     contructor(){}
     /**
     * 获取具体的API接口数据，返回异步处理结果
     * @author 学彤
     */
     getData(){
         return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                 resolve("Hello IndexAction");
             },1000)

         })
     }
     
    
}