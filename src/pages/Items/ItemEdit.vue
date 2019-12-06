<template>
  <div class="newItemform">
    <div v-if="this.item" class="detalles-item">
      <div class="row">
        <div class="col-md-1">
          <div class="form-group">
            <h3><label for="name_item" class="detalles-item">id</label></h3>
            <input
              disabled
              type="text"
              class="form-control"
              id="id_item"
              v-model="item.id_item"
            />
          </div>
        </div>
        <div class="col-md-auto">
          <div class="form-group">
            <h3><label for="name_item" class="detalles-item">Nombre</label></h3>
            <input
              type="text"
              class="form-control"
              id="name_item"
              required
              v-model="item.name_item"
              name="name_item"
            />
          </div>
        </div>
        <div class="col-md-auto">
          <div class="form-group">
            <h3><label for="price" class="detalles-item">Precio</label></h3>
            <input
              type="number"
              class="form-control"
              id="price"
              required
              v-model="item.price"
              name="price"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="form-group">
            <h3>
              <label for="description" class="detalles-item">Descripcion</label>
            </h3>
            <b-form-textarea
              id="description"
              v-model="item.description"
              rows="5"
              max-rows="7"
              name="description"
            >
            </b-form-textarea>
          </div>
        </div>
        <div class="col-md-4">
          <button v-on:click="saveItem" class="btn btn-edit-fn">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../../http-common";

export default {
  name: "items-edit",
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
    },
    saveItem() {
      var data = this.item;
      console.log(data);
      http
        .put("/items/edit/" + this.item.id_item, data)
        .then(response => {
          this.item.id_item = response.data.id;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
      this.returnList(this.item.id_item);
    },
    returnList(id) {
      window.location.href = "#/items/view/" + id;
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveItem();
  }
};
</script>
<style>
.btn-edit-fn {
  background: #0fb900 !important;
  border-color: black !important;
  position: absolute;
  top: 160px;
  width: 94%;
}
</style>
