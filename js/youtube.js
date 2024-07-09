const youtubePlaylist = document.getElementById('youtubePlaylist') 

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=UUbdiovrPX0spsJLbEisvAgQ&key=AIzaSyBShhC5ynOWRcpCWIATswOQtVBuWWcfLzQ')
.then(res => res.json())
.then(data =>{
    console.log(data);
    data.items.forEach(al => {
        youtubePlaylist.innerHTML += `
        <div class="col-md-3">
    <div class="card">
      <iframe class="card-img-top" src="https://www.youtube.com/embed/${al.snippet.resourceId.videoid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div class="card-body">
        <p>${al.snippet.title}</p>
        <small>${al.snippet.publishedAt}</small>
      </div>
    </div>
  </div>
        `
        
        

    })

})