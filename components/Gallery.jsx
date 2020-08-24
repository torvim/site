import chunk from "chunk"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Gallery(props) {
  return (
    <div className="flex">
    	{chunk(
            props.images
                .map(i => i.replace("public/", "")) //remove public prefix
            , Math.round(props.images.length/5) //round to nearest image
        )
        .slice(0, 5) //make sure there are only 5 columns
        .map(
    		(column) => (
    			<div className="w-1/5">
    				{column.map(i => (
						<a href={i.replace("thumb.", "")} className="galleryLink">
                            <LazyLoadImage className="galleryImage" src={i}/>
                        </a>
    				))}
    			</div>
    		)
    	)
		}
    </div>
  )
}