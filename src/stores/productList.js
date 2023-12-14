import { defineStore } from "pinia";
import redmi1 from "@/assets/images/pinter7.jpg";
import appleiphone from "@/assets/images/pinter6.jpg";
import sg from "@/assets/images/pinter8.jpg";
import gp from "@/assets/images/pinter9.jpg";
import oppo from "@/assets/images/pinter14.jpg";
import lemon from "@/assets/images/product-2.png";
import wm from "@/assets/images/product-3.png";
import pg from "@/assets/images/product-5.png";
import onion from "@/assets/images/product-6.jpg";
import sb from "@/assets/images/product-4.png";
import mortar from "@/assets/images/product-5.jpg";
import jug from "@/assets/images/product-4.jpg";
import chair from "@/assets/images/product-6.jpg";
import wp from "@/assets/images/product-11.jpg";
import cactus from "@/assets/images/product-3.jpg";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    phones: [
      {
        id: 1,
        productName: "APPLE iPhone",
        img: appleiphone,
        price: 80000,
        quantity: 0,
        categoryName:'Phone'
      },
      {
        id: 2,
        productName: "Watermelon",
        img: wm,
        price: 50,
        quantity: 0,
        categoryName:'Groceries'
      },
      {
        id: 3,
        productName: "Samsung Galaxy",
        img: sg,
        price: 34000,
        quantity: 0,
        categoryName:'Phone'
      },
      {
        id: 4,
        productName: "Chair",
        img: chair,
        price: 2400,
        quantity: 0,
        categoryName:'Home appliances'
      },
      {
        id: 5,
        productName: "Google Pixel",
        img: gp,
        price: 50000,
        quantity: 0,
        categoryName:'Phone'
      },
      {
        id: 6,
        productName: "Onion",
        img: onion,
        price: 120,
        quantity: 0,
        categoryName:'Groceries'
      },
      {
        id: 7,
        productName: "cactus",
        img: cactus,
        price: 750,
        quantity: 0,
        categoryName:'Home appliances'
      },
      {
        id: 8,
        productName: "lemon",
        img: lemon,
        price: 7,
        quantity: 0,
        categoryName:'Groceries'
      },
      {
        id: 9,
        productName: "strawberries",
        img: sb,
        price: 34000,
        quantity: 0,
        categoryName:'Groceries'
      },
      {
        id: 10,
        productName: "wooden plate",
        img: wp,
        price: 654,
        quantity: 0,
        categoryName:'Home appliances'
      },
      {
        id: 11,
        productName: "Oppo",
        img: oppo,
        price: 24000,
        quantity: 0,
        categoryName:'Phone'
      },
      {
        id: 12,
        productName: "pomegranate",
        img: pg,
        price: 240,
        quantity: 0,
        categoryName:'Groceries'
      },
      {
        id: 13,
        productName: "Jug",
        img: jug,
        price: 786,
        quantity: 0,
        categoryName:'Home appliances'
      },
      {
        id: 14,
        productName: "mortar",
        img: mortar,
        price: 897,
        quantity: 0,
        categoryName:'Home appliances'
      },
      {
        id: 15,
        productName: "Redmi",
        img:redmi1,
        price: 16000,
        quantity: 0,
        categoryName:'Phone'
      }
    ],
    addToCart: [],
    cartQuantity: 0,
    category: [{ name: 'Phone' }, { name: 'Groceries' }, { name: 'Home appliances' }],
    filteredList:[],
    filteredList1:[],
      
  }),
  actions: {
    addItems(phone) {
      this.addToCart.push(phone);
      this.cartQuantity++;
    },
    copyState(){
      this.filteredList=this.phones;
    },
    filterProductList(picked)
    {
      console.log("picked store:",picked);
      this.filteredList=this.phones.filter((phone)=>phone.categoryName===picked);
      console.log(this.filteredList);
    }
  }
});
