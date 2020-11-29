<template>
  <div class="home">
    <loading v-if="loading">
      <div class="loading__text">
        数据大屏加载中...
      </div>
    </loading>
    <auto-container
      v-else
      :options="{width: 3840, height: 2160}"
    >
      <header class="header">
        <top-header/>
      </header>
      <section class="separator">222</section>
      <main class="main">
        <aside class="left">
          <div class="left__item1">
            <total-users
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMonth"
            />
          </div>
          <div class="left__item2">
            <average-age :data="ageData" :avgAge="averageAge" />
          </div>
          <div class="left__item3">
            <total-device :data="deviceData" />
          </div>
          <div class="left__item4">
            <total-gender :data="genderData" />
          </div>
          <div class="left__item5">
            <total-rider :data="riderData" />
          </div>
          <div class="left__item6">
            <hot-category :data="hotCategoryData" />
          </div>
        </aside>
        <section class="right">
          <div class="right__top1">
            <center-header :data="headerData" />
          </div>
          <div class="right__top2">
            <transform-category
              :data="['ALL', '北京', '上海', '深圳', '南京', '武汉']"
            />
          </div>
          <div class="right__bottom">
            <div class="right__bottom-left">
              <div class="item1">111</div>
              <div class="item2">
                <transform-category
                  :data="['订单量', '销售额', '用户数', '退单量']"
                  :color="['rgb(178, 209, 126)', 'rgb(116, 116, 49)']"
                />
              </div>
              <div class="item3">333</div>
              <div class="item4">444</div>
            </div>
            <div class="right__bottom-right">
              <div class="item1">111</div>
              <div class="item2">222</div>
            </div>
          </div>
        </section>
      </main>
    </auto-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import useScreenData from '@/hooks/useScreenData'
import TopHeader from '@/components/TopHeader/index.vue'
import TotalUsers from '@/components/TotalUser/index.vue'
import AverageAge from '@/components/AverageAge/index.vue'
import TotalDevice from '@/components/TotalDevice/index.vue'
import TotalGender from '@/components/TotalGender/index.vue'
import TotalRider from '@/components/TotalRider/index.vue'
import HotCategory from '@/components/HotCategory/index.vue'
import CenterHeader from '@/components/CenterHeader/index.vue'
import TransformCategory from '@/components/TransformCategory/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TopHeader,
    TotalUsers,
    AverageAge,
    TotalDevice,
    TotalGender,
    TotalRider,
    HotCategory,
    CenterHeader,
    TransformCategory
  },
  setup () {
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1000)
    })

    return {
      loading,
      ...useScreenData()
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  #auto-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    & > .header, & > .separator, & > .main {
      width: 100%;
    }
    .header {
      height: 167px;
      background: yellow;
    }
    .separator {
      height: 10px;
      background: black;
    }
    .main {
      flex: auto;
      display: flex;
      width: 100%;
      background: rebeccapurple;
      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 20px;
        box-sizing: border-box;
        width: 860px;
        height: 100%;
        background: red;
        &__item1 {
          height: 320px;
          background: green;
        }
        &__item2 {
          height: 320px;
          background: yellow;
        }
        &__item3 {
          height: 280px;
          background: blue;
        }
        &__item4 {
          height: 230px;
          background: purple;
        }
        &__item5 {
          height: 360px;
          background: pink;
        }
        &__item6 {
          height: 360px;
          background: rgba(0, 255, 0, 0.459);
        }
      }
      .right {
        flex: auto;
        display: flex;
        flex-direction: column;
        background:  blue;
        &__top1 {
          width: 100%;
          height: 206px;
          background: darkblue;
        }
        &__top2 {
          width: 100%;
          height: 48px;
          background: cadetblue;
        }
        &__bottom {
          flex: auto;
          display: flex;
          padding-bottom: 20px;
          &-left {
            display: flex;
            flex: 0 0 1917px;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;
            .item1 {
              height: 999px;
              background: red;
            }
            .item2 {
              height: 80px;
              background: yellowgreen;
            }
            .item3 {
              height: 350px;
              background: deepskyblue;
            }
            .item4 {
              height: 220px;
              background: orangered;
            }
          }
          &-right {
            flex: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            .item1 {
              width: 100%;
              height: 999px;
              background: burlywood;
            }
            .item2 {
              flex: auto;
              width: 100%;
              background: darkred;
            }
          }
        }
      }
    }
  }
  .loading {
    &__text {
      margin-top: 10px;
      font-size: 24px;
    }
  }

}
</style>
