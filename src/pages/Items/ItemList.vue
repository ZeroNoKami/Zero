<template>
  <div class="tabla-personajes">
    <table id="personajes" class="custom table-striped table-dark">
      <thead>
        <tr>
          <td align="center">ID</td>
          <td align="center">Nombre</td>
          <td align="center">Proveedor</td>
          <td align="center">Estado</td>
          <td align="center">Precio</td>
          <td align="center">Fecha de Creacion</td>
          <td align="center">Creador</td>
          <td align="center"><b-button variant="warning">d</b-button></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td align="center">{{ item.id_item }}</td>
          <td align="center">{{ item.name_item }}</td>
          <td align="center">{{ item.supplier.name_supplier }}</td>
          <td align="center">{{ getState(item.state) }}</td>
          <td align="center">{{ item.price }}</td>
          <td align="center">{{ item.creation_date }}</td>
          <td align="center">{{ item.creation_user.username }}</td>
          <td align="center">
            <b-button variant="primary">d</b-button>
            <b-button variant="danger">d</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import http from "../../http-common";

export default {
  name: "personajes-list",
  data() {
    return {
      items: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveItems() {
      http
        .get("/items/list")
        .then(response => {
          this.items = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    /* eslint-enable no-console */
    getState(estado) {
      if (estado == 1) {
        return "Activo";
      }
      return "Inactivo";
    }
  },

  mounted() {
    this.retrieveItems();
  }
};
</script>
<style>
.font-title-ds {
  font-family: "DS-Title", cursive;
  font-size: 70px;
}
@font-face {
  font-family: "DS-Title";
  src: url("../../assets/fonts/OptimusPrinceps.ttf");
}
.tabla-personajes {
  color: white;
  width: 90%;
  margin: 0 auto;
  background-color: #222;
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
