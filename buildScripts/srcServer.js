import express from 'express';
import path from'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

const publicPath = config.output.publicPath

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: publicPath
}));

app.get('*', function(req, res, next) {
	var filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
	});
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
