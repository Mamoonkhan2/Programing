"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculte(params) {
    if (typeof params == 'string') {
        // so now we narrow the string case and will get all methood related to string
        return `we narrowed string : ${params}`;
    }
    return `we naroowd number : ${params}`;
}
function orderChai(size) {
    if (size === 'small') {
        return `Add a small copy`;
    }
    if (size === 'medium' || size === 'large') {
        return `Add up Extra`;
    }
    return `size in number ${size}`;
}
class haldiChai {
    serve() {
        return `Surving Chai pleases`;
    }
}
class adrakChai {
    serve() {
        return `Surving Chai pleases`;
    }
}
function clientChai(chai) {
    if (chai instanceof haldiChai) {
        return `fucking haldi boys`;
    }
    return `ohh! again ${adrakChai}`;
}
function chaiOrder(obj) {
    return (typeof obj === 'object' &&
        typeof obj.type === "string" &&
        typeof obj.sugar === 'number' &&
        obj != null);
}
function chaiSurving(chai) {
    if (chaiOrder(chai)) {
        return `we are surving chai please`;
    }
    return `custom chai`;
}
function customerChai(chai) {
    switch (chai.type) {
        case "masala":
            return `masala`;
            break;
        case "adrak":
            return `adrak`;
            break;
        case "gingar":
            return `ginagar`;
            break;
        case 'string':
            return `custom`;
            break;
        default:
            break;
    }
}
let chai = { type: 'string', adraklevel: 150 };
console.log(customerChai(chai));
//# sourceMappingURL=narrowing.js.map