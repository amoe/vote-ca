<template>
  <div>
    <p>Y size is {{ ySize }}, X size is {{ xSize }}</p>
  
  <table>

    <tr v-for="n in grid.length">
      <td v-for="n in grid[n].length">
        &#x25a0;
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
            ySize: 64,
            xSize: 64,
            grid: []
        }
    },
    created: function () {
        this.grid = vote.randomGrid(this.ySize, this.xSize);
    }
}
</script>
