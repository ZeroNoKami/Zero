<template>
  <div class="tabla-supplier">
    <table
      id="titles"
      class="custom table-striped table-dark"
      style="margin: 0 auto;"
    >
      <thead>
        <tr>
          <th style="width: 5px; text-align: center;">ID</th>
          <th style="width: 5px; text-align: center;">Nombre</th>
          <th style="width: 5px; text-align: center;">Pais</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(supplier, index) in suppliers" :key="index">
          <td align="center">{{ supplier.id_supplier }}</td>
          <td align="center">{{ supplier.name_supplier }}</td>
          <td align="center">{{ supplier.country.name_country }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../../http-common";

export default {
  name: "supplier-list",
  data() {
    return {
      suppliers: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveSupplier() {
      http
        .get("/supplier/list")
        .then(response => {
          this.suppliers = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveSupplier();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveSupplier();
  }
};
</script>

<style>
.tabla-supplier {
  color: white;
  width: 90%;
  margin: 0 auto;
  background-color: #222;
}
.list {
  z-index: 99999;
  text-align: left;
  max-width: 100%;
  margin: auto;
}
.font-title-ds {
  font-family: "DS-Title", cursive;
  font-size: 70px;
}
@font-face {
  font-family: "DS-Title";
  src: url("../../assets/fonts/OptimusPrinceps.ttf");
}
.list {
  text-align: left;
  max-width: 100%;
  margin: auto;
}
.custom {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>
