function testPlugin(babel) {
  return {
    visitor: {
      JSXAttribute(path) {
        console.log(path);
      }
    }
  };
};

module.exports = testPlugin;