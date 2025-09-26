"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtil = void 0;
class DateUtil {
    static getFirstDateOfMonth() {
        const date = new Date();
        const firstDate = new Date(date.getFullYear(), date.getMonth(), 1)
            .toISOString()
            .split('T');
        return firstDate[0].concat('T00:00:00.000Z');
    }
    static getLastDateOfMonth() {
        const date = new Date();
        const lastDay = new Date(date.getMonth() + 1, date.getFullYear(), 0).getDate();
        const lastDate = new Date(date.getFullYear(), date.getMonth(), lastDay)
            .toISOString()
            .split('T');
        return lastDate[0].concat('T00:00:00.000Z');
    }
    static getDateTodayInit() {
        const today = new Date(Date.now()).toISOString().split('T');
        return today[0].concat('T00:00:00.000Z');
    }
    static getDateTomorrowInit() {
        const tomorrow = this.addDays(new Date(Date.now()), 1)
            .toISOString()
            .split('T');
        return tomorrow[0].concat('T00:00:00.000Z');
    }
    static getDateTodayEnd() {
        const today = new Date(Date.now()).toISOString().split('T');
        return today[0].concat('T23:59:59.000Z');
    }
    static getDateShort(date) {
        return date.split('T')[0];
    }
    static addDays(date, days) {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    }
}
exports.DateUtil = DateUtil;
//# sourceMappingURL=date_util.js.map