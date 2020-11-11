<template>
  <div class="header">
    <div class="left-area">
      <NuxtLink :to="`/`">
        <img
          src="https://assets.website-files.com/5dcaf276c897155ba01769f4/5ed166315b6f49570099bc84_skore_brand_teal.svg"
        />
      </NuxtLink>
    </div>
    <div class="right-area">
      <div class="user-area">
        <div v-if="showFilter" class="filter">
          <select @change="handleFilterSelect">
            <option value="all" selected>ALL</option>
            <option
              v-for="filter in $store.getters.filters"
              :key="filter"
              :value="filter"
            >
              {{ filter }}
            </option>
          </select>
        </div>
        <div class="profile">
          <svg
            width="24"
            height="24"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d=" M 598 132C 685 178 725 294 684 384C 648 473 543 525 450 499C 355 477 287 378 302 281C 312 184 402 104 500 106C 534 106 569 115 598 132C 598 132 598 132 598 132M 449 138C 365 162 309 256 329 341C 344 428 435 493 522 479C 612 470 683 383 675 293C 670 204 589 129 500 131C 483 131 466 133 449 138C 449 138 449 138 449 138M 443 555C 505 575 567 553 627 538C 693 535 764 560 802 617C 842 674 838 746 837 812C 844 860 808 908 759 912C 594 913 428 912 263 912C 215 919 167 883 163 834C 163 770 155 702 185 643C 218 571 299 535 375 538C 398 542 421 549 443 555C 443 555 443 555 443 555M 221 631C 182 684 188 751 188 812C 183 847 207 885 244 887C 408 888 573 887 737 887C 772 892 810 868 812 831C 812 782 817 732 804 684C 790 622 736 574 673 566C 627 554 584 579 539 585C 483 596 428 577 374 563C 316 562 254 582 221 631C 221 631 221 631 221 631"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilter: false,
    };
  },
  watch: {
    $route(to) {
      if (to.name !== 'index') {
        this.showFilter = false;
        return;
      }

      this.showFilter = true;
    },
  },
  methods: {
    handleFilterSelect(e) {
      this.$store.commit('setFilter', e.target.value);
    },
  },
  mounted () {
    if(this.$route.name === 'index') this.showFilter = true
  }
};
</script>

<style lang="css" scoped>
.header {
  height: 50px;
  background: #fff;
}

.header .left-area {
  float: left;
  display: block;
  width: 50%;
  height: 100%;
}
.header .left-area img {
  width: 50px;
  margin: 10px;
}

.header .right-area {
  float: right;
  display: block;
  width: 50%;
  height: 100%;
}

.header .right-area .user-area {
  float: right;
}

.header .right-area .filter {
  float: left;
  margin: 10px;
}

.header .right-area select {
  padding: 4px;
  border: 1px solid #bfbaba;
  border-radius: 3px;
}

.header .right-area .profile {
  float: right;
  margin: 10px 14px 10px 10px;
}
</style>
