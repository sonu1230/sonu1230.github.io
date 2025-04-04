const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = {
    'pic1.jpg': 'A beautiful sunset over the ocean.',
    'pic2.jpg': 'A scenic mountain landscape.',
    'pic3.jpg': 'A city skyline at night.',
    'pic4.jpg': 'A forest path surrounded by tall trees.',
    'pic5.jpg': 'A close-up of a colorful flower.'
};

/* Looping through images */

imageFiles.forEach(file => {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${file}` );
newImage.setAttribute('alt', altTexts[file]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${file}`);
    displayedImage.setAttribute('alt', altTexts[file]);
});
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');

    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});
