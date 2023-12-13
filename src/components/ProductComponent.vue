<template> 
<div class="row2">
        <div class="first">
          <div class="col2">
            <img :src="img" />
          </div>
          <div class="col2">
            <p>Available offers</p>

            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
          </div>
          <div class="col2">
            <p>Price: 25,000</p>
            <button @click="addToCart('Product added to cart')" class="btn1">
              Add to cart
            </button>
          </div>
        </div>
        <div class="first">
          <div class="col2">
            <img :src="img" />
          </div>
          <div class="col2">
            <p>Available offers</p>

            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
          </div>
          <div class="col2">
            <p>Price: 25,000</p>
            <button class="btn1" @click="addToCart('Product added to cart')">
              Add to cart
            </button>
          </div>
        </div>
        <div class="first">
          <div class="col2">
            <img :src="img" />
          </div>
          <div class="col2">
            <p>Available offers</p>

            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
            <li>
              Bank Offer10% off on Samsung Axis Bank Infinite Credit CardT&C
            </li>
          </div>
          <div class="col2">
            <p>Price: 25,000</p>
            <button class="btn1" @click="addToCart('Product added to cart')">
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
  width: 80%;
  border: 1px solid grey;
  margin: 10px;
}
.costyle {
  padding: 5px;
}
.first {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid whitesmoke;
}
.btn1:hover {
  color: blue;
}
</style>
