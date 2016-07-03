<template>
  <div>
    <p>Y size is {{ ySize }}, X size is {{ xSize }}</p>
  
    <button v-on:click="timeStep">Step</button>
    <button v-on:click="togglePlaying">Play/Pause</button>
    <button v-on:click="randomize">Randomize</button>

    <!-- Blank div just forces a line break.  We want to avoid dealing
         with CSS at present but we should add normalize.css -->
    <div>
      <canvas v-el:canvas id="grid2" height="{{ ySize }}" width="{{ xSize }}"></canvas>
    </div>
  </div>
</template>

<script>
import vote from './vote.js';
import _ from 'lodash';

console.log("inside app component");

export default {
    data: function () {
        return {
            ySize: 200,
            xSize: 320,
            grid: [],
            isPlaying: false,
            blackPixelDatum: null,
            context: null
        }
    },
    created: function () {
        this.grid = vote.randomGrid(this.ySize, this.xSize);
        setInterval(this.maybeStep, 100);
    },
    ready: function () {
        this.context = this.$els.canvas.getContext("2d");
        this.paint();
    },
    methods: {
        'paint': function () {
            var onStyle = "rgba(0, 0, 0, 1.0)";
            var offStyle = "rgba(100%, 100%, 100%, 1.0)";
            var y, x;
            for (y of _.range(this.ySize)) {
                for (x of _.range(this.xSize)) {
                    if (this.grid[y][x]) {
                        this.context.fillStyle = onStyle;
                    } else {
                        this.context.fillStyle = offStyle;
                    }

                    this.context.fillRect(x, y, 1, 1 );
                }
            }
        },
        'randomize': function () {
            this.grid = vote.randomGrid(this.ySize, this.xSize);
            this.paint();
        },
        'timeStep': function () {
            this.grid = vote.nextStep(this.grid);
            this.paint();
        },
        'togglePlaying': function () {
            this.isPlaying = !this.isPlaying;
        },
        'maybeStep': function () {
            if (this.isPlaying) {
                console.log("stepping");
                this.timeStep();
            }
        }
    }
}
</script>
