import {mapActions, mapState,mapWritableState} from 'pinia';
import {useProductStore} from "@/stores/productList.js";
export default{
    data() {
    
        return {
          
        }
    },
    methods: {
        clearCart()
        {
            this.addToCart=[];
            this.cartQuantity=0;
            this.phones.forEach((phone) => {
              phone.quantity = 0;
            });
        },     
        ...mapActions(useProductStore,["addItems"])
      },
      computed:{
        ...mapState(useProductStore,["phones"]),
        ...mapWritableState(useProductStore, ["addToCart","cartQuantity","phonesß"]),
      },

}