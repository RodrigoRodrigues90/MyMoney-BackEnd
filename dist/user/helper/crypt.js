"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.generateHash = void 0;
const bcrypt = require("bcrypt");
async function generateHash(password) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
}
exports.generateHash = generateHash;
async function verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=crypt.js.map