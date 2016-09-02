
uniform sampler2D tInput;
varying vec2 vTexCoord0;
varying vec2 vTexCoord1;


vec3 sRGB( vec3 c )
{
  return c * ( c * ( c*0.305306011 + vec3(0.682171111) ) + vec3(0.012522878) );
}

float luminance( vec3 c )
{
  return dot( c, vec3(0.3,0.59,0.11) );
}



{{@precode}}


void main(void){
  vec3 c;

  {{@code}}

  gl_FragColor.xyz=c;
  gl_FragColor.w=1.0;

}