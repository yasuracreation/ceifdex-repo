import {Image} from './image.model'
export interface Title {
  type: string;
  id: string;
  image: Image;
  runningTimeInMinutes: number;
  title: string;
  titleType: string;
  year: number;
}
