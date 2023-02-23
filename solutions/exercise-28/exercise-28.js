async function getOne(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const _async = {
    getAll: async function (urlArray, callback){
        const output = {};
        for(const index in urlArray){
            const url = urlArray[index];
            const data = await getOne(url);
            // console.log(data);
            output[index] = callback(data);
        }
        console.log(output);
    }
}

// test 

const urlArray = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2', 'https://jsonplaceholder.typicode.com/users/3'];

const callback = (data) => {
    return data.name;
}

_async.getAll(urlArray, callback);
