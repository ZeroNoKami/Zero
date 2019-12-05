<template>
  <div class="newItemform">
    <div v-if="!submitted">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <h3><label for="name_item">Nombre</label></h3>
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
        <div class="col-md-2">
          <div class="form-group">
            <h3><label for="price">Precio</label></h3>
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
        <div class="col-md-3">
          <div class="form-group">
            <h3><label for="supplier">Proveedor</label></h3>
            <select class="form-control" v-model="item.supplier">
              <option
                v-for="supplier in this.suppliers"
                v-bind:key="supplier.id_supplier"
              >
                {{ supplier.name_supplier }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="form-group">
            <h3><label for="description">Descripcion</label></h3>
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
        <div class="col-md-2">
          <button to="/items" v-on:click="saveItem" class="btn btn-success">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.btn-success {
  background: #0fb900 !important;
  border-color: black !important;
  position: absolute;
  top: 160px;
  width: 100%;
}
.newItemform {
  max-width: 100%;
  margin: auto;
}
.drpdwm-md {
  position: absolute !important;
  left: 65px;
}
</style>
<script>
import http from "../../http-common";

export default {
  name: "items-add",
  data() {
    return {
      suppliers: [],
      item: {
        id_item: 0,
        name_item: "",
        description: "",
        price: 0,
        state: 1,
        supplier: 0,
        price_reduccion: 0,
        creation_date: new Date(),
        creation_user: 1
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveItem() {
      var data = {
        name_item: this.item.name_item,
        description: this.item.description,
        price: this.item.price,
        state: this.item.state,
        supplier: this.item.supplier,
        price_reduccion: this.item.price_reduccion,
        creation_date: this.item.creation_date,
        creation_user: this.item.creation_user
      };
      http
        .post("/items/new", data)
        .then(response => {
          this.item.id_item = response.data.id;
        })
        .catch(e => {
          console.log(e);
        });
      console.log(data);
      this.submitted = true;
    },
    suppliersList() {
      http
        .get("/supplier/list")
        .then(response => (this.suppliers = response.data));
      console.log(this.suppliers);
    },
    /* eslint-enable no-console */
    mounted() {
      this.suppliersList();
    }
  }
};
</script>
