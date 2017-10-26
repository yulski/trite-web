import ReportModel from "../models/report.js";

export default class {
    getAllReports() {
        return {
            today: new ReportModel(1, new Date(), new Date(), 12345, 12340, 5, 99, 1, 1, "20 seconds", "20 seconds", 1),
            thisWeek: new ReportModel(2, new Date(), new Date(), 1234567, 1234500, 67, 98, 2, 7, "40 seconds", "15 seconds", 1),
            thisMonth: new ReportModel(3, new Date(), new Date(), 12345678, 12345500, 178, 99, 1, 30, "3 minutes", "22 seconds", 1),
            overall: new ReportModel(4, new Date(), new Date(), 1234567890, 1234567000, 890, 99, 1, 142, "8 minutes", "10 seconds", 1)
        }
    }

    getReportForDay(date) {
        return new ReportModel(1, new Date(), new Date(), 12345, 12340, 5, 99, 1, 1, "20 seconds", "20 seconds", 1)
    }
}
