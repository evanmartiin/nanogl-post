module.exports = function( obj ){
var __t,__p='';
__p+='\nc += c * (uGrainScaleBias.x * texture2D(tGrain,vTexCoord0*uGrainCoord.xy+uGrainCoord.zw).x+uGrainScaleBias.y);';
return __p;
}