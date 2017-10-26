<template>
    <div id="dashboard">
        <h2>Your Dashboard</h2>
        <section>
            <label for="pick-day">Pick another day to view report from: </label>
            <input type="date" id="pick-date" v-model="day" v-on:change="loadReportsForSelectedDate">
        </section>
        <hr>
        <div id="day" class="report-section">
            <div class="report-section-title">
                <h3>Daily report</h3>
                <a class="report-section-caret" v-on:click="toggleDay">
                    &#11206;
                </a>
            </div>
            <report v-if="showDay" :reportModel="allReports.day"/>
        </div>
        <div id="week" class="report-section">
            <div class="report-section-title">
                <h3>Weekly report</h3>
                <a class="report-section-caret" v-on:click="toggleWeek">
                    &#11206;
                </a>
            </div>
            <report v-if="showWeek" :reportModel="allReports.week"/>
        </div>
        <div id="month" class="report-section">
            <div class="report-section-title">
                <h3>Monthly report</h3>
                <a class="report-section-caret" v-on:click="toggleMonth">
                    &#11206;
                </a>
            </div>
            <report v-if="showMonth" :reportModel="allReports.month"/>
        </div>
        <div id="overall-report" class="report-section">
            <div class="report-section-title">
                <h3>Overall report</h3>
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
import { Report as ReportModel, ReportBuilder } from "../models/Report.js";
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
            day: new Date().toDateInputValue(),
            showDay: true,
            showWeek: true,
            showMonth: true,
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
        toggleDay: function(e) {
            this.showDay = !this.showDay;
            this.toggleCaret(e.target);
        },
        toggleWeek: function(e) {
            this.showWeek = !this.showWeek;
            this.toggleCaret(e.target);
        },
        toggleMonth: function(e) {
            this.showMonth = !this.showMonth;
            this.toggleCaret(e.target);
        },
        toggleOverall: function(e) {
            this.showOverall = !this.showOverall;
            this.toggleCaret(e.target);
        },
        loadReportsForSelectedDate: function(e) {
            this.allReports = reportService.getAllReports(e.target.valueAsDate);
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
