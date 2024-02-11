// function loadimages() {
    // List of image filenames
    const imageFilenames = [,];
    var filename;
    function fetchImages() {
        // Path to your local directory containing images
        const directoryPath = '../images/';

        // Fetch all images using XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.open('GET', directoryPath, true);
        xhr.responseType = 'document';
        xhr.onload = function () {
            if (xhr.status === 200) {
                const directoryListing = xhr.response.documentElement;
                const files = directoryListing.querySelectorAll('a');
                files.forEach(file => {
                    const fileName = file.getAttribute('href');
                    if (fileName.match(/\.(jpg|jpeg|png|gif)$/)) {
                        // displayImage(directoryPath + fileName);
                        // console.log(fileName)
                        displayImages(fileName)
                        imageFilenames.concat(fileName)
                    }
                });
            }
        };
        xhr.send();
    }

    console.log(imageFilenames)

    // Function to display images
    function displayImages(fileName) {
        const imageContainer = document.getElementById('imageContainer');

        // imageFilenames.forEach(filename => {
        const img = document.createElement('img');
        img.src = fileName; // Assuming images folder is named 'images'
        // console.log(fileName)
        img.style.maxWidth = '100%';
        imageContainer.appendChild(img);
        img.addEventListener("click",displayname(filename));
        // });
    }

    function displayname(filename){
        console.log(filename)
    }
    
    window.onload = fetchImages;
    displayImages();
    // Call the function to display images
// }