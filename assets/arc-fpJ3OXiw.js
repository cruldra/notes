import{w as ln,c as B}from"./path-CbwjOpE9.js";import{a7 as an,a8 as H,a9 as q,aa as rn,ab as g,a3 as on,ac as L,ad as _,ae as un,af as t,ag as sn,ah as tn,ai as fn}from"./mermaid.core-CsPFkLlx.js";function cn(l){return l.innerRadius}function gn(l){return l.outerRadius}function yn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,I,D,v,A,C,a){var O=I-l,i=D-h,n=C-v,m=a-A,r=m*O-n*i;if(!(r*r<g))return r=(n*(h-A)-m*(l-v))/r,[l+r*O,h+r*i]}function W(l,h,I,D,v,A,C){var a=l-I,O=h-D,i=(C?A:-A)/L(a*a+O*O),n=i*O,m=-i*a,r=l+n,s=h+m,f=I+n,c=D+m,F=(r+f)/2,o=(s+c)/2,p=f-r,y=c-s,R=p*p+y*y,T=v-A,P=r*c-f*s,S=(y<0?-1:1)*L(fn(0,T*T*R-P*P)),j=(P*y-p*S)/R,z=(-P*p-y*S)/R,w=(P*y+p*S)/R,d=(-P*p+y*S)/R,x=j-F,e=z-o,u=w-F,G=d-o;return x*x+e*e>u*u+G*G&&(j=w,z=d),{cx:j,cy:z,x01:-n,y01:-m,x11:j*(v/T-1),y11:z*(v/T-1)}}function vn(){var l=cn,h=gn,I=B(0),D=null,v=yn,A=mn,C=pn,a=null,O=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,F=un(c-f),o=c>f;if(a||(a=n=O()),s<r&&(m=s,s=r,r=m),!(s>g))a.moveTo(0,0);else if(F>on-g)a.moveTo(s*H(f),s*q(f)),a.arc(0,0,s,f,c,!o),r>g&&(a.moveTo(r*H(c),r*q(c)),a.arc(0,0,r,c,f,o));else{var p=f,y=c,R=f,T=c,P=F,S=F,j=C.apply(this,arguments)/2,z=j>g&&(D?+D.apply(this,arguments):L(r*r+s*s)),w=_(un(s-r)/2,+I.apply(this,arguments)),d=w,x=w,e,u;if(z>g){var G=sn(z/r*q(j)),M=sn(z/s*q(j));(P-=G*2)>g?(G*=o?1:-1,R+=G,T-=G):(P=0,R=T=(f+c)/2),(S-=M*2)>g?(M*=o?1:-1,p+=M,y-=M):(S=0,p=y=(f+c)/2)}var J=s*H(p),K=s*q(p),N=r*H(T),Q=r*q(T);if(w>g){var U=s*H(y),V=s*q(y),X=r*H(R),Y=r*q(R),E;if(F<an)if(E=dn(J,K,X,Y,U,V,N,Q)){var Z=J-E[0],$=K-E[1],b=U-E[0],k=V-E[1],nn=1/q(tn((Z*b+$*k)/(L(Z*Z+$*$)*L(b*b+k*k)))/2),en=L(E[0]*E[0]+E[1]*E[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}S>g?x>g?(e=W(X,Y,J,K,s,x,o),u=W(U,V,N,Q,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(J,K),a.arc(0,0,s,p,y,!o)):a.moveTo(J,K),!(r>g)||!(P>g)?a.lineTo(N,Q):d>g?(e=W(N,Q,U,V,r,-d,o),u=W(J,K,X,Y,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[H(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:B(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:B(+n),i):h},i.cornerRadius=function(n){return arguments.length?(I=typeof n=="function"?n:B(+n),i):I},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:B(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:B(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:B(+n),i):A},i.padAngle=function(n){return arguments.length?(C=typeof n=="function"?n:B(+n),i):C},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
