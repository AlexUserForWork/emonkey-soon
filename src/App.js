import logo from './logo.svg';
import './App.css';
import Lottie from 'lottie-react';
import * as animationData from './assets/leaf.json';
import mainlogo from './assets/Group-5-768x519.gif';

const defaultOptions = {
   loop: false,
   //  autoplay: true,
   animationData: animationData
   //  rendererSettings: {
   //     preserveAspectRatio: 'xMidYMid slice'
   //  }
};

const interactivity = {
   mode: 'scroll',
   actions: [
      {
         visibility: [0.01, 0.45],
         type: 'seek',
         frames: [-29, 100]
      }
   ]
};

function App() {
   return (
      <div className='App'>
         <img
            loading='lazy'
            decoding='async'
            // width='114'
            // height='114'
            src={mainlogo}
            className='main-img'
            alt=''
         />

         <div className='soon-container'>
            <p className='soon'>COMING SOON</p>
            <a href='https://x.com/MonkerSol' className='buy-button'>
               EXPLORE NOW!
            </a>
         </div>
      </div>
   );
}

export default App;
