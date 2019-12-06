import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('zfd dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    const zfd = testDist ? require('../dist/zfd') : require('../components'); //eslint-disable-line
    expect(Object.keys(zfd)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('should have zfd.version', () => {
      const zfd = require('../dist/zfd'); //eslint-disable-line
      expect(zfd.version).toBe(pkg.version);
    });
  }
});
