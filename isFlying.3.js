let airplane = {
    isFlying: true,
    takeOff: function(){
        return this.isFlying = true;
    },
    land: function(){
        return this.isFlying = false;
    },
}
let user = {
    __proto__: airplane,
}
user.land();
console.log(user.isFlying);