import axios from 'axios';

const state = {
    players: [],
    teams: [],
}

const getters = {
    allPlayers: (state) => {
        console.log('in getters');
        return state.players
    },
    allTeams: (state) => {
        console.log('in getters');
        return state.teams
    },

}

const actions = {
    async getAllPlayers({commit}){
            const res = await axios.get('http://localhost:3001/nba/');
            let filteredPlayerData = res.data.league.standard.filter(player => player.isActive)
            console.log(filteredPlayerData);
            commit('setPlayers', filteredPlayerData);
    },
    async getAllTeams({commit}){
        const res = await axios.get('http://localhost:3001/nba/teams');
        console.log(res);
        var teams = []
        for (let i = 0; i < res.data.league.standard.length; i++) {
            if (res.data.league.standard[i].isNBAFranchise) {
                teams.push(res.data.league.standard[i]);
            }
        }
        commit('setTeams', teams);
    }
}

const mutations = {
    setPlayers: (state, players) => {
        (state.players = players);
    },
    setTeams: (state, teams) => {
        (state.teams = teams);
    }
}

export default { state, getters, actions, mutations }