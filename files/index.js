const Path = require('path');
const FS = require('fs');

const dataDirectory = Path.join(__dirname, Path.sep, 'data');

// Read and write files on the file system
// `${dataDirectory}${Path.sep}people1.json`
const peoplePath = dataDirectory + Path.sep + 'people.json';
const doesExist = FS.existsSync(peoplePath);

const people = require('./data/people');
// console.log(people);

const raw = FS.readFileSync(peoplePath);
// console.log(raw.toString()); // String not an object


const result = FS.appendFileSync(dataDirectory + Path.sep + 'temp.json', JSON.stringify({ name: 'Tyler' }));
// console.log(result);


// Without a callback, remember to catch your errors
try {
  FS.writeFileSync('blah.txt', 'Hello, you!');
} catch (err) {
  console.error(err);
}


// Explain file permissions
// CHOWN / CHMOD

// Explain the purpose of streams

const stream = FS.createReadStream('blah.txt', { autoClose: true });
stream.on('data', (data) => {
  console.log(data.toString());
  // console.log(data);
});

// console.log(stream);

// Chain streams together
// https://nodejs.org/dist/latest-v7.x/docs/api/stream.html#stream_implementing_a_duplex_stream
