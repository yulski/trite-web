import { Report } from "../models/Report.js";

export default class {
    getAllReports(date=null) {
        if(date === null) date = new Date();
        return {
            day: new Report(1, date, date, 12345, 12340, 5, 99, 1, 1, "20 seconds", "20 seconds", 1),
            week: new Report(2, date, date, 1234567, 1234500, 67, 98, 2, 7, "40 seconds", "15 seconds", 1),
            month: new Report(3, date, date, 12345678, 12345500, 178, 99, 1, 30, "3 minutes", "22 seconds", 1),
            overall: new Report(4, new Date(), new Date(), 1234567890, 1234567000, 890, 99, 1, 142, "8 minutes", "10 seconds", 1)
        }
    }
}
