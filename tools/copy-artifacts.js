const fs = require('fs-extra');
const { join } = require('path');

(async() => {
  const src = join(process.cwd(), 'dist');
  const copy = join(process.cwd(), 'functions/dist');

  await fs.rename(join(src, 'browser/index.html'), join(src, 'browser/index2.html'));
  await fs.remove(copy);
  await fs.copy(src, copy);
})();
