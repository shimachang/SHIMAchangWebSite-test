import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faYoutube,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(faYoutube, faInstagram, faTwitter);

dom.watch();
