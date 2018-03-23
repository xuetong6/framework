import indexController from './indexController';
const  initController = {
    getAllrouters(app,router){
        app.use(router(_ => {
            _.get('/index', indexController.indexAction());
            _.get('/test', indexController.testAction())
          })
        )
    }
}
export default initController;