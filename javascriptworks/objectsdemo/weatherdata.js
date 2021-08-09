var weather = [
    { dist_name: "tsr", temp: 25 },
    { dist_name: "tvm", temp: 26 },
    { dist_name: "ekm", temp: 29 },
    { dist_name: "pkd", temp: 30 },
    { dist_name: "idk", temp: 15 },
    { dist_name: "mpm", temp: 29 },
    { dist_name: "tsr", temp: 27 },
    { dist_name: "tvm", temp: 23 },
    { dist_name: "ekm", temp: 31 },
    { dist_name: "pkd", temp: 27 },
    { dist_name: "idk", temp: 17 },
    { dist_name: "mpm", temp: 25 }
]


// 'tsr' :27, "tvm" : 26

var weather_max={};


for (let dist of weather) {
   // console.log(dist);
    if (!(dist.dist_name in weather_max)) {
        weather_max[dist.dist_name] = dist.temp
    } else {
        if (dist.temp > weather_max[dist.dist_name]) {
            weather_max[dist.dist_name] = dist.temp;
        }
    }

}
console.log(weather_max);

// sort according to temp
//to change to nested array
Object.entries(weather_max).sort((o1,o2) => o2[1]-o1[1]).forEach(data => console.log(data))