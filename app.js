
const container = document.querySelector(".container");

window.addEventListener('load', async e => {
    await fetchData();
    sortData();
});

async function fetchData() {

    //console.log(data);

    container.innerHTML = newList.map(data => {
       
        let card=(
            
        '<div class="card" id='+data.id+' data-statut='+data.statut+' >'
            +'<header class="card-header">'
                +'<p class="card-header-title">'+data.nom+'</p>'
            +'</header>'
            +'<div class="card-image">'
                +'<figure class="image is-4by3 '+data.statut+'">'
                    +'<a target="_blank" rel="noopener" href='+data.url+'><img src='+data.img_url+' alt='+data.nom+'></a>'
                +'</figure>'
            +'</div>'
            +'<div class="card-content">'
                +'<div class="content">'+data.description+'</div>'
                +'<p class="subtitle">'+data.prix+' - '+data.statut+'</p>'
            +'</div>'
        +'</div>');
    return card ;

    }).join('\n');
}

function sortData(){
    let Art = $(".card");
   
    let ArrayArt = Array.from(Art);
    let sorted=ArrayArt.sort(sorter);
    function sorter(a,b) {
        return a.dataset.statut.localeCompare(b.dataset.statut); // sorts based on alphabetical order
    }
    let container= $(".container");
    container.empty();
    sorted.forEach(e => container.append(e));
}

