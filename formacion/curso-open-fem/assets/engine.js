// VIDEOMN ENGINE v2 — Motor compartido
const PALETTES={"Ingeniería Viva":{bg:"#3a3d45",gold:"#f5c842",red:"#ff5555",blue:"#5db8fe",mint:"#3ce0b4",white:"#f8f9fa",gray:"#9a9fa8"},"Solar":{bg:"#3d3832",gold:"#ffb830",red:"#ff5252",blue:"#ffa040",mint:"#ffd080",white:"#fffaf0",gray:"#a09888"},"Océano":{bg:"#323d44",gold:"#5df5d5",red:"#ff6070",blue:"#4da6ff",mint:"#5df5c0",white:"#e8f8ff",gray:"#8098a8"},"Bosque":{bg:"#353d35",gold:"#d4b85a",red:"#d06858",blue:"#68b07a",mint:"#78d488",white:"#f0f8e8",gray:"#889878"},"Monocromo":{bg:"#404040",gold:"#ffffff",red:"#c8c8c8",blue:"#a0a0a0",mint:"#b8b8b8",white:"#fafafa",gray:"#707070"}};
let pN=Object.keys(PALETTES),pi=0,P=PALETTES[pN[0]],palP=false;
function hx(s){return[parseInt(s.slice(1,3),16),parseInt(s.slice(3,5),16),parseInt(s.slice(5,7),16),255]}
function cb(k){return hx(P[k])}
let scenes=[],cur=0,beat=0,st=0,ta=0,fs=0,fd=1;
let FP=[],gl,bl,ffc,ffr,ffs=30,ff=[];
let SNAMES=[],SBEATS=[];
// flow field
function iFF(){ffc=floor(width/ffs)+1;ffr=floor(height/ffs)+1;ff=new Array(ffc*ffr)}
function uFF(t){let yo=0;for(let y=0;y<ffr;y++){let xo=0;for(let x=0;x<ffc;x++){let a=noise(xo+sin(t*0.02)*0.5,yo+cos(t*0.02)*0.5,t*0.08)*TWO_PI*4;ff[y*ffc+x]={ax:cos(a)*0.8,ay:sin(a)*0.8};xo+=0.08}yo+=0.08}}
function fFF(px,py){let cx=constrain(floor(px/ffs),0,ffc-1),cy=constrain(floor(py/ffs),0,ffr-1),v=ff[cy*ffc+cx];return v||{ax:0,ay:-0.3}}
function glow(fn){gl.clear();fn(gl);image(gl,0,0)}
function sFP(n){FP=[];for(let i=0;i<n;i++){let a=random(TWO_PI),r=random(150,900);FP.push({x:width/2+cos(a)*r,y:height/2+sin(a)*r,vx:0,vy:0,sz:random(1,5),al:random(60,200),lf:random(300,800),age:0,trail:[],cl:random()<0.6?'blue':(random()<0.7?'gold':'mint')})}}
function uFP(){for(let p of FP){let fv=fFF(p.x,p.y);p.vx=lerp(p.vx,fv.ax,0.03);p.vy=lerp(p.vy,fv.ay,0.03);p.x+=p.vx;p.y+=p.vy;p.x+=noise(p.y*0.003,st*0.3)*0.6-0.3;p.trail.push({x:p.x,y:p.y});if(p.trail.length>14)p.trail.shift();p.age++;if(p.age>p.lf||p.x<-60||p.x>width+60||p.y<-60||p.y>height+60){p.x=random(width);p.y=random(height-100,height+60);p.age=0;p.trail=[]}}}
function dFT(g){for(let p of FP){if(p.trail.length<2)continue;let c=cb(p.cl);for(let i=1;i<p.trail.length;i++){let fr=i/p.trail.length,al=p.al*fr*0.5;g.stroke(c[0],c[1],c[2],al);g.strokeWeight(p.sz*fr);g.noFill();g.line(p.trail[i-1].x,p.trail[i-1].y,p.trail[i].x,p.trail[i].y)}g.noStroke();g.fill(c[0],c[1],c[2],p.al);g.circle(p.x,p.y,p.sz)}}
function dB(g,x,y,r,c,ly=4){for(let i=ly;i>0;i--){let a=map(i,ly,1,3,30);g.fill(c[0],c[1],c[2],a);g.noStroke();g.circle(x,y,r*(1+i*0.7))}g.fill(c[0],c[1],c[2],230);g.noStroke();g.circle(x,y,r*0.85)}
function dN(t){bl.clear();bl.loadPixels();for(let y=0;y<height;y+=4){for(let x=0;x<width;x+=4){let n=noise(x*0.003,y*0.003,t*0.015),idx=(y*width+x)*4;if(n>0.52){let a=map(n,0.52,0.65,0,12),r=parseInt(P.bg.slice(1,3),16),g=parseInt(P.bg.slice(3,5),16),b=parseInt(P.bg.slice(5,7),16);if(n>0.58){let m=map(n,0.58,0.70,0,1);r=lerp(r,parseInt(P.blue.slice(1,3),16),m);g=lerp(g,parseInt(P.blue.slice(3,5),16),m);b=lerp(b,parseInt(P.blue.slice(5,7),16),m)}bl.pixels[idx]=r;bl.pixels[idx+1]=g;bl.pixels[idx+2]=b;bl.pixels[idx+3]=constrain(a,0,18)}}}bl.updatePixels();image(bl,0,0)}
function txa(a,t){return constrain(map(t,a[0],a[1],0,255),0,255)}
function pul(t,sp,lo=0.92,hi=1.08){return lo+(sin(t*sp)*0.5+0.5)*(hi-lo)}
function tx(g,s,x,y,sz,k,al=CENTER){g.textAlign(al,CENTER);g.textSize(sz);let c=cb(k);g.fill(c[0],c[1],c[2]);g.noStroke();g.textFont('Segoe UI');g.text(s,x,y)}
function txM(g,s,x,y,sz,k,al=CENTER){g.textAlign(al,CENTER);g.textSize(sz);let c=cb(k);g.fill(c[0],c[1],c[2]);g.noStroke();g.textFont('Consolas');g.text(s,x,y)}
function txB(g,s,x,y,sz,k,al=CENTER){g.textAlign(al,CENTER);g.textSize(sz);let c=cb(k),sh=cb('bg');g.fill(sh[0],sh[1],sh[2],160);g.textFont('Segoe UI');for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++)if(dx||dy)g.text(s,x+dx*3,y+dy*3);g.fill(c[0],c[1],c[2]);g.text(s,x,y)}
function setLineDash(list){drawingContext.setLineDash(list)}
function navBar(){
  let t=st,barY=height-6,barH=4,barW=width-40,fraction=(cur+beat/SBEATS[cur])/scenes.length;
  fill(cb('gray')[0],cb('gray')[1],cb('gray')[2],15);noStroke();rect(20,barY,barW,barH,2);
  let pc=cb('gold');fill(pc[0],pc[1],pc[2],140);rect(20,barY,barW*fraction,barH,2);
  fill(pc[0],pc[1],pc[2],180+sin(t*2)*40);circle(20+barW*fraction,barY+barH/2,9);
  let dotY=height-20;
  for(let i=0;i<scenes.length;i++){let dx=map(i,0,scenes.length-1,width*0.42,width*0.58),isC=(i===cur),isP=(i<cur);fill(isC?pc[0]:(isP?255:100),isC?pc[1]:(isP?255:100),isC?pc[2]:(isP?255:100),isC?200+sin(t*3)*40:(isP?120:40));noStroke();circle(dx,dotY,isC?6:5)}
  textAlign(CENTER,CENTER);textFont('Segoe UI');textSize(14);fill(cb('white')[0],cb('white')[1],cb('white')[2],100);
  text(SNAMES[cur]+' · '+(beat+1)+'/'+SBEATS[cur],width/2,dotY-20);
  textAlign(RIGHT,BOTTOM);textFont('Consolas');textSize(11);fill(cb('gray')[0],cb('gray')[1],cb('gray')[2],60);
  text('← → navegar  |  ESPACIO revelar  |  1-5 paletas  |  R reiniciar  |  F fullscreen',width-16,height-20)
}
function palOverlay(){
  if(!palP)return;
  fill(0,0,0,180);noStroke();rect(0,0,width,height);
  textAlign(CENTER,CENTER);textFont('Segoe UI');textSize(24);fill(255);text('PALETAS — Presiona 1 a 5',width/2,height*0.3-40);
  for(let i=0;i<pN.length;i++){let nm=pN[i],pal=PALETTES[nm],px=map(i,0,4,width*0.12,width*0.88),act=(i===pi);fill(act?255:100,act?255:100,act?255:100,act?40:20);noStroke();rect(px-110,height*0.3,220,160,12);let sm=['gold','blue','mint','red','white','gray'],sy=height*0.3+30;for(let s=0;s<sm.length;s++){let sc=hx(pal[sm[s]]);fill(sc[0],sc[1],sc[2]);circle(px-90+s*33,sy,20)}textSize(16);fill(act?255:180);text(nm,px,sy+50);if(act){textSize(26);fill(hx(pal.gold)[0],hx(pal.gold)[1],hx(pal.gold)[2]);text('V',px,height*0.3-20)}}
  textSize(14);fill(150);text('Presiona P para cerrar',width/2,height*0.82)
}
function setup(){createCanvas(windowWidth,windowHeight);pixelDensity(1);colorMode(RGB,255,255,255,255);gl=createGraphics(width,height);bl=createGraphics(width,height);iFF();sFP(160);initSessions()}
function draw(){
  if(fs===1){ta+=11;if(ta>=255){ta=255;cur+=fd;beat=0;st=0;fs=2}}
  if(fs===2){ta-=11;if(ta<=0){ta=0;fs=0}}
  background(parseInt(P.bg.slice(1,3),16),parseInt(P.bg.slice(3,5),16),parseInt(P.bg.slice(5,7),16));
  dN(st);st+=deltaTime/1000;
  push();scenes[cur]();pop();
  if(ta>0&&fs>0){let bc=parseInt(P.bg.slice(1,3),16),bg=parseInt(P.bg.slice(3,5),16),bb=parseInt(P.bg.slice(5,7),16);fill(bc,bg,bb,ta);noStroke();rect(0,0,width,height)}
  navBar();palOverlay()
}
function next(){if(fs!==0||cur>=scenes.length-1)return;fd=1;fs=1;ta=0}
function prev(){if(fs!==0||cur<=0)return;fd=-1;fs=1;ta=0}
function nxtB(){if(beat<SBEATS[cur]-1){beat++;st=0}}
function apPal(i){pi=i;P=PALETTES[pN[i]]}
function keyPressed(){
  if(palP){if(key>='1'&&key<='5'){apPal(parseInt(key)-1);palP=false}else if(key==='p'||key==='P')palP=false;return false}
  if(keyCode===RIGHT_ARROW||keyCode===DOWN_ARROW)next();
  else if(keyCode===LEFT_ARROW||keyCode===UP_ARROW)prev();
  else if(key===' ')nxtB();
  else if(key==='r'||key==='R'){cur=0;beat=0;st=0;fs=0;ta=0;sFP(160)}
  else if(key==='f'||key==='F')fullscreen(!fullscreen());
  else if(key>='1'&&key<='5')apPal(parseInt(key)-1);
  else if(key==='p'||key==='P')palP=true;
  return false
}
function windowResized(){resizeCanvas(windowWidth,windowHeight);iFF();gl=createGraphics(width,height);bl=createGraphics(width,height)}
