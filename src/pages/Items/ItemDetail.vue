<template>
  <div v-if="this.item" class="detalles-item">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center font-title-ds-gr">
            {{ this.item.name_item }}
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 diseño-grid">
          <h2>
            Descripcion
          </h2>
          <p>
            {{ this.item.description }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>
<style>
.img-principal {
  width: 50%;
  height: 90%;
}
.diseño-grid {
  font-size: 15px;
}
.font-title-ds-gr {
  font-family: "DS-Title", cursive;
  font-size: 90px;
}
@font-face {
  font-family: "DS-Title";
  src: url("../../assets/fonts/OptimusPrinceps.ttf");
}
.detalles-item {
  color: white;
}
@font-face {
  font-family: "DS-Title";
  src: url("../../assets/fonts/OptimusPrinceps.ttf");
}
</style>
<script>
import http from "../../http-common";

export default {
  name: "items-details",
  data() {
    return {
      item: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveItem() {
      var ide = this.$route.params.id;
      http
        .get("/items/view/" + ide)
        .then(response => {
          this.item = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }

    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveItem();
  }
};
</script>
