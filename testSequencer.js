const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
  sort(tests) {
    // Separate tests with `__` in their paths from the rest
    const testsWithUnderscore = [];
    const otherTests = [];

    for (const test of tests) {
      if (test.path.includes('__')) {
        testsWithUnderscore.push(test);
      } else {
        otherTests.push(test);
      }
    }

    // Combine the prioritized tests with the rest
    // Tests with `__` in their paths are run first
    return [...testsWithUnderscore, ...otherTests];
  }
}

module.exports = CustomSequencer;
