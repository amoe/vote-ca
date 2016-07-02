<template>
  <div>
    <p>Y size is {{ ySize }}, X size is {{ xSize }}</p>
  
    <button v-on:click="timeStep">Step</button>
    <button v-on:click="togglePlaying">Play/Pause</button>
    <button v-on:click="randomize">Randomize</button>

    <table>
      <tr v-for="y in grid.length">
        <td v-for="x in grid[y].length">

          <span v-if="grid[y][x]">&#x25a0;</span>
          <span v-else>&#9633;</span>
        </td>
      </tr>
    </table>
  
  </div>
</template>

<script>
import vote from './vote.js';

console.log("inside app component");

export default {
    data: function () {
        return {
            ySize: 25,
            xSize: 50,
            grid: [],
            isPlaying: false            
        }
    },
    created: function () {
        this.randomize();
        setInterval(this.maybeStep, 2000);
    },
    methods: {
        'randomize': function () {
            this.grid = vote.randomGrid(this.ySize, this.xSize);
        },
        'timeStep': function () {
            console.log("a step was requested");
            this.grid = vote.nextStep(this.grid);
        },
        'togglePlaying': function () {
            this.isPlaying = !this.isPlaying;
        },
        'maybeStep': function () {
            console.log("step function called from interval");

            if (this.isPlaying) {
                this.timeStep();
            }
        }
    }
}
</script>
