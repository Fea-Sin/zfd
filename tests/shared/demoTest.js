import glob from 'glob';
import { render } from 'enzyme';
import MockDate from 'mockdate';
import moment from 'moment';

const testDist = process.env.LIB_DIR === 'dist';

function ariaConvert(wrapper) {
  if (!testDist) return wrapper;

  const matches = new Map();

  function process(entry) {
    const { attribs, children } = entry;
    if (matches.has(entry)) return;
    matches.set(entry, true);

    // Change aria
    if (attribs && attribs['aria-controls']) {
      attribs['aria-controls'] = ''; // Remove all the aria to keep render sync in jest & jest node
    }

    // Loop children
    if (!children) return;
    (Array.isArray(children) ? children : [children]).forEach(process);
  }

  Object.keys(wrapper).forEach(key => {
    const entry = wrapper[key];
    process(entry);
  });

  return wrapper;
}

export default function demoTest(component, options = {}) {
  const files = glob.sync(`./components/${component}/demo/*.md`);

  files.forEach(file => {
    let testMethod = options.skip === true ? test.skip : test;
    if (Array.isArray(options.skip) && options.skip.some(c => file.includes(c))) {
      testMethod = test.skip;
    }
    testMethod(`renders ${file} correctly`, () => {
      MockDate.set(moment('2019-12-17'));
      const demo = require(`../.${file}`).default; // eslint-disable-line
      const wrapper = render(demo);

      // Convert aria related content
      ariaConvert(wrapper);

      expect(wrapper).toMatchSnapshot();
      MockDate.reset();
    });
  });
}
