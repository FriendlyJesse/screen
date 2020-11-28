import { ref, onMounted, onUnmounted } from 'vue'

function fillZero (v: number): number | string {
  return v < 10 ? '0' + v : v
}

function dateFilter (v: Date) {
  const m = fillZero(v.getMonth() + 1)
  const d = fillZero(v.getDate())
  return `${v.getFullYear()}-${m}-${d}`
}

function timeFilter (v: Date) {
  const h = fillZero(v.getHours())
  const m = fillZero(v.getMinutes())
  const s = fillZero(v.getSeconds())
  return `${h}:${m}:${s}`
}

export function clock () {
  const now = new Date()
  const date = ref(dateFilter(now))
  const time = ref(timeFilter(now))

  let task: number
  const start = () => {
    task = setInterval(() => {
      const now = new Date()
      date.value = dateFilter(now)
      time.value = timeFilter(now)
    }, 1000)
  }

  onMounted(start)
  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    date,
    time
  }
}
