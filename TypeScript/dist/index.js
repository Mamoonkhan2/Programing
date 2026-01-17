"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areYouPlayingBanjo(name) {
    // Implement me
    let char = name.charCodeAt(0);
    console.log(char);
    if (char == 82 || char == 114) {
        return name + " plays banjo";
    }
    else {
        return name + " does not play banjo";
    }
}
console.log(areYouPlayingBanjo("ramoon"));
console.log('hello world');
//# sourceMappingURL=index.js.map