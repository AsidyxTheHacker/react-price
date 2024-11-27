import './TitleCard.css'
import logo from '../../assets/logo.png'

export default function TitleCard() {

    setInterval(() => {
        document.querySelector('.title-card').style.display = 'none';
    }, 2000);

    return (
        <div className='title-card'>
            <img src={logo}></img>
        </div>
    );
};