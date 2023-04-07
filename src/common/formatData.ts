import { format } from 'date-fns';

import { MovieInterface } from '../services/movieService';
import { InfoInterface } from '../components/Info/Info';
import { CardDescrInterface } from '../components/CardDescr/CardDescr';
import { CardImageInterface } from '../components/CardImage/CardImage';
import { FormatDataInterface } from '../components/Card/Card';

export default class FormatData {
  static mockUrl = 'https://via.placeholder.com/500x500';
  static imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  static formatData(data: MovieInterface): FormatDataInterface {
    const cardDescr = FormatData.getCardDescr(data);
    const cardImage = FormatData.getCardImage(data);
    const infoItem = FormatData.getInfoItem(data);
    return { cardDescr, cardImage, infoItem, id: data.id };
  }

  static getScore(score: number): number {
    const currScore = Math.round(score * 100);
    return +(currScore / 100).toFixed(1);
  }

  static getCardDescr(data: MovieInterface): CardDescrInterface {
    return { score: FormatData.getScore(data.popularity), rate: data.vote_average, description: data.overview };
  }

  static getCardAltText(title: string) {
    return `${title} poster`;
  }

  static getImagePath(src: string | null) {
    if (!src) return FormatData.mockUrl;
    return `${FormatData.imageBaseUrl}${src}`;
  }

  static getCardImage(data: MovieInterface): CardImageInterface {
    const src = FormatData.getImagePath(data.poster_path);
    const altText = FormatData.getCardAltText(data.title);
    return { src, altText };
  }

  static getReleaseDate(date: string): string {
    if (!date) return 'Unknown';
    return format(new Date(date), 'MMMM d, yyyy');
  }

  static getInfoItem(data: MovieInterface): InfoInterface {
    const releaseDate = FormatData.getReleaseDate(data.release_date);
    return { heading: data.title, genres: data.genres, releaseDate };
  }
}
