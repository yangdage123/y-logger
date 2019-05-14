const types = {
  warn: {
    light: '\u001b[43;30m',
    black: '\u001b[40;33m',
    text: '\u001b[0;33m'
  },
  info: {
    light: '\u001b[46;30m',
    black: '\u001b[40;36m',
    text: '\u001b[0;36m'
  },
  success: {
    light: '\u001b[42;30m',
    black: '\u001b[40;32m',
    text: '\u001b[0;32m'
  },
  error: {
    light: '\u001b[41;30m',
    black: '\u001b[40;31m',
    text: '\u001b[0;31m'
  }
};
const clean = '\u001b[0m';

class Logger {
  constructor(theme) {
    this.theme = theme || 'light';
  }

  log(type, title, ...arg) {
    const t = types[type] || types.info;
    console.log(`${t[this.theme]} ${title} ${t.text} ${arg.join('')}${clean}`)
  }

  createBaseFun(type, title, ...arg) {
    if (arg.length > 1) {
      const title = arg.shift();
      this.log(type, title, ...arg);
    } else {
      this.log(type, title, ...arg);
    }
  }

  warn(...arg) {
    return this.createBaseFun('warn', 'WARN', ...arg);
  }

  info(...arg) {
    return this.createBaseFun('info', 'INFO', ...arg);
  }

  success(...arg) {
    return this.createBaseFun('success', 'SUCCESS', ...arg);
  }
  error(...arg) {
    return this.createBaseFun('error', 'ERROR', ...arg);
  }
}
module.exports = Logger;
