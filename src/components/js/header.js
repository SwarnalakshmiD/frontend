import img1 from "@/assets/images/pinter7.jpg";
export default{
    data(){
        return{
            img:img1

        }
    },
    props:['title'],
    emits:['show-alert']
}