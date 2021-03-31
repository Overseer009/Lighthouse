const urlEncode = function(text) {
  let percent = "";
  for(i = 0; i < text.length; i++) {
      if(text[i] === " ") {  
          if(!(i == 0 || i == text.length - 1)) {
              percent += '%20';
          }
      } else {
          percent += text[i];
      }
  }
  return percent;
  };
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));