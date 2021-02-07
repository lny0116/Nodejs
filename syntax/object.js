var members = ['malgun', 'gothic', 'tistory'];
console.log(members[1]);
var i = 0;
while (i < members.length) {
    console.log('array loop:', members[i]);
    i += 1;
}

var roles = {
    'programmer': 'malgun',
    'designer': 'gothic',
    'manager': 'tistory'
};
console.log(roles.designer);

for(var name in roles){
    console.log('object:', name, 'value:', roles[name]);
}