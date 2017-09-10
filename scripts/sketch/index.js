import fs from 'fs-extra'
import path from 'path'
import {importFolder, parseFile} from 'kactus-cli'

const sketchPath = "./sketch"

const sketchExport = (filePath) => parseFile(filePath)
		.then((pathName) => {
			console.log(`Sketch export to "${pathName}`);
		}).catch(e => console.error(`Error:${e}`));
const sketchImport = (docPath) => importFolder(docPath)
		.then((pathName) => {
			console.log(`Sketch import from "${pathName}`);
		}).catch(e => console.error(`Error:${e}`));

const sketch2json = () => {
	return fs.readdir(sketchPath, (err, files) => {
		files.forEach(item => {
			if (item.indexOf('.sketch') !== -1) {
				console.log(item)
				sketchExport(path.join(sketchPath, item))
			}
		});
	});
}

const json2sketch = () => {
	return fs.readdir(sketchPath, (err, files) => {
		files.forEach(item => {
			if (item.indexOf('.sketch') === -1) {
				console.log(item)
				sketchImport(path.join(sketchPath, item))
			}
		});
	});
}

export {sketch2json, json2sketch}