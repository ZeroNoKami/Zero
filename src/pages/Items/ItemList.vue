<template>
  <div class="tabla-items">
    <table id="items" class="custom table-striped table-dark">
      <thead>
        <tr>
          <td align="center">ID</td>
          <td align="center">Nombre</td>
          <td align="center">Proveedor</td>
          <td align="center">Estado</td>
          <td align="center">Precio</td>
          <td align="center">Fecha de Creacion</td>
          <td align="center">Creador</td>
          <td align="center">
            <router-link class="btn btn-warning" to="/items/new"
              >Nuevo</router-link
            >
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td align="center">{{ item.id_item }}</td>
          <td align="center">{{ item.name_item }}</td>
          <td align="center">{{ item.supplier.name_supplier }}</td>
          <td align="center">{{ getState(item.state) }}</td>
          <td align="center">{{ item.price }}</td>
          <td align="center">
            {{ moment(item.creation_date).format("YYYY-MM-DD") }}
          </td>
          <td align="center">{{ item.creation_user.username }}</td>
          <td align="center">
            <router-link
              :ref="'det-' + item.id_item"
              class="btn btn-primary"
              :to="`/items/view/${item.id_item}`"
              >Detalles</router-link
            >
            <b-button
              variant="danger"
              :ref="'des-' + item.id_item"
              v-on:click="updateActive(item.id_item, item.state)"
              >Desactivar</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import http from "../../http-common";

export default {
  name: "items-list",
  data() {
    return {
      item: [],
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
    updateActive(id, state) {
      console.log("id: " + id + "    state: " + state);
      http
        .put("items/deactiState/" + id + "/" + state)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      location.reload();
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
.btn-danger {
  background: rgb(255, 0, 0) !important;
  border-color: black !important;
  color: black !important;
}
.btn-warning {
  background: rgb(1, 255, 14) !important;
  border-color: black !important;
  color: black !important;
}
.btn-primary {
  background: rgb(26, 1, 255) !important;
  border-color: black !important;
  color: black !important;
}
.font-title-ds {
  font-family: "DS-Title", cursive;
  font-size: 70px;
}
@font-face {
  font-family: "DS-Title";
  src: url("../../assets/fonts/OptimusPrinceps.ttf");
}
.tabla-items {
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
