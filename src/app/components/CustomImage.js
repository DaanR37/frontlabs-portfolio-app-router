import Image from "next/image";
import PropTypes from 'prop-types';

function CustomImage({ src, alt, priority, width, height, sizes, className = " " }) {
   return (
      <Image
         className={`${className} mx-auto`}
         src={src}
         alt={alt}
         width={width}
         height={height}
         sizes={sizes}
         priority={!!priority}
      />
   )
}

CustomImage.propTypes = {
   src: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   priority: PropTypes.bool,
};

export default CustomImage;
