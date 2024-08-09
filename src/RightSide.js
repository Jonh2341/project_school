import './App.css';
import SoundCloudBtn from './SoundCloudBtn';
import Quotes from './Quotes';

function RightSide() {
    return (
        <div className='right-side-wrapp grey'>
            <SoundCloudBtn/>
            <Quotes/>
        </div>
    );
}

export default RightSide;
