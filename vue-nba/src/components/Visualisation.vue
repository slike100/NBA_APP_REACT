 <template>
 <div>
              <chart :chart-data="datacollection" v-bind:options="options"></chart>
              <!-- <progress id="animationProgress" max="1" value="0" style="width: 100%"></progress> -->
              </div>
    </template>

    <script>
    import Chart from "./../Chart";
    export default {
      components: {
        Chart
      },
      props:['selectedPlayer'],
      data() {
        return {
          datacollection: {
            labels: [],
            datasets: [
              {
                label: "PPG",
                backgroundColor: [
                'rgba(255, 99, 132, 0.1)',
                ],
                 borderColor:
                'rgba(255, 99, 132, 1)',
                data: [],
                 borderWidth: 1
              },
              {
                label: "APG",
                backgroundColor: "rgba(147, 255, 40, 0.1)",
                borderColor:
                'rgba(2, 200, 123, 1)',
                data: [],
                borderWidth: 1
              },
              {
                label: "RPG",
                backgroundColor: "rgba(5, 175, 255, 0.1)",
                borderColor:
                'rgba(2, 99, 132, 1)',
                data: [],
                borderWidth: 1

              },
            ]
          },
            options: { 
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            },
      }
      },
      watch: {
            selectedPlayer: function getYears(){
                var years = [];
                var points = [];
                var assists = [];
                var rebounds = [];
              for (let i = 0; i < this.selectedPlayer.stats.regularSeason.season.length; i++) {
                years.push(this.selectedPlayer.stats.regularSeason.season[i].seasonYear);
                points.push(this.selectedPlayer.stats.regularSeason.season[i].total.ppg);
                assists.push(this.selectedPlayer.stats.regularSeason.season[i].total.apg);
                rebounds.push(this.selectedPlayer.stats.regularSeason.season[i].total.rpg);
              }
              this.datacollection.labels = years.reverse();
              this.datacollection.datasets[0].data = points.reverse();
              this.datacollection.datasets[1].data = assists.reverse();
              this.datacollection.datasets[2].data = rebounds.reverse();
            }
        },
      methods: {
        
      }
    };
    </script>
    <style>
    </style>