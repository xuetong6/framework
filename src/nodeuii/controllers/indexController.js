import IndexModel from "../models/indexModel"
const indexController = {
    indexAction(){
        return async(ctx,next) => {
            const indexModelIns = new IndexModel();
            const result = await indexModelIns.getData();
            ctx.body = await ctx.render('index',{data:result});
        }
    },
    testAction(){
        return async(ctx,next) => {
            ctx.body = "hi,test";
        }
    }
}
export default indexController;