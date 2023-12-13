
import headerComponent from "@/components/header.vue";
import filterComponent from "@/components/filter.vue";
import productComponent from "@/components/ProductComponent.vue";

export default{
  data() {
    
    return {
    
      
    }
    
  },
  methods: {
    addToCart(message) {
      alert(message);
    },
   show(title){ 
    alert(title)
  }  
  },
  components:{
    headerComponent,
    filterComponent,
    productComponent
  }
}


