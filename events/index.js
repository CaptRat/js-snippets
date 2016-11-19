// discriminate between synchronous and async events and understand the complexity of async

const work = () => {
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(number => {
    console.log(number + 1);
  });
  
  ['Tyler', 'Bob', 'Donald', 'Hillary'].forEach(person => {
    console.log(person);
  });
};
//
// work();


// use callbacks to run after a function is completed

const workBetterAgain = (callback) => callback(null);

const workBetter = (callback) => {
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(number => {
    console.log(number + 1);
  });
  
  workBetterAgain((err) => {
    throw new Error(`I'm a nasty error`);
    
    workBetterAgain((err2) => {
      if (err2) throw err2;
      return callback(null, 'Done');
    });
  })
};

workBetter((err, message) => {
  if(err) console.error(err);
  console.log(message);
});


// use promises in place of callbacks


const iPromiseIWorkBetter = () => {
  
  // Can remove the reject piece because it's not used
  return new Promise((resolve, reject) => {
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(number => {
    //   console.log(number + 1);
    // });
    
    return resolve();
  });
};

const log = (message) => {
  return new Promise((resolve, reject) => {
    
    // return resolve(message);
    // return reject(new Error('My famous error'));
    throw new Error('My famous error');
  });
};

//
// iPromiseIWorkBetter()
//   .then(() => {
//     return log(`I'm done`)
//   })
//   .then(message => console.log(message))
//   .catch(err => console.error(err));
//
//
// iPromiseIWorkBetter()
//   .then(() => {
//     return log(`I'm done`)
//   })
//   .then(message => console.log(message));
//   // .catch(err => console.error(err));



const workAsync = async() => {
  await iPromiseIWorkBetter();
  return await log();
};

try {
  workAsync()
} catch(err) {
  console.error(err);
}
