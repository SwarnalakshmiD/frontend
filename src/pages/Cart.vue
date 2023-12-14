<template>
 <div class="row2">
    <div>
    <button style="margin:10px;" @click="clearCart()">Clear cart</button>
    </div>
     <div class="division">
        <div class="first" v-for="phone in addToCart" :key="phone.id">
          <img style="height: 50px; width: 50px;" :src="phone.img" />
           <p>{{ phone.productName }}</p>
              <p>{{phone.price}}</p>
              <p>{{phone.quantity}}</p>

        </div>
        </div>
 </div>
</template>
<script src="./js/cart.js"></script>
<style>
.first {
  padding: 5px;
}
.division{
  display: flex;
  padding: 30px;
  border-bottom: 1px solid whitesmoke;
}
.row2 {
  display: flex;

  width: 80%;
  border: 1px solid grey;
  margin: 10px;
}
p{
    margin:10px;
}

</style>