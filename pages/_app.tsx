import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from "next/router";
import { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
      <AnimatePresence >
        <motion.div
          key = { router.route }
          initial = "initialState"
          animate = "animateState"
          exit = "exitState"
          transition = {{
          }}
          variants = {{
            initialState: { opacity: 0,},
            animateState: { opacity: 1,},
            exitState: {},
          }}
          className = "base-page-size"
        >
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </motion.div>
      </AnimatePresence>  
    )

}

export default MyApp

