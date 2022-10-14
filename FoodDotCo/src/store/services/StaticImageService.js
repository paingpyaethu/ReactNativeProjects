import {STATIC_IMAGE} from '../constants/ApiConstants';

const getLogo = imageId =>
  `${STATIC_IMAGE.STATIC_IMAGE_URL}/logo/${imageId}.png`;

const getPoster = (imageId, quality = STATIC_IMAGE.QUALITY.SD) =>
  `${STATIC_IMAGE.STATIC_IMAGE_URL}/poster/${quality}/${imageId}.png`;

const getGalleryImage = (imageId, size, quality = STATIC_IMAGE.QUALITY.SD) =>
  `${STATIC_IMAGE.STATIC_IMAGE_URL}/gallery/${size}/${quality}/${imageId}.png`;

export default {getLogo, getPoster, getGalleryImage};
