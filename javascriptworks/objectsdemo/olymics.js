var olympics=[
    
    {country:"unitedstates",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"aus",gold:17,silver:6,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},   
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25},

]

// print countrynames partcipating 2021 olympics

//olympics.map(nation => console.log(nation.country))
// which country got most goldmedals
//var max_gold=olympics.reduce((nation1,nation2) => nation1["gold"]>nation2["gold"] ? nation1: nation2)
//console.log(max_gold);
// which contry got most medals

//var max_medals=olympics.reduce((nation1,nation2) => nation1["total"]>nation2["total"] ? nation1: nation2);
//console.log(max_medals);
// sort countries based on gold medals
// var sortbygold=olympics.sort((nation1,nation2)=>nation1["gold"]-nation2["gold"])
// console.log(sortbygold);
// sort countries based on total medals
// var sortbytotal=olympics.sort((nation1,nation2)=>nation2["total"]-nation1["total"])
// console.log(sortbytotal);

// countries got silver > 10

//olympics.filter((nation1) => nation1["silver"]>10).forEach(nation1 => console.log(nation1["country"]))


//list of countries whose goldmedal=0
// olympics.filter((nation1) => nation1["gold"]==0).forEach(nation1 => console.log(nation1["country"]))
// list the country names whose gold medal >20
//olympics.filter((nation1) => nation1["gold"]>20).forEach(nation1 => console.log(nation1["country"]))
// is pakisthan participating in 2021 olympics
console.log(olympics.some(nation1=>nation1.country=='pakistan'))