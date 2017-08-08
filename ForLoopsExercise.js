var text = "This is a text string"
var myName = "Harold"
var hits = []

for(var i = 0; i < text.length; i++) {
    if(text[i] === myName[0]) {
        for(var j = i; j < myName.length; j++) {
            hits.push([j]);
        }
    }
}