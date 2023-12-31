
export function createMarkup(data) {

        const { largeImageURL ,webformatURL, tags, likes, views, comments, downloads } = data;

        return ` 
        <a onclick="return false" href="${largeImageURL}">
         <div class="photo-card"> 
            <img src="${webformatURL}" alt="${tags}" loading="lazy" width="300px" height ="200px" />
        
        <div class="info">
            <p class="info-item">
            <b>Likes</b>
               <br> ${likes}
            </p>
            <p class="info-item">
                <b>Views</b>
               <br>${views}
            </p>
            <p class="info-item">
                <b>Comments</b>
                <br>${comments}
            </p>
            <p class="info-item">
                <b>Downloads</b>
                <br>${downloads}
            </p>
        </div>
    </div>
</a>
`   
};
