const Mocha = require("mocha");
const mocha = new Mocha({

})
mocha.addFile('./service/router.spec.js');
mocha.run(function(){
    console.log("All done");
    process.exit();
})