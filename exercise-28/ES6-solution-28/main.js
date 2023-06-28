var async = {
    getAll: function (ajaxCalls, callback) {
        var placeholders = ajaxCalls.map(function(ajaxCall) {
            return new Promise(function(keep, throwAway) {
                ajaxCall(function(error, data) {
                    if (error) {
                        throwAway(error);
                    } else {
                        keep(data);
                    }
                });
            });
        });

        Promise.all(placeholders)
            .then(function(allData) {
                var collectedData = {};
                allData.forEach(function(data, index) {
                    collectedData[index + 1] = data;
                });
                callback.call(collectedData);
            })
            .catch(function(error) {
                console.error("Oops, something went wrong:", error);
            });
    }
};

var getData1 = function(callback) {
    setTimeout(function() { callback(null, "Got data 1"); }, 1000);
};

var getData2 = function(callback) {
    setTimeout(function() { callback(null, "Got data 2"); }, 2000);
};

var doSomethingWithResults = function() {
    console.log(this);
};

async.getAll([getData1, getData2], doSomethingWithResults);
