import chunk from "chunk"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Gallery(props) {
  return (
    <div className="flex">
    	{chunk(props.images.map(i => i.replace("public/", "")), Math.round(props.images.length/5)).slice(0, 5).map(
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