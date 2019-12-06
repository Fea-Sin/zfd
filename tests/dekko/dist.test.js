const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('zfd.css')
  .hasFile('zfd.min.css')
  .hasFile('zfd.js')
  .hasFile('zfd.min.js')
  .hasFile('zfd.less');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid'));
