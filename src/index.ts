import "./style/main.less";
import "./style/viewer.scss"

import {} from 'jquery';
import {} from 'viewerjs';

function showImages() {
  let viewer = new Viewer(document.getElementById('image_list'), {
    toolbar: true,
    navbar: false,
    title: false,
    initialCoverage: 1,
    loop: false,
  });
}

async function main() {
  let imgs = $('div.figure_wrapper>img');
  
  $('div.tl_page_wrap').remove();
  let viewer_div = document.createElement('div');
  viewer_div.setAttribute('id', 'viewer_box');

  let viewer_ul = document.createElement('ul');
  viewer_ul.setAttribute('id', 'image_list')
  
  for (let img of imgs) {
    let li = document.createElement('li');
    li.setAttribute('id', 'image_item');
    li.append(img);
    img.setAttribute('id', 'image');
    viewer_ul.append(li);
  }
  viewer_div.append(viewer_ul);
  $('body').append(viewer_div);

  showImages();
}


main().catch((e) => {
  console.log(e);
});
