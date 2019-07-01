<template>
  <div>
   <md-table v-model="allPlayers" @md-selected="onSelect" md-card md-fixed-header>
      <md-table-toolbar>
        <h1 class="md-title">Players</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{item}" :class="getClass(item)" md-selectable="single">
      <!-- <md-table-row v-for='player in allPlayers' :key='player.firstName'> -->
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.temporaryDisplayName }}</md-table-cell>
        <md-table-cell md-label="Position" md-sort-by="position">{{ item.pos }}</md-table-cell>
        <md-table-cell md-label="Years Pro" md-sort-by="yearsPro">{{ isRookie(item) }}</md-table-cell>
        <md-table-cell md-label="Team" md-sort-by="team">{{ matchTeamsToPlayers(item) }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';


export default {
  name: "HelloWorld",
  data() {
    return {
      playersToDisplay: [],
      selected: {},
    }
  },
  methods: {
    ...mapActions(['getAllPlayers']),
    matchTeamsToPlayers(player){
        for (let i = 0; i < this.allTeams.length; i++) {
          if(this.allTeams[i].teamId === player.teamId){
            return this.allTeams[i].fullName;
          }
      }
    },
    getClass: (item) => ({
        'md-primary': item.pos == 'G',
      }),
    async onSelect (item) {
        await axios.post(`http://localhost:3001/nba/player/`, {id: item.personId})
        .then(res => {
          this.selected = res.data.league.standard
          })
        .catch(err => console.log(err));
      },
    isRookie(player){
        if(player.yearsPro == 0){
          return "Rookie";
        } else {
          return player.yearsPro
        }
      },
  },
  computed: {
    ...mapGetters(['allPlayers', 'allTeams']),
  },
  async created() {
    await this.getAllPlayers();
    this.matchTeamsToPlayers(this.allPlayers);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .md-table {
    margin-top: 16px
  }

</style>
