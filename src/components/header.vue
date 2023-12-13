<template>
<div class="container"> 
        <div class="right" >
            <img style="width:30px;    padding-left: 20px;" :src="img">
            <p style="padding-right: 30px;">{{title}}</p>
            <input type="text"  style="padding-right: 10px;width:700px;height: 30px;" id="search" placeholder="Search..." class="form-control">
            <button @click="$emit('show-alert',title)" class="btn1"> Search</button>
          </div>
            
        <div style="display:flex; padding:5px;">
            <a style="padding:20px;" href="./product.html"> Product List</a>
            <a style="padding:20px;" href="./Login.html"> login</a>
            <a style="padding:20px;" href="./cart.html">cart</a></div>
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