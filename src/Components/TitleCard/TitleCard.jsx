import './TitleCard.css';
import logo from '../../assets/logo.png';

export default function TitleCard() {

    setInterval(() => {
        document.querySelector('.title-card').style.display = 'none';
    }, 3000);

    return (
        <div className='title-card'>
            <img src={logo}></img>
            <p className='disclaimer-text'>Contains real listings found on Facebook Marketplace</p>
        </div>
    );
};