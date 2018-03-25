function htmlAfterWebpackPlugin(options){
    //打包的数据
    // this.options = options;
}

htmlAfterWebpackPlugin.prototype.apply = function (compiler) {
    compiler.hooks.compilation.tap('InterpolateHtmlPlugin', compilation => {
      console.log('begin😄');
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        'InterpolateHtmlPlugin',
        data =>{
            // if(data.plugin.options.filename.indexOf('layout.html') != -1) return;
            const jsFiles = data.assets.js;
            const cssFile = data.assets.css;
            let htmlContent = data.html;

            let scripts = '';
            let styles = '';
            jsFiles.map(jsFiles=>{
                scripts +='<script type="text/javascript" src="'+jsFiles+'"></script>';
            })
            cssFile.map(jsFiles=>{
                styles +='<link rel="stylesheet" href="'+cssFile+'" type="text/css">';
            })
            htmlContent = htmlContent.replace("{% block scripts %}{% endblock %}", 
            `{% block scripts %}${scripts}{% endblock %}`);
            htmlContent = htmlContent.replace("{% block head %}{% endblock%}",
            `{% block head %}${styles}{% endblock %}`);
            data.html=htmlContent;
        }
      )
    })
  }
module.exports = htmlAfterWebpackPlugin;