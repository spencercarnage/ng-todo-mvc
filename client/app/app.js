'use strict';

import {appRoutesConfig}  from './app.routes';
import {appTemplatesRunBlock, appTemplatesModuleName} from './app.templates';
import {AllController} from './routes/all/all.controller';

require('angular')
  .module('TodoMVC', [
    require('angular-ui-router'),
    //appTemplatesModuleName
  ])
  .run(appTemplatesRunBlock)
  .config(appRoutesConfig)
  .controller('AllController', AllController)
;
