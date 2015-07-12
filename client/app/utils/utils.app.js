'use strict';

import {keyEnter} from './keyEnter.service';

const utilsAppName = 'TodoMVC.utils';

require('angular')
  .module(utilsAppName, [])
  
  // Services
  .service('TodoMVC.utils.keyEnter', keyEnter)
;


export { utilsAppName };
