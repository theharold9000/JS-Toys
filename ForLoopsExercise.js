var text = "This exercise is totally done"
var myName = "harold"
var hits = []

for(var i = 0; i < text.length; i++); {
    if(text[i] === "h") {
        for(var j = i; j < (i + myName.length); j++); {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found")
}
else {
    console.log(hits)
}