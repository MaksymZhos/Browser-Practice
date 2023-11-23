const number = 1;
const type = 'field';
const filePath = `${number}-${type}.json`;
const tilesize = 16;
const mapWidth = 40;
const mapHeight = 30;

const tileImages = [];

const LEFT_TOP_INNER_TILE = new Image();
LEFT_TOP_INNER_TILE.src = `Textures/${type}/left-top-inner-tile.png`;
tileImages['lti'] = LEFT_TOP_INNER_TILE;

const LEFT_MIDDLE_INNER_TILE = new Image();
LEFT_MIDDLE_INNER_TILE.src = `Textures/${type}/left-middle-inner-tile.png`;
tileImages['lmi'] = LEFT_MIDDLE_INNER_TILE;

const LEFT_BOTTOM_INNER_TILE = new Image();
LEFT_BOTTOM_INNER_TILE.src = `Textures/${type}/left-bottom-inner-tile.png`;
tileImages['lbi'] = LEFT_BOTTOM_INNER_TILE;




fetch(filePath)
  .then(response => response.json())
  .then(data => {
    const backgroundLayer = data.backgroundLayer;
    return backgroundLayer
  
  })
  .catch(error => console.error(`Error reading JSON file ${filePath}:`, error));

