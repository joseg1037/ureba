function CountWebsiteVisits(response){
    document.querySelector("#visits").textContent=response.value;    
    //var visits = document.querySelector("#visits").textContent;        
    //WriteToFile(visits);
}

function WriteToFile(visits) {    
    var textToWrite="Number of visits: "+visits;             
    const file = new File([textToWrite], 'Visits.txt', {
    type: 'text/plain',
    })    
    const link = document.createElement('a')
    const url = URL.createObjectURL(file)
    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    window.URL.revokeObjectURL(url)
 }