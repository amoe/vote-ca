// webpack entry point

var Vue = require('vue');
var vote = require('./vote.js');
var VoteAutomaton = require('./VoteAutomaton.vue');

new Vue({
    el: '#app',
    components: { VoteAutomaton }
})
