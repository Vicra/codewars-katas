var fail =
    [
        ['n'],
        ['n', 's'],
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
        ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w'],
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n']
    ];
var pass =
    [
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
        ['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
        ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'],
        ['n', 'n', 'n', 's', 's', 's', 'e', 'w', 'n', 's']
    ];


console.log("should pass");
console.log(isValidWalk(pass[0]));
console.log(isValidWalk(pass[1]));
console.log(isValidWalk(pass[2]));
console.log(isValidWalk(pass[3]));

console.log("should fail");
console.log(isValidWalk(fail[0]));
console.log(isValidWalk(fail[1]));
console.log(isValidWalk(fail[2]));
console.log(isValidWalk(fail[3]));
console.log(isValidWalk(fail[4]));

function isValidWalk(walk) {
    let x = 0;
    let y = 0;

    if (walk.length == 10) {
        for (let i = 0; i < walk.length; i++) {
            if (walk[i] == 'n') {
                y++;
            }
            else if (walk[i] == 's') {
                y--;
            }
            else if (walk[i] == 'e') {
                x++;
            }
            else if (walk[i] == 'w') {
                x--;
            }
        }

        if (x == 0 && y == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}