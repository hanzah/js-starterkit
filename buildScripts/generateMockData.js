import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

/* eslint-disable no-console */

fs.writeFile('./server/mockAPI/db.json', json, function(err) {
	if(err) {
		console.log(chalk.red(err));
	} else {
		console.log(chalk.green('Mock data generated'));
	}
});
