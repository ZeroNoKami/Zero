import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Icons from "@/pages/Icons.vue";
import ItemList from "@/pages/Items/ItemList.vue";
import ItemDetail from "@/pages/Items/ItemDetail.vue";
import AddItem from "@/pages/Items/AddItem.vue";
import SupplierList from "@/pages/Suppliers/SupplierList.vue";
import Home from "@/pages/home.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Inicio",
        component: Home
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "/items",
        name: "Productos",
        component: ItemList
      },
      {
        path: "/items/new",
        name: "Nuevo Producto",
        component: AddItem,
        props: true
      },
      {
        path: "/items/view/:id",
        name: "Detalle de producto",
        component: ItemDetail,
        props: true
      },
      {
        path: "/suppliers",
        name: "Proveedores",
        component: SupplierList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
