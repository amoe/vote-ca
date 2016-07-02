<template>
  <div>
    <p>Y size is {{ ySize }}, X size is {{ xSize }}</p>
  
    <button v-on:click="timeStep">Step</button>

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
            grid: []
        }
    },
    created: function () {
        this.grid = vote.randomGrid(this.ySize, this.xSize);
    },
    methods: {
        'timeStep': function () {
            console.log("a step was requested");
        }
    }
}
</script>
