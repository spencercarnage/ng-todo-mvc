function appTemplatesRunBlock ($templateCache) {
  'use strict';

  $templateCache.put('/routes/all/index.html',
    "<h1>all</h1><p>sup</p>"
  );

}
appTemplatesRunBlock.$inject = ['$templateCache'];
const appTemplatesModuleName = 'app.templates';
export {appTemplatesRunBlock, appTemplatesModuleName};