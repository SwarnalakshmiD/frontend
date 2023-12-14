import img1 from "@/assets/images/pinter7.jpg";
import {mapActions, mapState,mapWritableState} from 'pinia';
import {useProductStore} from "@/stores/productList.js";
export default{
    data(){
        return{
            img:img1
        }
    },
    methods: {
        cartPage() {
          this.$router.push("/cart");
        },
        productPage() {
            this.$router.push("/");
          }
      },
      computed:{
        ...mapState(useProductStore,["cartQuantity"])
      },
      mounted()
      {
        console.log(this.$refs.input);
      },
    props:['title'],
    emits:['show-alert']
}