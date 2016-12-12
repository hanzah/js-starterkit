/* eslint-disable no-console */

import waitForPort from 'wait-for-port';

waitForPort('localhost', 3001, { numRetries: 30 }, function(err) {
  if (err) throw new Error(err);
	console.log('Mock server available.');
  return 0;
});
