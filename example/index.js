var Logger = require('../src');

// 不传值 默认为 light
var lLogger = new Logger();

var bLogger = new Logger('black');

// info方法
lLogger.info('信息');
bLogger.info('信息');
lLogger.info('信息', 'Hello');
bLogger.info('信息', 'Hello');

// success方法
lLogger.success('成功');
bLogger.success('成功');
lLogger.success('成功', 'Hello');
bLogger.success('成功', 'Hello');

// warn方法
lLogger.warn('警告');
bLogger.warn('警告');
lLogger.warn('警告', 'Hello');
bLogger.warn('警告', 'Hello');

// error方法
lLogger.error('错误');
bLogger.error('错误');
lLogger.error('错误', 'Hello');
bLogger.error('错误', 'Hello');
