import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion"
import Tilt from 'react-tilt'

export default function main ({ Component, pageProps, router }) {
  return (
  	<AnimatePresence>
  		<motion.div 
	  		key={router.route} 
	  		initial="pageInitial" 
	  		animate="pageAnimate" 
	  		exit="pageExit" 
	  		transition={{ default: { duration: .5 } }}
	  		variants={{
				pageInitial: {
					opacity: 0
				},
				pageAnimate: {
					opacity: 1
				},
				pageExit: {
					opacity: 0
				}
			}}
		>
  			<Component {...pageProps} />
  		</motion.div>
  	</AnimatePresence>
  )
}
