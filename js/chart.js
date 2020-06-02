
const searchURL = 'http://www.omdbapi.com?s=';
const yearURL = 'http://www.omdbapi.com?y=';
const myKey = '&apikey=45cdbd93';

let data = {

    labels: ['blue','yellow','red','teal','purple','orange','unknown'],
    datasets: [{
        label: '# of Votes',
        data: [21,11,4,18,9,9,4],
        backgroundColor: [
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
       options:{
         legend:{
           position: 'bottom'
         }
       }
   });

 
 
