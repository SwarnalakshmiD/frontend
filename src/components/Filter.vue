<template>
  <div>
    <h3 style="padding-left: 16px">{{ section }}</h3>
    <div class="col1style" v-if="checkedNames.length > 0">
      <p>{{ checkedNames }}</p>
    </div>
    <div class="col1style">
      <h4>CATEGORIES</h4>
      <li v-for="(item, index) in category" :key="index">{{ item.name }}</li>
    </div>
    <div class="col1style">
      <h4>BRAND</h4>
      <input
        type="checkbox"
        id="phone1"
        name="phone1"
        value="SAMSUNG"
        v-model="checkedNames"
      />
      <label class="costyle"> SAMSUNG</label><br />
      <input
        type="checkbox"
        id="phone2"
        name="phone2"
        value="OPPO"
        v-model="checkedNames"
      />
      <label class="costyle"> OPPO</label><br />
      <input
        type="checkbox"
        id="phone3"
        name="phone3"
        value="POCO"
        v-model="checkedNames"
      />
      <label class="costyle"> POCO</label><br />
    </div>
    <div class="col1style">
      <h4>CUSTOMER RATINGS</h4>
      <input
        type="checkbox"
        id="star4"
        name="star4"
        value="4 & above"
        v-model="checked"
      />
      <label> 4 and above</label><br />
      <input
        type="checkbox"
        id="star3"
        name="star3"
        value="3 & above"
        v-model="checked"
      />
      <label> 3 and above</label><br />
      <input
        type="checkbox"
        id="star2"
        name="star2"
        value="2 & above"
        v-model="checked"
      />
      <label> 2 and above</label><br />
    </div>
    <div class="col1style">
      <H4>OFFERS</H4>
      <input
        type="checkbox"
        id="offer1"
        name="star4"
        value="Buy more,Save more"
      />
      <label> Buy more,Save more</label><br />
      <input type="checkbox" id="offer2" name="star3" value="No Cost EMI" />
      <label> No Cost EMI</label><br />
      <input type="checkbox" id="offer3" name="star2" value="Special Price" />
      <label>Special Price</label><br />
    </div>
    <div class="col1style">
      <H4>DISCOUNT</H4>
      <input type="checkbox" id="star4" name="star4" value="4 & above" />
      <label> 30% offer</label><br />
      <input type="checkbox" id="star3" name="star3" value="3 & above" />
      <label> 40% offer</label><br />
      <input type="checkbox" id="star2" name="star2" value="2 & above" />
      <label> 50% offer</label><br />
    </div>
  </div>
</template>
<script src="./js/filter.js"></script>
<style scoped>
.col1style {
  display: block;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid whitesmoke;
}
</style>
