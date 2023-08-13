let movies;
var index = 0 ;
fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
.then(response => response.json())
.then(data =>{
        movies = data;
        let image1 = document.getElementById('img1');
        let title1 = document.getElementById('title1');
        let year1 = document.getElementById('year1');
        let runtime1 = document.getElementById('runtime1');
        let image2 = document.getElementById('img2');
        let title2 = document.getElementById('title2');
        let year2 = document.getElementById('year2');
        let runtime2 = document.getElementById('runtime2');
        image1.setAttribute('src',`${movies[0].Poster}`)
        title1.innerHTML='Title : '+`${movies[0].Title}`;
        year1.innerHTML='Year : '+`${movies[0].Year}`;
        runtime1.innerHTML='Runtime : '+`${movies[0].Runtime}`;
        image2.setAttribute('src',`${movies[1].Poster}`)
        title2.innerHTML='Title : '+`${movies[1].Title}`;
        year2.innerHTML='Year : '+`${movies[1].Year}`;
        runtime2.innerHTML='Runtime : '+`${movies[1].Runtime}`;
})
function pagenumber(page,number){
    index = number;
    let image1 = document.getElementById('img1');
    let title1 = document.getElementById('title1');
    let year1 = document.getElementById('year1');
    let runtime1 = document.getElementById('runtime1');
    let image2 = document.getElementById('img2');
    let title2 = document.getElementById('title2');
    let year2 = document.getElementById('year2');
    let runtime2 = document.getElementById('runtime2');
    switch (page) {
        case 'page1':
                image1.setAttribute('src',`${movies[0].Poster}`)
                title1.innerHTML='Title : '+`${movies[0].Title}`;
                year1.innerHTML='Year : '+`${movies[0].Year}`;
                runtime1.innerHTML='Runtime : '+`${movies[0].Runtime}`;
                image2.setAttribute('src',`${movies[1].Poster}`)
                title2.innerHTML='Title : '+`${movies[1].Title}`;
                year2.innerHTML='Year : '+`${movies[1].Year}`;
                runtime2.innerHTML='Runtime : '+`${movies[1].Runtime}`;
            break;
        case 'page2':
                image1.setAttribute('src',`${movies[1].Poster}`)
                title1.innerHTML='Title : '+`${movies[1].Title}`;
                year1.innerHTML='Year : '+`${movies[1].Year}`;
                runtime1.innerHTML='Runtime : '+`${movies[1].Runtime}`;
                image2.setAttribute('src',`${movies[2].Poster}`)
                title2.innerHTML='Title : '+`${movies[2].Title}`;
                year2.innerHTML='Year : '+`${movies[2].Year}`;
                runtime2.innerHTML='Runtime : '+`${movies[2].Runtime}`;
            break;
        case 'page3':
                image1.setAttribute('src',`${movies[2].Poster}`)
                title1.innerHTML='Title : '+`${movies[2].Title}`;
                year1.innerHTML='Year : '+`${movies[2].Year}`;
                runtime1.innerHTML='Runtime : '+`${movies[2].Runtime}`;
                image2.setAttribute('src',`${movies[3].Poster}`)
                title2.innerHTML='Title : '+`${movies[3].Title}`;
                year2.innerHTML='Year : '+`${movies[3].Year}`;
                runtime2.innerHTML='Runtime : '+`${movies[3].Runtime}`;
            break;
        case 'page4':
                image1.setAttribute('src',`${movies[3].Poster}`)
                title1.innerHTML='Title : '+`${movies[3].Title}`;
                year1.innerHTML='Year : '+`${movies[3].Year}`;
                runtime1.innerHTML='Runtime : '+`${movies[3].Runtime}`;
                image2.setAttribute('src',`${movies[4].Poster}`)
                title2.innerHTML='Title : '+`${movies[4].Title}`;
                year2.innerHTML='Year : '+`${movies[4].Year}`;
                runtime2.innerHTML='Runtime : '+`${movies[4].Runtime}`;
            break;
    }
}
function arrow(sign){
    let image1 = document.getElementById('img1');
    let title1 = document.getElementById('title1');
    let year1 = document.getElementById('year1');
    let runtime1 = document.getElementById('runtime1');
    let image2 = document.getElementById('img2');
    let title2 = document.getElementById('title2');
    let year2 = document.getElementById('year2');
    let runtime2 = document.getElementById('runtime2');
    if(sign=='-'){

                if (index == 0) {
                    index = 4;
                }
                image1.setAttribute('src',`${movies[index].Poster}`)
                title1.innerHTML='Title : '+`${movies[index].Title}`;
                year1.innerHTML='Year : '+`${movies[index].Year}`;
                runtime1.innerHTML='Runtime : '+`${movies[index].Runtime}`;
                image2.setAttribute('src',`${movies[index-1].Poster}`)
                title2.innerHTML='Title : '+`${movies[index-1].Title}`;
                year2.innerHTML='Year : '+`${movies[index-1].Year}`;
                runtime2.innerHTML='Runtime : '+`${movies[index-1].Runtime}`;
                index -= 1;
                console.log(index)
                
                
    }
    if(sign=='+'){

        if (index == 4) {
            index = 0;
        }
        image1.setAttribute('src',`${movies[index].Poster}`)
                title1.innerHTML='Title : '+`${movies[index].Title}`;
                year1.innerHTML='Year : '+`${movies[index].Year}`;
                runtime1.innerHTML='Runtime : '+`${movies[index].Runtime}`;
                image2.setAttribute('src',`${movies[index+1].Poster}`)
                title2.innerHTML='Title : '+`${movies[index+1].Title}`;
                year2.innerHTML='Year : '+`${movies[index+1].Year}`;
                runtime2.innerHTML='Runtime : '+`${movies[index+1].Runtime}`;
        index += 1;
        console.log(index)
}

}
