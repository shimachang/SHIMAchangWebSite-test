import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faYoutube,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faYoutube, faInstagram, faTwitter, faArrowCircleUp);

dom.watch();
