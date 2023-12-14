import {mapActions, mapState,mapWritableState} from 'pinia';
import {useProductStore} from "@/stores/productList.js";
export default{
    data() {
        return {
          checkedNames: [],
         checked: [],
        picked:''
      }

},
watch:{
  picked: {
    handler(category) {
      this.filterProductList(category); 
      //console.log("watch category: ", category);
    },
    immediate: true,
  }
},
methods: {
  
  ...mapActions(useProductStore,["addItems","filterProductList"])
},
computed:{
  ...mapState(useProductStore,["phones","category"]),
  // ...mapWritableState(useProductStore, ["picked"]),
}
};