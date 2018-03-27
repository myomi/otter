<template>

    <div class="drawer container-fluid">
        <div class="row">
            <svg xmlns="http://www.w3.org/2000/svg" 
                viewbox="0 0 300 300" width="300" height="300" id="mysvg">
                <rect x="0" y="0" width="100" height="100" stroke="black"/>
            </svg>
        </div>
        <div class="row">
            <button class="btn btn-primary" @click="toImage()">To Image</button>
            <button class="btn btn-primary" @click="toImageWithCanvg">To Image(Use Canvg)</button>
        </div>
        <div class="row">
            <canvas id="canvas" width="300" height="300"></canvas>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
const canvg = require('canvg');

export default Vue.extend({
  methods: {
    toImageWithCanvg() {
      const svg = this.$el.querySelector('#mysvg') as SVGElement;
      const canvas = this.$el.querySelector('#canvas') as HTMLCanvasElement;
      const src = new XMLSerializer().serializeToString(svg);
      canvg(canvas, src, {
        ImageClass: Image
      });
    },
    toImage() {
      const svg = this.$el.querySelector('#mysvg') as SVGElement;
      console.log(svg);
      const canvas = this.$el.querySelector('#canvas') as HTMLCanvasElement;
      const cxt = canvas.getContext('2d') as CanvasRenderingContext2D;
      const blob = new Blob([new XMLSerializer().serializeToString(svg)], {
        type: 'image/svg+xml;charset=utf-8'
      });
      const DOMURL = self.URL || self;
      const url = DOMURL.createObjectURL(blob);
      const image = new Image();
      image.onload = function() {
        cxt.drawImage(image, 0, 0);
      };
      image.src = url;
    }
  }
});
</script>


<style lang="scss" scoped>
.drawer {
  overflow-y: scroll;
}
#mysvg {
  border: 1px solid red;
}
#canvas {
  border: 1px solid blue;
}
</style>
