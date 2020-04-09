<template>
  <div class="logo">
    1
    <div class="plus"></div>
    <div class="text">ONEBLUS</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color:#eb0028;
.logo {
  width: 30px;
  height: 30px;
  border: 3px solid $color;
  box-sizing: border-box;
  position: relative;
  font-size: 18px;
  font-weight: 800;
  color: $color;
  transition: transform .25s ease-out;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #fff;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
  }
  .plus {
    position: absolute;
    height: 11px;
    border-left: 3px solid $color;
    right: 0;
    top: 0;
    transform: translate(3px, -6.3px);
    z-index: 5;
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 11px;
      border-left: 3px solid $color;
      transform: translate(-3px, -.3px) rotate(90deg);
    }
  }
  .text {
    position: absolute;
    left: 35px;
    top: -3px;
    font-size:22px;
  }
}
</style>