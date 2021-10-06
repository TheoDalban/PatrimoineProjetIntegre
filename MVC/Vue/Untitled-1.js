
    import LineChart from './Chart.vue'
    
    export default {
      name: 'LineChartContainer',
      components: { LineChart },
      data: () => ({
        loaded: false,
        chartdata: null
      }),
      async mounted () {
        this.loaded = false
        try {
          const { userlist } = await fetch('/api/userlist')
          this.chartdata = userlist
          this.loaded = true
        } catch (e) {
          console.error(e)
        }
      }
    }
