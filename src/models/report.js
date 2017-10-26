class Report {
    constructor(id, time, coveredTime, numPings, numSuccess, numFailure, percentSuccess, percentFailure, numOutages,
        longestOutage, averageOutage, averageOutagesDaily) {
        this.id = id;
        this.time = time;
        this.coveredTime = coveredTime;
        this.numPings = numPings;
        this.numSuccess = numSuccess;
        this.numFailure = numFailure;
        this.percentSuccess = percentSuccess;
        this.percentFailure = percentFailure;
        this.numOutages = numOutages;
        this.longestOutage = longestOutage;
        this.averageOutage = averageOutage;
        this.averageOutagesDaily = averageOutagesDaily;
    }
}

class ReportBuilder {
    id(id) { this.id = id; }
    time(time) { this.time = time; }
    coveredTime(coveredTime) { this.coveredTime = coveredTime; }
    numPings(numPings) { this.numPings = numPings; }
    numSuccesses(numSuccesses) { this.numSuccesses = numSuccesses; }
    numFailure(numFailure) { this.numFailure = numFailure; }
    percentSuccess(percentSuccess) { this.percentSuccess = percentSuccess; }
    percentFailure(percentFailure) { this.percentFailure = percentFailure; }
    numOutages(numOutages) { this.numOutages = numOutages; }
    longestOutage(longestOutage) { this.longestOutage = longestOutage; }
    averageOutage(averageOutage) { this.averageOutage = averageOutage; }
    averageOutagesDaily(averageOutagesDaily) { this.averageOutagesDaily = averageOutagesDaily; }
    build() {
        return new Report(this.id, this.time, this.coveredTime, this.numPings, this.numSuccess, this.percentSuccess, this.percentFailure, this.numOutages,
            this.longestOutage, this.averageOutage, this.averageOutagesDaily);
    }
}

export { Report, ReportBuilder }
