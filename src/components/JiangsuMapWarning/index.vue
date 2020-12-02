<template>
  <vue-echarts :options="options" />
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import echarts from 'echarts'
import cloneDeep from 'lodash/cloneDeep'
import jiangsuMapData from './jiangsuMapData.json'

export default defineComponent({
  name: 'JiangsuMapWarning',
  setup () {
    const options = ref({})
    let timer = null

    const update = () => {
      // fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
      //   .then(response => response.json())
      //   .then(data => {
      const data = jiangsuMapData
      const center = []
      data.features.forEach(item => {
        if (item.properties) {
          center.push({
            name: item.properties.name,
            value: item.properties.center
          })
        }
      })
      echarts.registerMap('jiangsu', data)
      options.value = {
        geo: {
          map: 'jiangsu',
          zoom: 1,
          roam: false,
          scaleLimit: {
            min: 0,
            max: 3
          },
          itemStyle: {
            areaColor: '#013c62',
            shadowColor: '#013c62',
            shadowBlur: 20,
            shadowOffsetX: -5,
            shadowOffsetY: 15
          }
        },
        visualMap: {
          max: 100
        },
        series: [
          {
            type: 'map',
            mapType: 'jiangsu',
            label: {
              show: true,
              color: 'white'
            },
            itemStyle: {
              borderColor: '#2980b9',
              borderWidth: 1,
              areaColor: '#12235c'
            },
            emphasis: {
              label: {
                show: false,
                color: 'white'
              },
              itemStyle: {
                areaColor: '#fa8c16',
                borderWidth: 0
              }
            },
            data: center.map(centerItem => {
              const value = Math.random() * 100
              return {
                name: centerItem.name,
                value
              }
            })
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 16,
            itemStyle: {
              color: '#feae21'
            },
            label: {
              show: true,
              position: 'top',
              backgroundColor: 'rgba(254, 174, 33, .8)',
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              color: '#f7fafb',
              formatter (params) {
                return `{title|${params.data.name}}\n{content|${'发生xx事件'}}`
              },
              rich: {
                title: {
                  padding: [0, 10, 10, 10],
                  color: 'white'
                },
                content: {
                  padding: [10, 10, 0, 10],
                  color: 'white'
                }
              }
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {
                name: center[0].name,
                value: center[0].value
              }
            ]
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 16,
            itemStyle: {
              color: '#e93f42'
            },
            label: {
              show: true,
              position: 'top',
              backgroundColor: 'rgba(233, 63, 66, .9)',
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              color: 'white',
              formatter (params) {
                return `{title|${params.data.name}}\n{content|${'发生xx事件'}}`
              },
              rich: {
                title: {
                  padding: [0, 10, 10, 10],
                  color: 'white'
                },
                content: {
                  padding: [10, 10, 0, 10],
                  color: 'white'
                }
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 16,
            itemStyle: {
              color: '#08baec'
            },
            label: {
              show: true,
              position: 'top',
              backgroundColor: 'rgba(8, 186, 236, .9)',
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              color: 'white',
              formatter (params) {
                return `{title|${params.data.name}}\n{content|${'发生xx事件'}}`
              },
              rich: {
                title: {
                  padding: [0, 10, 10, 10],
                  color: 'white'
                },
                content: {
                  padding: [10, 10, 0, 10],
                  color: 'white'
                }
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        ]
      }

      // 随机展示事件信息
      timer = setInterval(() => {
        const _options = cloneDeep(options.value)
        // 初始化数据
        for (let i = 1; i < 4; i++) {
          _options.series[i].data = []
        }
        // 生成城市随机数
        const cityLength = center.length
        const cityIndex = Math.floor(Math.random() * cityLength)
        const eventIndex = Math.floor(Math.random() * 3) + 1
        _options.series[eventIndex].data = [{
          name: center[cityIndex].name,
          value: center[cityIndex].value
        }]
        options.value = _options
      }, 2000)
      // })
    }

    onMounted(() => {
      update()
    })

    onUnmounted(() => (timer && clearInterval(timer)))

    return {
      options
    }
  }
})
</script>

<style>

</style>
