
import {refs} from "../references/references"
import templateCard from "../../templates/templateCard.hbs"



function createResultMarkup(results) {
  // console.log(results);
  // console.log(templateCard(results));

  refs.galleryEl.insertAdjacentHTML('beforeend', templateCard(results));
  // console.log
  }
  
  export {createResultMarkup}