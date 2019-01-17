var query=document.getElementById("mySearch");
var links=document.getElementsByClassName('link');
var initials=document.getElementById('initial');
var texts=document.getElementsByClassName('text');
function search(){
 document.getElementById('rand').style='opacity: 0.3;transition: opacity 1s;text-decoration: underline;';
 initials.style='text-align: left; top: 50px;left: 9%;';
 for (i = 0; i < links.length; i++) {
   links[i].style='border-style: solid; border-color:gray;';
 }
 for (j = 0;j < texts.length; j++) {
   texts[j].style='opacity:1;';
 }
  
 $.ajax({
  url: 'https://en.wikipedia.org/w/api.php',
  data: {
	'action': "opensearch",
	'format': "json",
	'search': query.value,
	'limit': "10"
  },
  dataType: 'jsonp',
  success: function (x) {
       
    //console.log(x[3]);
    //results.innerHTML=x;
    for(var num=0;num<10;num++){
      document.getElementById('searchName').innerHTML=query.value;
      document.getElementById(JSON.stringify(num)).innerHTML=x[1][num]
      document.getElementById(JSON.stringify(num+10)).innerHTML=x[2][num]; 
      document.getElementById(JSON.stringify(num+20)).href=x[3][num];
       
    }
  }  
}); 
}