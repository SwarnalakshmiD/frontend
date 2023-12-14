<template>
<div class="container"> 
        <div class="right" >
            <img style="width:30px;    padding-left: 20px;" :src="img">
            <p style="padding-right: 16pxpx;">{{title}}</p>
            <input ref="input" type="text"  style="padding-right: 10px;width:700px;height: 30px;" id="search" placeholder="Search..." class="form-control">
            <button @click="$emit('show-alert',title)" class="btn1" style="margin-left:10px" > Search</button>
          </div>
            
        <div style="display:flex; padding:5px; align-items :center">
            <button style="height:25px " @click="productPage()"> Product List</button>
            <button style="margin-left:10px;  height:25px"> login</button>
            <button style="margin-left:10px;height:25px" @click="cartPage()">cart</button>
            <p>{{cartQuantity}}</p>
        </div>
        </div>
</template>
<script src="./js/header.js"></script>
<style scoped>
.container
        {
            display: flex; align-items: center;
            border: 1px solid grey; 
            justify-content: space-between;
            background-color: lightblue;
            
        }
        .right
        {
            display:flex;
            align-items:center;
            padding:5px;
        }
</style>