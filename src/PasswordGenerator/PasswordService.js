  export const getRandomLowerCase = ()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+ 97);
  }
 export const getRandomUpperCase = () =>{
  return String.fromCharCode(Math.floor(Math.random()*26)+ 65); 
 }

 export const getRandomNumbers = () =>{
  return String.fromCharCode(Math.floor(Math.random()*10)+ 48); 
 }
 export const getRandomSymbols = () =>{
  let symbolStr=`!@#$%^&*(){}[]/`
  return symbolStr[Math.floor(Math.random()*symbolStr.length)]
 }
 export const getPasswordObj= (state) =>{
    let passwordObj = [];
    for(let key of Object.keys(state)){
      if(typeof state[key]==='boolean' && state[key]){
        passwordObj={
          ...passwordObj,
          [key] : state[key]
        }
      }
    }
    return passwordObj;
 }
 export const generatePassword = (passwordObj,passwordLength) =>{
   let thePassword = [];
   for(let i=0;i<Number(passwordLength);i+=Object.keys(passwordObj).length){
      if(passwordObj.lower)  thePassword+=`${getRandomLowerCase()}`;
      if(passwordObj.upper)  thePassword+=`${getRandomUpperCase()}`;
      if(passwordObj.symbol)  thePassword+=`${getRandomSymbols()}`;
      if(passwordObj.number)  thePassword+=`${getRandomNumbers()}`;

   }
   return thePassword;
 }