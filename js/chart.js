
const searchURL = 'http://www.omdbapi.com?s=';
const yearURL = 'http://www.omdbapi.com?y=';
const myKey = '&apikey=45cdbd93';

let data = {

    labels: ['blue','yellow','red','teal','purple','orange','unknown'],
    datasets: [{
        label: '# of Votes',
        data: [21,11,4,18,9,9,4],
        backgroundColor:[ 
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(199, 199, 199, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
        ],
        borderWidth: 1
    }]
   }
   var ctx = document.getElementById('myChart').getContext('2d');
   var myChart = new Chart(ctx, {
       type: 'doughnut',
       data: data,
       options:{}
  
   });

 
 



   var a=0; /* -1950 */
   var b=0; /* 1951-1980 */
   var c=0; /* 1981-1990 */
   var d=0; /* 1991-2000 */
   var e=0; /* 2001-2010 */
   var f=0; /* 2011-2020 */
 
   for(var i=0; i<years.length; i++){
     if(years[i]<=1950){
       a++;
     }
     if(years[i]<=1980 && years[i]>=1951){
       b++;
     }  
     if(years[i]<=1990 && years[i]>=1981){
       c++;
     }
     if(years[i]<=2000 && years[i]>=1991){
       d++;
     }
     if(years[i]<=2010 && years[i]>=2001){
       e++;
     }
     if(years[i]<=2020 && years[i]>=2011){
       f++;
     }
   }

   var ctx=document.getElementById("myChart").getContextt('2d');
   var myChart= new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['-1950','1951-1980','1981-1990','1991-2000','2001-2010','2011-2020'],
       datasets: [{
         data: [a,b,c,d,e,f],
         backgroundColor: [
           'rgba(54, 162, 235, 0.8)',
           'rgba(255, 206, 86, 0.8)',
           'rgba(255, 99, 132, 0.8)',
           'rgba(75, 192, 192, 0.8)',
           'rgba(153, 102, 255, 0.8)',
           'rgba(255, 159, 64, 0.8)',
         ],
         borderColor: [
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(255, 99, 132, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)',
         ],
         borderWidth: 1
       }]
     },
     options:{
       legend:{
       position: 'bottom'
       }
     }
   })
 }