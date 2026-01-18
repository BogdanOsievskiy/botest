import imageDefault from '@/assets/default.png'
import image1 from '@/assets/img1.png';
import image2 from '@/assets/img2.png';
import image3 from '@/assets/img3.png';
import image4 from '@/assets/img4.png';

export interface TaskItem {
  id: string;
  state: 'default' | 'image-only' | 'generating';
  imageUrl?: string;
  progress?: number;
  timeLeft?: number
}

export const sampleTasks: TaskItem[] = [
  {
    id: '1',
    state: 'generating',
    progress: 25,
    timeLeft: 60000
  },
  {
    id: '2',
    state: 'default',
    imageUrl: imageDefault,
  },
  {
    id: '3',
    state: 'image-only',
    imageUrl: image1,
  },
  {
    id: '4',
    state: 'image-only',
    imageUrl: image2,
  },
  {
    id: '5',
    state: 'image-only',
    imageUrl: image3,
  },
  {
    id: '6',
    state: 'image-only',
    imageUrl: image4,
  },
  
  
];