const async = {
    getAll: (tasks, callback) => {
        let completedTasks = 0;
        const results = {};

        tasks.forEach((task, index) => {
            task((error, result) => {
                if (error) {
                    console.error('Error:', error);
                    results[index + 1] = null;
                } else {
                    results[index + 1] = result;
                }

                completedTasks++;

                if (completedTasks === tasks.length) {
                    callback(results);
                }
            });
        });
    }
};

const axCall1 = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not OK');
            }
        })
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
};

const axCall2 = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not OK');
            }
        })
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
};

const callback = (results) => {
    console.log('Callback context:', results);
};

async.getAll([axCall1, axCall2], callback);
