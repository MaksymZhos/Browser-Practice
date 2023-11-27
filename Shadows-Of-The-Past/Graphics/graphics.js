const number = 1;
const type = 'field';
const filePath = `Graphics/Layout/${number}-${type}.json`;
const tilesize = 32;
const mapWidth = 44;
const mapHeight = 22;
const canvasWidth = mapWidth * tilesize; // Set canvas width based on mapWidth and tilesize
const canvasHeight = mapHeight * tilesize; // Set canvas height based on mapHeight and tilesize
let backgroundLayer;
const tileImages = {};

// Function to check if all images are loaded
function checkImagesLoaded() {
  let loadedCount = 0;
  for (const key in tileImages) {
    if (tileImages.hasOwnProperty(key) && tileImages[key].complete) {
      loadedCount++;
    }
  }
  if (loadedCount === Object.keys(tileImages).length) {
    drawBackgroundLayer();
  }
}

// Function to handle image loading errors
function handleImageError(imageKey) {
  
  checkImagesLoaded(); // Continue with the loading process
}
// Left Inner Column
const LEFT_TOP_INNER_TILE = new Image();
LEFT_TOP_INNER_TILE.onload = checkImagesLoaded;
LEFT_TOP_INNER_TILE.onerror = () => handleImageError('lti');
LEFT_TOP_INNER_TILE.src = `Graphics/Textures/${type}/left-top-inner-tile.png`;
tileImages['lti'] = LEFT_TOP_INNER_TILE;

const LEFT_MIDDLE_INNER_TILE = new Image();
LEFT_MIDDLE_INNER_TILE.onload = checkImagesLoaded;
LEFT_MIDDLE_INNER_TILE.onerror = () => handleImageError('lmi');
LEFT_MIDDLE_INNER_TILE.src = `Graphics/Textures/${type}/left-middle-inner-tile.png`;
tileImages['lmi'] = LEFT_MIDDLE_INNER_TILE;

const LEFT_BOTTOM_INNER_TILE = new Image();
LEFT_BOTTOM_INNER_TILE.onload = checkImagesLoaded;
LEFT_BOTTOM_INNER_TILE.onerror = () => handleImageError('lbi');
LEFT_BOTTOM_INNER_TILE.src = `Graphics/Textures/${type}/left-bottom-inner-tile.png`;
tileImages['lbi'] = LEFT_BOTTOM_INNER_TILE;

// Middle Inner Column
const MIDDLE_TOP_INNER_TILE = new Image();
MIDDLE_TOP_INNER_TILE.onload = checkImagesLoaded;
MIDDLE_TOP_INNER_TILE.onerror = () => handleImageError('mti');
MIDDLE_TOP_INNER_TILE.src = `Graphics/Textures/${type}/middle-top-inner-tile.png`;
tileImages['mti'] = MIDDLE_TOP_INNER_TILE;

const MIDDLE_CENTER_INNER_TILE = new Image();
MIDDLE_CENTER_INNER_TILE.onload = checkImagesLoaded;
MIDDLE_CENTER_INNER_TILE.onerror = () => handleImageError('mci');
MIDDLE_CENTER_INNER_TILE.src = `Graphics/Textures/${type}/middle-center-inner-tile.png`;
tileImages['mci'] = MIDDLE_CENTER_INNER_TILE;

const MIDDLE_BOTTOM_INNER_TILE = new Image();
MIDDLE_BOTTOM_INNER_TILE.onload = checkImagesLoaded;
MIDDLE_BOTTOM_INNER_TILE.onerror = () => handleImageError('mbi');
MIDDLE_BOTTOM_INNER_TILE.src = `Graphics/Textures/${type}/middle-bottom-inner-tile.png`;
tileImages['mbi'] = MIDDLE_BOTTOM_INNER_TILE;

// Right Inner Column
const RIGHT_TOP_INNER_TILE = new Image();
RIGHT_TOP_INNER_TILE.onload = checkImagesLoaded;
RIGHT_TOP_INNER_TILE.onerror = () => handleImageError('rti');
RIGHT_TOP_INNER_TILE.src = `Graphics/Textures/${type}/right-top-inner-tile.png`;
tileImages['rti'] = RIGHT_TOP_INNER_TILE;

const RIGHT_MIDDLE_INNER_TILE = new Image();
RIGHT_MIDDLE_INNER_TILE.onload = checkImagesLoaded;
RIGHT_MIDDLE_INNER_TILE.onerror = () => handleImageError('rmi');
RIGHT_MIDDLE_INNER_TILE.src = `Graphics/Textures/${type}/right-middle-inner-tile.png`;
tileImages['rmi'] = RIGHT_MIDDLE_INNER_TILE;

const RIGHT_BOTTOM_INNER_TILE = new Image();
RIGHT_BOTTOM_INNER_TILE.onload = checkImagesLoaded;
RIGHT_BOTTOM_INNER_TILE.onerror = () => handleImageError('rbi');
RIGHT_BOTTOM_INNER_TILE.src = `Graphics/Textures/${type}/right-bottom-inner-tile.png`;
tileImages['rbi'] = RIGHT_BOTTOM_INNER_TILE;

// Left Outer Column
const LEFT_TOP_OUTER_TILE = new Image();
LEFT_TOP_OUTER_TILE.onload = checkImagesLoaded;
LEFT_TOP_OUTER_TILE.onerror = () => handleImageError('lto');
LEFT_TOP_OUTER_TILE.src = `Graphics/Textures/${type}/left-top-outer-tile.png`;
tileImages['lto'] = LEFT_TOP_OUTER_TILE;

const LEFT_MIDDLE_OUTER_TILE = new Image();
LEFT_MIDDLE_OUTER_TILE.onload = checkImagesLoaded;
LEFT_MIDDLE_OUTER_TILE.onerror = () => handleImageError('lmo');
LEFT_MIDDLE_OUTER_TILE.src = `Graphics/Textures/${type}/left-middle-outer-tile.png`;
tileImages['lmo'] = LEFT_MIDDLE_OUTER_TILE;

const LEFT_BOTTOM_OUTER_TILE = new Image();
LEFT_BOTTOM_OUTER_TILE.onload = checkImagesLoaded;
LEFT_BOTTOM_OUTER_TILE.onerror = () => handleImageError('lbo');
LEFT_BOTTOM_OUTER_TILE.src = `Graphics/Textures/${type}/left-bottom-outer-tile.png`;
tileImages['lbo'] = LEFT_BOTTOM_OUTER_TILE;

// Middle Outer Column
const MIDDLE_TOP_OUTER_TILE = new Image();
MIDDLE_TOP_OUTER_TILE.onload = checkImagesLoaded;
MIDDLE_TOP_OUTER_TILE.onerror = () => handleImageError('mto');
MIDDLE_TOP_OUTER_TILE.src = `Graphics/Textures/${type}/middle-top-outer-tile.png`;
tileImages['mto'] = MIDDLE_TOP_OUTER_TILE;

const MIDDLE_CENTER_OUTER_TILE = new Image();
MIDDLE_CENTER_OUTER_TILE.onload = checkImagesLoaded;
MIDDLE_CENTER_OUTER_TILE.onerror = () => handleImageError('mco');
MIDDLE_CENTER_OUTER_TILE.src = `Graphics/Textures/${type}/middle-center-outer-tile.png`;
tileImages['11111'] = MIDDLE_CENTER_OUTER_TILE;

const MIDDLE_BOTTOM_OUTER_TILE = new Image();
MIDDLE_BOTTOM_OUTER_TILE.onload = checkImagesLoaded;
MIDDLE_BOTTOM_OUTER_TILE.onerror = () => handleImageError('mbo');
MIDDLE_BOTTOM_OUTER_TILE.src = `Graphics/Textures/${type}/middle-bottom-outer-tile.png`;
tileImages['mbo'] = MIDDLE_BOTTOM_OUTER_TILE;

// Right Outer Column
const RIGHT_TOP_OUTER_TILE = new Image();
RIGHT_TOP_OUTER_TILE.onload = checkImagesLoaded;
RIGHT_TOP_OUTER_TILE.onerror = () => handleImageError('rto');
RIGHT_TOP_OUTER_TILE.src = `Graphics/Textures/${type}/right-top-outer-tile.png`;
tileImages['rto'] = RIGHT_TOP_OUTER_TILE;

const RIGHT_MIDDLE_OUTER_TILE = new Image();
RIGHT_MIDDLE_OUTER_TILE.onload = checkImagesLoaded;
RIGHT_MIDDLE_OUTER_TILE.onerror = () => handleImageError('rmo');
RIGHT_MIDDLE_OUTER_TILE.src = `Graphics/Textures/${type}/right-middle-outer-tile.png`;
tileImages['rmo'] = RIGHT_MIDDLE_OUTER_TILE;

const RIGHT_BOTTOM_OUTER_TILE = new Image();
RIGHT_BOTTOM_OUTER_TILE.onload = checkImagesLoaded;
RIGHT_BOTTOM_OUTER_TILE.onerror = () => handleImageError('rbo');
RIGHT_BOTTOM_OUTER_TILE.src = `Graphics/Textures/${type}/right-bottom-outer-tile.png`;
tileImages['rbo'] = RIGHT_BOTTOM_OUTER_TILE;

function JSONFetch() {
  fetch(filePath)
    .then(response => response.json())
    .then(data => {
       
      backgroundLayer = data.backgroundLayer;
      checkImagesLoaded();
    })
    .catch(error => console.error(`Error reading JSON file ${filePath}:`, error));
}
// Function to draw the background layer
function drawBackgroundLayer() {
  // Get reference to existing canvas by ID
  const canvas = document.getElementById('graphics_core');
  canvas.width = canvasWidth; // Set canvas width
  canvas.height = canvasHeight; // Set canvas height
  const ctx = canvas.getContext('2d');

  for (let y = 0; y < mapHeight; y++) {
    for (let x = 0; x < mapWidth; x++) {
     
      const tileType = backgroundLayer[y][x];
      const tileImage = tileImages[tileType];
      if (tileImage) {
        ctx.drawImage(tileImage, x * tilesize, y * tilesize, tilesize, tilesize);
      }
    }
  }
}



setInterval(JSONFetch,1000/60)

// Function to handle touch events
// Image object for the custom image
const customImage = new Image();
customImage.src = 'Graphics/Textures/UI/Selected-Tile-Normal.png';

// Wait for the image to load
customImage.onload = function () {
  // Function to handle touch events
  function handleTouch(event) {
    const canvas = document.getElementById('graphics_core');
    const rect = canvas.getBoundingClientRect();
    const x = (event.touches[0].clientX - rect.left) / (rect.width / canvas.width);
    const y = (event.touches[0].clientY - rect.top) / (rect.height / canvas.height);

    // Calculate the tile coordinates based on touch position
    const tileX = Math.floor(x / tilesize);
    const tileY = Math.floor(y / tilesize);

    // Get reference to the main canvas context
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw the background layer
    drawBackgroundLayer();

    // Draw the custom image on the main canvas
    ctx.drawImage(customImage, tileX * tilesize, tileY * tilesize, tilesize, tilesize);
  }

  // Set up the touch event listener
  const canvas = document.getElementById('graphics_core');
  canvas.addEventListener('touchstart', handleTouch);
};







const canvas = document.getElementById('graphics_core');
canvas.addEventListener('touchstart', handleTouch);
