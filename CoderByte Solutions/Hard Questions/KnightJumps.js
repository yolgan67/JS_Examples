/*Knight Jumps
Have the function KnightJumps(str) read str which will be a string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board. The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging from 1 to 8. Your program should determine the number of spaces the knight can move to from a given location. For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces from position x=4 and y=5.*/

function KnightJumps(str) { 
str.split("")
let x=str[1]
let y=str[3]
console.log(x,y)
let result;

if( (x==3 || x==4 || x==5 || x==6 ) && (y==3 || y==4 || y==5 || y==6 ) ){
  return result=8
}else if((x==1 || x==8) && (y==1 || y==8)){
  return result =2
}else if(((x==2 || x==7)&&(y==3||y==4||y==5||y==6))||((y==2 || y==7)&&(x==3||x==4||x==5||x==6))){
  return  result=6
}else if(( (x==1||x==8)&&(y==3||y==4||y==5||y==6))||((x==3||x==4||x==5||x==6)&&(y==1||y==8))||((x=2||     x==7)&&(y==2||y==7))){
  return result=4
}else if (((x==2 || x==7) && (y==1 || y==8))||((x==1 || x==8)&&(y==2 || y==7))){
  return result =3
}
return result
}
  
// keep this function call here 
let x="(2 5)"
console.log(KnightJumps(x));


