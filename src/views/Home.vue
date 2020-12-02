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
              <div class="item1">
                <order-map />
              </div>
              <div class="item2">
                <transform-category
                  :data="['订单量', '销售额', '用户数', '退单量']"
                  :color="['rgb(178, 209, 126)', 'rgb(116, 116, 49)']"
                />
              </div>
              <div class="item3">
                <fly-box star-color="rgb(251, 253, 142)" line-color="#ddd">
                  <real-time-order :data="realTimeOrderData" />
                </fly-box>
              </div>
              <div class="item4">
                <schedule-view :data="scheduleViewMockData" />
              </div>
            </div>
            <div class="right__bottom-right">
              <div class="item1">
                <sales-list :data="salesListkData" />
              </div>
              <div class="item2">
                <sales-rank :data="salesRankData" />
              </div>
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
import SalesList from '@/components/SalesList/index.vue'
import OrderMap from '@/components/OrderMap/index.vue'
import RealTimeOrder from '@/components/RealTimeOrder/index.vue'
import ScheduleView from '@/components/ScheduleView/index.vue'
import SalesRank from '@/components/SalesRank/index.vue'

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
    TransformCategory,
    SalesList,
    OrderMap,
    RealTimeOrder,
    ScheduleView,
    SalesRank
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
    }
    .separator {
      height: 10px;
    }
    .main {
      flex: auto;
      display: flex;
      width: 100%;
      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 20px;
        box-sizing: border-box;
        width: 860px;
        height: 100%;
        &__item1 {
          height: 320px;
        }
        &__item2 {
          height: 320px;
        }
        &__item3 {
          height: 280px;
        }
        &__item4 {
          height: 230px;
        }
        &__item5 {
          height: 360px;
        }
        &__item6 {
          height: 360px;
        }
      }
      .right {
        flex: auto;
        display: flex;
        flex-direction: column;
        &__top1 {
          width: 100%;
          height: 206px;
        }
        &__top2 {
          width: 100%;
          height: 48px;
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
            }
            .item2 {
              height: 80px;
            }
            .item3 {
              height: 350px;
            }
            .item4 {
              height: 220px;
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
            }
            .item2 {
              flex: auto;
              width: 100%;
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
