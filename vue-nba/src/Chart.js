import {
    Line,
    mixins
} from 'vue-chartjs'

export default {
    extends: Line,
    // mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    watch: {
        chartData: {
        handler: function () {
            console.log('Am I here');
            this.renderChart(this.chartData, this.options);
        },
        deep: true
        }
    }
}