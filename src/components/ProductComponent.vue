<template>
  <div class="row2">
    <div class="division" >
          
        <div class="first" v-for="phone in filteredList.slice(0, 5)" :key="phone.id">
          <img style="height=70px;width:70px" :src="phone.img" />
           <p>{{ phone.productName }}</p>
              <p>{{phone.price}}</p>
            <div class="container"> <button style="margin-left:10px;" @click="increment(phone)">+</button>  <p>{{phone.quantity}}</p>
            <button  style="margin-right:10px;" @click="decrement(phone)">-</button>
            </div><br>
              <button @click="addToCartItems(phone)" class="btn1">
                    Add to cart
            </button>
        </div>
    </div>
    <div class="division">
        <div class="first" v-for="phone in filteredList.slice(5, 10)" :key="phone.id">
          <img style="height=70px;width:70px" :src="phone.img" />
        <p >{{ phone.productName }}</p>
              <p>{{phone.price}}</p>
              <div class="container"> <button style="margin-left:10px;" @click="increment(phone)">+</button>  <p>{{phone.quantity}}</p>
            <button style="margin-right:10px;" @click="decrement(phone)">-</button>
            </div><br>
              <button @click="addToCartItems(phone)" class="btn1">
              Add to cart
            </button>
        </div>
    </div>
    <div class="division">
        <div class="first" v-for="phone in filteredList.slice(10, 15)" :key="phone.id">
          <img style="height=:0px;width:50px" :src="phone.img" />
          <p >{{ phone.productName }}</p>
              <p>{{phone.price}}</p>
              <div class="container"> <button style="margin-left:10px;" @click="increment(phone)">+</button>  <p>{{phone.quantity}}</p>
            <button style="margin-right:10px;" @click="decrement(phone)">-</button>
            </div><br>
              <button @click="addToCartItems(phone)" class="btn1">
              Add to cart
            </button>
        </div>
    </div>
  </div>
</template>


<script src="./js/product-component.js"></script>
<style scoped>
.col1 {
  width: 20%;
  border: 1px solid grey;
  margin: 10px;
}
.row2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  border: 1px solid grey;
  margin: 10px;
}
.first {
  padding: 5px;
  text-align: center;
  border: 1px solid lightgray;
   display: flex;
  flex-direction: column;
  align-items: center;
}
.division{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid whitesmoke;
}
.btn1:hover {
  color: blue;
}
p{
    margin:8px;
}
.container {
  display: flex;
  align-items:center;
  height:20px;
  margin-bottom: 5px;
}

</style>
