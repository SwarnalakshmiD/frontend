import img1 from "@/assets/images/pinter7.jpg";
export default{
    data() {
    
        return {
          img:img1,
          
        }
    },
    methods: {
        addToCart(message) {
          alert(message);
        }
      },
}