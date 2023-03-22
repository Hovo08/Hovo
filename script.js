 let football = {
    forworld:{
        law:[{
        hit:false,
        time:90,
        zamen:4,
        rasizm:false,
        manager:true  
    }],
    player:[{
    white:true,
    black:true,
    goal:true,
    zamen:true
    }]
 }
}
 let priemerlegue = {
    clubs:{
        manchester_uited:{
            players:[{
                degea:"goalkeeper",
                varane:"defender",
                casemiro:"mildfender",
                rashford:"forward"
            }]
        },
        chelasa:{
            players:[{
                mendy:"goalkeeper",
                silva:"defender",
                enzo:"mildfender",
                havertz:"forward"
            }]
        }
    }
 }



 priemerlegue.__proto__ = football

 let  laliga  = {
    clubs:{
       real_madrid:{
            players:[{
                curtua:"goalkeeper",
                militao:"defender",
                modric:"mildfender",
                benzem:"forward"
            }]
        },
        barcelona:{
            players:[{
                terstegen:"goalkeeper",
                araujo:"defender",
                gavi:"mildfender",
                lewandowski:"forward"
            }]
        }
    }   
}
laliga.__proto__ = priemerlegue.forworld//spes em ere or menak jaranjge law u players_ic mnacacy cjarange
console.log(priemerlegue)
console.log(laliga)


