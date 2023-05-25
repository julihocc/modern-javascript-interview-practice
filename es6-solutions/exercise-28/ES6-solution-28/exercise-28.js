async function getOne(url) {
  const response = await fetch(url);
  return await response.json();
}

// const _async = {
//     getAll: async function (urlArray, callback){
//         const output = await Promise.all(urlArray.map(async (url) => {
//             return await getOne(url);
//         }));
//         return output.map(callback);
//     }
// }
const _async = {
    getAll: async function(urlArray, callback) {
        const output = await Promise.all(
            urlArray.map(async url => {
                const data = await getOne(url);
                return callback(data);
            })
        );
        return output;
    }
};

// test 

const urlArray = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2', 'https://jsonplaceholder.typicode.com/users/3'];

const callback = (data) => {
    return data.name;
}

_async.getAll(urlArray, callback)
    .then(data => console.log(data));
