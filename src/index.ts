#!/usr/bin/env node

import { resolve } from 'path';
import { createConfigs } from './create-configs';
import * as process from "process";

createConfigs({
  root: process.argv[2] && resolve(process.cwd(), process.argv[2]),
}).catch(console.error);
