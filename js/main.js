"use strict"

import SectionHeading from './SectionHeading.js';
import Achievements from './Achievements.js';


// Find all atributes with 'data-h2' to create H2 elements
const allDatah2 = document.querySelectorAll('[data-h2]');
for (let i = 0; i < allDatah2.length; i++) {
    const element = allDatah2[i];
    new SectionHeading(element);    
}

new Achievements('#achievements > .row');