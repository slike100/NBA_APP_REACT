<template>
  <div id="app">
    <h1>{{this.nameToDisplay}}</h1>
    <visualisation v-bind:selectedPlayer='this.selectedPlayer'></visualisation>
    <div class='box'>
      <div class='container-1'>
    <span class='icon'><i class="fas fa-search"></i></span>
      <input @keyup='this.displayMatches' type="text" id="search" placeholder="Player Name">
        <ul class="suggestions" v-for='player in this.searchedPlayers' :key='player.name'>
          <li>{{player.temporaryDisplayName || player}}
            <button@click='getPlayer' :data-id='player.personId' :data-name='player.temporaryDisplayName'>Get Data</button>
          </li>
        </ul>
        </div>
        </div>
  </div>
</template>

<script>
import Visualisation from './components/Visualisation.vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Visualisation
  },
  data(){
    return{
      searchedPlayers: [],
      selectedPlayer: '',
      nameToDisplay: ''
    }
  },
  methods: {
    ...mapActions(['getAllTeams', 'getAllPlayers']),
    findMatches(wordToMatch, allPlayers){
      return allPlayers.filter(person => {
        const regex = new RegExp(wordToMatch, 'gi');
        return person.temporaryDisplayName.match(regex) || person.lastName.match(regex) || person.firstName.match(regex);
      })
    },
    displayMatches(e){
      if(e.target.value == ''){
        this.searchedPlayers = [];
      } else {
        const matchArray = this.findMatches(e.target.value, this.allPlayers);
        this.searchedPlayers = matchArray;
      }
    },
    getPlayer(e){
        this.nameToDisplay = e.target.dataset.name;
        axios.post(`http://localhost:3001/nba/player/`, {id: e.target.dataset.id})
        .then(res => {
          this.selectedPlayer = res.data.league.standard
          })
        .catch(err => console.log(err));
      },
  },
  computed: {...mapGetters(['allTeams', 'allPlayers'])}, 
  created() {
    this.getAllTeams();
    this.getAllPlayers();
  }
}
</script>

<style>
  body{
    background: #343d46;
  }
  
  .box{
    margin: 100px auto;
    width: 300px;
    height: 50px;
  }

  .container-1{
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  }

  .container-1 input#search{
  width: 300px;
  height: 50px;
  background: #2b303b;
  border: none;
  font-size: 10pt;
  float: left;
  color: #262626;
  padding-left: 45px;
  border-radius: 5px;
  transition: background .55s ease;
}

.container-1 .icon{
  position: absolute;
  /* top: 50%; */
  margin-left: 17px;
  margin-top: 17px;
  z-index: 1;
  color: #4f5b66;
  transition: all .55s ease;
}
.container-1 input#search:hover, .container-1 input#search:focus, .container-1 input#search:active{
    outline:none; 
    background: #ffffff;
  }

.suggestions {
  margin: 0;
  padding: 0;
  /* position: relative; */
  /*perspective: 20px;*/
}

.suggestions li {
  background: rgba(218, 218, 218, 0.918);
  list-style: none;
  border-bottom: 1px solid rgba(150, 150, 150, 0.555);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}

</style>
