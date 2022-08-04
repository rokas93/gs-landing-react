import dcLogo from '../../assets/icons/dc-logo.svg';
import fbLogo from '../../assets/icons/fb-logo.svg';
import sampLogo from '../../assets/icons/samp-logo.svg';
// import ytLogo from '../../assets/icons/yt-logo.svg';
import { uid } from 'uid';

const mediaLinks = [
  { id: uid(), icon: sampLogo, url: 'http://localhost:3000/samp', text: '' },
  {
    id: uid(),
    icon: fbLogo,
    url: 'http://localhost:3000/fb',
    text: 'Facebook puslapis',
  },
  {
    id: uid(),
    icon: dcLogo,
    url: 'http://localhost:3000/dc',
    text: 'Discord serveris',
  },
];

export default mediaLinks;
