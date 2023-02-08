import imageBook from '../assets/img/BigBook.png';
import noImage from '../assets/img/BigNoImage.png';

export const getImage = (url: string) => `${url ? imageBook : noImage}`;
