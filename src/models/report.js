export default class {
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
