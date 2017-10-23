<template>
    <div id="settings">
        <div v-if="finished">
            <h3>Thanks</h3>
            <p><strong>Your settings have been saved</strong></p>
        </div>
        <div v-else>
            <h2>Settings</h2>
            <form action="#" method="post">
                <section>
                    Do you want reports emailed to you?
                    <section id="form-row">
                        <label for="emails-yes">Yes</label>
                        <input type="radio" id="emails-yes" name="send-emails" value="yes"
                            v-model="sendEmails"/>
                    </section>
                    <section id="form-row">
                        <label for="emails-no">No</label>
                        <input type="radio" id="emails-no" name="send-emails" value="no"
                            v-model="sendEmails"/>
                    </section>
                </section>
                <section class="form-row" v-if="sendEmails === 'yes'">
                    <label for="email-freq">How often do you want reports emailed to you?</label>
                    <select id="email-freq" v-model="emailFreq">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </section>
                <section class="form-row">
                    <label for="ping-freq">
                        Set frequency that pings will be sent out at to check internet connection
                    </label>
                    <select id="ping-freq" v-model="pingFreq">
                        <option value="2">Every 2 seconds</option>
                        <option value="3">Every 3 seconds</option>
                        <option value="5">Every 5 seconds</option>
                        <option value="10">Every 10 seconds</option>
                        <option value="30">Every 30 seconds</option>
                        <option value="60">Every 1 minute</option>
                        <option value="120">Every 2 minutes</option>
                        <option value="180">Every 3 minutes</option>
                        <option value="300">Every 5 minutes</option>
                        <option value="600">Every 10 minutes</option>
                    </select>
                </section>
                <section class="form-row">
                    <label for="ping-addr">
                        Set where Trite should ping to check internet connection
                    </label>
                    <select id="ping-addr" v-model="pingAddr">
                        <option value="google.com">Google</option>
                        <option value="wikipedia.org">Wikipedia</option>
                        <option value="amazon.com">Amazon</option>
                        <option value="microsoft.com">Microsoft</option>
                        <option value="apple.com">Apple</option>
                    </select>
                </section>
                <section class="submit-btn-wrapper">
                    <input type="submit" value="Confirm" v-on:click="confirmSettings">
                </section>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "settings",
    data: function() {
        return {
            sendEmails: "no",
            emailFreq: "weekly",
            pingFreq: "5",
            pingAddr: "google.com",
            finished: false
        }
    },
    methods: {
        confirmSettings: function(e) {
            e.preventDefault();
            // TODO save settings
            this.finished = true;
        }
    }
}
</script>
