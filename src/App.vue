<template>
  <div>
    <headerComponent :title="'Quinbay'"  @show-alert="show"></headerComponent>
    <div class="row">
      <div class="col1">
        <filterComponent></filterComponent>
      </div>
      <productComponent></productComponent>
    </div>
    </div>
</template>

<script src="./js/app"></script>

<style lang="scss" scoped>
@import "@blibli/blue-design-tokens/dist/tokens-default.scss";

.row {
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.col1 {
  width: 20%;
  border: 1px solid grey;
  margin: 10px;
}
</style>
