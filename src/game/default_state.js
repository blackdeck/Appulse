
import _ from 'lodash';

// getFleets, getBattle, getRandomFleet, getRendomBattle,
// import {generateSingleEnemyFleet, generateNextWave, sortFleet} from '../game/fleets';


export var default_points = 32;
// export const setDefaultPoints = (points) => { default_points = points; };


const default_state = {

    tab: 'start',

    point: 10000,
    energy: 0,

    C: 0,
    Si: 0,
    Fe: 0,
    Al: 0,

    CO2: 0,
    SiO2: 0,
    FeO2: 0,
    Al2O3: 0,

    O2: 0,
    H2: 0,
    H2O: 0,
    CH4: 0,

    micro: 0,
    nano: 0,
    block: 0,
    organic: 0,

    comp: 0,
    robot: 0,
    module: 0,
    bionic: 0,


    epoch_1: false,
    epoch_2: false,
    epoch_3: false,
    epoch_4: false,
    epoch_5: false,

    tech: [],
    buildings: [],







    matrix_show: '',

    player_name: "ThePlayer",
    player_color: "#111111",

    player_fleet: [],
    in_battle_fleets: {},
    in_space_fleets: {},

    messages: [],

    game_speed: 60000,
    frame_rate: 60,
    game_speed_multiplier: 1,
    frame: 0,
    tick: 0,
    game_paused: true,
    game_end: false,
    game_end_score: 0
};

export const getDefaultState = () => {
    let state = _.cloneDeep(default_state);
    //state.points = default_points; //getRendomBattle(); //getBattle();
    //state.in_battle_fleets = generateSingleEnemyFleet(); //getRendomBattle(); //getBattle();
    state.in_battle_fleets[state.player_name] = {player: state.player_name, color:  state.player_color, ships: []};

    //let fleet = generateNextWave(1);
    //fleet.Enemy.flight_timer = 2;
    //state.in_space_fleets = fleet;//generateSingleEnemyFleet(); //getRendomBattle(); //getBattle();
    return state;
};