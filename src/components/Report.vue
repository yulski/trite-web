<template>
    <div id="report">
        <p>Time and date of report: {{reportModel.time.toString()}}</p>
        <p>Report covers {{reportModel.coveredTime.toString()}}</p>
        <p>Total number of pings: {{reportModel.numPings}}</p>
        <p>Number of successes: {{reportModel.numSuccess}}</p>
        <p>Number of failures: {{reportModel.numFailure}}</p>
        <p>Percentage failures: {{reportModel.percentFailure}}%</p>
        <p>Percentage success: {{reportModel.percentSuccess}}%</p>
        <p>Number of outages: {{reportModel.numOutages}}</p>
        <p>Longest outage: {{reportModel.longestOutage}}</p>
        <p>Average outage: {{reportModel.averageOutage}}</p>
        <p>Average outages per day: {{reportModel.averageOutagesDaily}}</p>
        <p><b>graph or chart in here</b></p>
    </div>
</template>

<script>
export default {
    name: "report",
    props: ["reportModel"]
}
</script>
