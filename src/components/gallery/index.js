import React from "react";

class Gallery extends React.Component {
    let urls = [
        "/react-image-gallery/img/cat1.jpg",
        "/react-image-gallery/img/cat2.jpg",
        "/react-image-gallery/img/cat3.jpg"
      ];

}
Gallery.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

ReactDOM.render(<Gallery imageUrls={urls} />, document.getElementById("mount"));

export default Gallery;