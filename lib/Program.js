var Class    = require('js-class'),
    flow     = require('js-flow'),
    neuron   = require('evo-neuron'),
    idioms   = require('evo-idioms'),

    Jobs = require('./Jobs');

var Program = Class(neuron.Program, {
    constructor: function () {
        neuron.Program.prototype.constructor.call(this, 'jobs', { neuron: { connects: ['connector', 'states'] } });
        this.connector = new idioms.ConnectorClient(this.neuron);
        this.states = new idioms.StatesClient(this.neuron);
    }
}, {
    statics: {
        run: function () {
            new Program().run();
        }
    }
});

module.exports = Program;
