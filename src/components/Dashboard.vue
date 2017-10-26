<template>
    <div id="dashboard">
        <h2>Your Dashboard</h2>
        <section>
            <label for="pick-day">Pick another day to view report from: </label>
            <input type="date" id="pick-date" v-model="currentDay">
        </section>
        <hr>
        <div id="current-day" class="report-section">
            <div class="report-section-title">
                <h3>Current day ({{currentDay}})</h3>
                <a class="report-section-caret" v-on:click="toggleCurrentDay">
                    &#11206;
                </a>
            </div>
            <report v-if="showCurrentDay" :reportModel="allReports.today"/>
        </div>
        <div id="this-week" class="report-section">
            <div class="report-section-title">
                <h3>This week</h3>
                <a class="report-section-caret" v-on:click="toggleThisWeek">
                    &#11206;
                </a>
            </div>
            <report v-if="showThisWeek" :reportModel="allReports.thisWeek"/>
        </div>
        <div id="this-month" class="report-section">
            <div class="report-section-title">
                <h3>This month</h3>
                <a class="report-section-caret" v-on:click="toggleThisMonth">
                    &#11206;
                </a>
            </div>
            <report v-if="showThisMonth" :reportModel="allReports.thisMonth"/>
        </div>
        <div id="overall-report" class="report-section">
            <div class="report-section-title">
                <h3>Overall</h3>
                <a class="report-section-caret" v-on:click="toggleOverall">
                    &#11206;
                </a>
            </div>
            <report v-if="showOverall" :reportModel="allReports.overall"/>
        </div>
    </div>
</template>

<script>
import Report from "./Report.vue";
import ReportModel from "../models/report.js";
import ReportService from "../services/report-service.js";

var reportService = new ReportService();

Date.prototype.toDateInputValue = function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
};

export default {
    name: "dashboard",
    data: function() {
        return {
            currentDay: new Date().toDateInputValue(),
            showCurrentDay: true,
            showThisWeek: true,
            showThisMonth: true,
            showOverall: true,
            allReports: reportService.getAllReports()
        }
    },
    methods: {
        toggleCaret: function(elem) {
            var upCaret = "\u2bc5",
                downCaret = "\u2bc6";
                elem.innerHTML = elem.innerHTML === upCaret ? downCaret : upCaret;
        },
        toggleCurrentDay: function(e) {
            this.showCurrentDay = !this.showCurrentDay;
            this.toggleCaret(e.target);
        },
        toggleThisWeek: function(e) {
            this.showThisWeek = !this.showThisWeek;
            this.toggleCaret(e.target);
        },
        toggleThisMonth: function(e) {
            this.showThisMonth = !this.showThisMonth;
            this.toggleCaret(e.target);
        },
        toggleOverall: function(e) {
            this.showOverall = !this.showOverall;
            this.toggleCaret(e.target);
        }
    },
    components: { report: Report }
}
</script>

<style scoped>
.report-section-title h3 {
    display: inline-block;
    text-decoration: underline;
}
.report-section-caret:hover {
    cursor: pointer;
    color: #00120b;
}
</style>
