
import _ from 'lodash';


export const ships = { // new slow battles
    //roilegan:      {cost: 4, speed: 0.4, hp: 45,   armor: 1, dmg: 9,  rof: 3},
    //merkulov:      {cost: 8, speed: 0.7, hp: 40,   armor: 1, dmg: 9,  rof: 8},

    satellite:     {cost: 1, speed: 0.1, hp: 12,   armor: 0, dmg: 0,  rof: 0},

    frigate:       {cost: 1, speed: 0.9, hp: 9,    armor: 0, dmg: 5,  rof: 1}, // High Speed & High DPS

    destroyer:     {cost: 2, speed: 0.8, hp: 14,   armor: 1, dmg: 4,  rof: 3}, // Speed & High DPS & Rapid Fire

    cruiser:       {cost: 4, speed: 0.6, hp: 36,   armor: 2, dmg: 5,  rof: 4}, // Armor & Speed & High DPS & Rapid Fire
    //cruiser2:      {cost: 4, speed: 0.7, hp: 34,   armor: 2, dmg: 6,  rof: 3}, // Armor & High Speed
    dreadnought:   {cost: 4, speed: 0.3, hp: 58,   armor: 3, dmg: 9,  rof: 2}, // HP & Heavy Armor & Big Gun

    battlecruiser: {cost: 8, speed: 0.7, hp: 96,   armor: 2, dmg: 8,  rof: 3}, // Armor & Speed & High DPS & Big Gun
    battleship:    {cost: 8, speed: 0.4, hp: 147,  armor: 3, dmg: 6,  rof: 4}, // HP & Heavy Armor
    carrier:       {cost: 8, speed: 0.5, hp: 144,  armor: 1, dmg: 5,  rof: 6}, // HP & High DPS & Rapid Fire

    titan:        {cost: 16, speed: 0.2, hp: 472,  armor: 1, dmg: 11, rof: 6}, // HP & Big Gun


    /*
    satellite:     {cost: 1, speed: 0.9, hp: 15,    armor: 0, dmg: 0,  rof: 0},
    transport:     {cost: 2, speed: 0.9, hp: 30,    armor: 0, dmg: 0,  rof: 0},
    miner:         {cost: 2, speed: 0.9, hp: 20,    armor: 2, dmg: 4,  rof: 2},
    freighter:     {cost: 4, speed: 0.9, hp: 60,    armor: 0, dmg: 0,  rof: 0},
    exhumer:       {cost: 4, speed: 0.9, hp: 40,    armor: 3, dmg: 5,  rof: 4},
    colonisator:   {cost: 4, speed: 0.9, hp: 30,    armor: 4, dmg: 5,  rof: 1},
    caravan:       {cost: 8, speed: 0.9, hp: 100,   armor: 4, dmg: 0,  rof: 0},
    */
};

export const allowed_ships = {
    /*
     */
    frigate: true,
    destroyer: true,
    cruiser: true,
    dreadnought: true,
    battlecruiser: true,
    battleship: true,
    carrier: true,
    titan: true,
};

let ships_count = 0;
let sum_dmg = 0;
let sum_armor = 0;
let sum_speed = 0;
_.each(ships, (ship) => {
    let count = 16 / ship.cost;
    ships_count += count;
    sum_dmg += ship.dmg * count;
    sum_armor += ship.armor * count;
    sum_speed += ship.speed * count;
});
export const avg_dmg = sum_dmg / ships_count;
export const avg_armor = sum_armor / ships_count;
export const avg_speed = sum_speed / ships_count;
//export const avg_dmg = _.sumBy(_.values(ships), 'dmg') / _.keys(ships).length;
console.log('avg_dmg:', avg_dmg);
console.log('avg_armor:', avg_armor);
console.log('avg_speed:', avg_speed);

export const getShip = (ship_name, fleet) => {
    let ship = _.cloneDeep(ships[ship_name]);
    ship.type = ship_name;
    ship.player = fleet.player;
    ship.color = fleet.color;
    ship.fireAtFrame = false;
    return ship;
};