# Memory-card-game

when we do not have {} after we define a function i.e-

const getData = () {

}

but if we have const getData = () [

]

this means that we are getting an array (of objects) from that
function (guess I can call it a funciton still ;)

// randomizing an array

.sort(function(a, b){
returns 1 if a >b,
-1 if a < b
and 0 if they are equal
})

so to randomize we do

.sort(() => math.random() - 0.5);
so value of sort will be positive half
the time and half the time negative,
hence our array of objects are radomized.
