document.addEventListener("DOMContentLoaded", () => {

    
document.querySelector('.js-new-item-button').addEventListener('click', () => {


const fileInput = document.getElementById('file-input');
const postImage = document.getElementById('picture');
const memoryImage = document.getElementById('memory-image');
const memoryDate = document.getElementById('memory-date');




    fileInput.click();  // Trigger file input click to open file dialog
    fileInput.onchange = () => {
        const file = fileInput.files[0];  // Get the selected file
        if (file) {
            const reader = new FileReader();  // Create FileReader to read the image
            reader.onload = () => {
                // Update the memory image source with the uploaded image
                const uploadedImage = reader.result;
                memoryImage.src = uploadedImage;
                handleImageUpload(uploadedImage);

                var d = new Date();

                var day = d.getDate();
                if(day < 10){
                    day = "0" + day;
                }
            
                var month = d.getMonth() + 1;
                if(month < 10){
                    month = "0" + month;
                }
            

                const currentDate = new Date();  // Get the current date
                const formattedDate = `${day}-${month}-${currentDate.getFullYear()}`;
                memoryDate.textContent = formattedDate;

            };
            reader.readAsDataURL(file);  // Read the image file
        }
        else{
            handleImageUpload();
        }
    };


const handleImageUpload = (imageSrc) => {
    const newPost= document.createElement('div');

    var d = new Date();

    var day = d.getDate();
    if(day < 10){
        day = "0" + day;
    }

    var month = d.getMonth() + 1;
    if(month < 10){
        month = "0" + month;
    }

    newPost.innerHTML =  
            `
            <div class="post">
            <div class="post-header">
                <img src="profile_anetete.jpg" alt="anetete's photo">
                <div class="post-info">
                    <span style="font-size: 18px;">Anetete</span>
                    <span>${day}-${month}-${d.getFullYear()}</span>
                </div>
            </div>
            <img id="picture" class="picture" src="${imageSrc}" alt="anetete's photo">

        </div>
            `;

    document.querySelector('.js-dynamic-posts').prepend(newPost);

    
};
});
});


