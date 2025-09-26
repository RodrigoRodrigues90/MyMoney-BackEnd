"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
const process_1 = require("process");
exports.jwtConstants = {
    secret: process_1.env.JWT_SECRET,
    expiresIn: '360d',
};
//# sourceMappingURL=constants.js.map