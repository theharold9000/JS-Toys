var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Martin",
        number: "0423949238",
        address: ["46 Princess Street", "Fairfield", "4103"],
        },
    steve: {
        firstName: "Steve",
        lastName: "Williams",
        number: "0499491857",
        address: ["23 Swann Road", "Taringa", "4163"],
        },
};

var list = function() {
    for (var entry in friends) {
        console.log(entry);
    }
}

var search = function(name) {
    for (var entry in friends) {
        if (friends[entry].firstName === name) {
            console.log(friends[entry]);
        }
    }
}