import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Icons from "@/pages/Icons.vue";
import ItemList from "@/pages/Items/ItemList.vue";
import ItemDetail from "@/pages/Items/ItemDetail.vue";
import SupplierList from "@/pages/Suppliers/SupplierList.vue";
import SupplierDetail from "@/pages/Suppliers/SupplierDetail.vue";
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
        path: "items",
        name: "items",
        component: ItemList,
        children: [
          {
            path: "/items/view/:id",
            name: "items-details",
            component: ItemDetail,
            props: true
          }
        ]
      },
      {
        path: "suppliers",
        name: "suppliers",
        component: SupplierList,
        children: [
          {
            path: "/supplier/view/:id",
            name: "supplier-details",
            component: SupplierDetail,
            props: true
          }
        ]
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
