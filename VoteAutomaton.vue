<template>
  <div>
    <p>Y size is {{ ySize }}, X size is {{ xSize }}</p>
  
  <table>

    <tr v-for="n in ySize">
      <td v-for="n in xSize">
        &#x25a0; &#9633;
      </td>
    </tr>
  </table>
  
  </div>
</template>

<script>
console.log("inside app component");

export default {
    data: function () {
        return {
            ySize: 64,
            xSize: 64
        }
    }
}
</script>
