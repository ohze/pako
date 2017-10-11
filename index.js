// Top level file is just a mixin of submodules & constants

export * from './lib/deflate';
export * from './lib/inflate';
// export * from './lib/zlib/constants';

import { assign } from './lib/utils/common';

import * as deflate from './lib/deflate';
import * as inflate   from './lib/inflate';
import constants from './lib/zlib/constants';

const pako = {};

assign(pako, deflate, inflate, constants);

export default pako;
