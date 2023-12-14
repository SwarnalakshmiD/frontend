import {mapActions, mapState,mapWritableState} from 'pinia';
import {useProductStore} from "@/stores/productList.js";
export default{
    data() {
    
        return {
          quantity:'phones[0].quantity'
        }
    },
    mounted(){
        this.copyState();
    },

    methods: {
        addToCart(message) {
          alert(message);
        },
        increment(phone)
        {
      
            phone.quantity++;
        },
        decrement(phone)
        {
            phone.quantity--;
        },
        addToCartItems(phone)
        {
          this.addItems(phone)
        },
        ...mapActions(useProductStore,["addItems","copyState"])
      },
      computed:{
        ...mapState(useProductStore,["phones","addToCart","cartQuantity","filteredList","deepCopy"])
        
      },
    
     
}