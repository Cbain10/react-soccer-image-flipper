import { useState } from 'react';
import './MainPage.css';

export const MainPage = () => {

    const barcaTeam = 'https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/1734F/production/_129655059_gettyimages-114914970.jpg';
    const barcaLogo = 'https://neonize.gumlet.io/wp-content/uploads/2023/03/Barcelona-Logo-Neon-Sign_light_on-off.gif';
    const cityTeam = 'https://www.si.com/.image/t_share/MTkxMzU5ODUzNTY2NTAyNDk4/imago1013579934h.jpg';
    const cityLogo = 'https://mir-s3-cdn-cf.behance.net/projects/404/90ed01176575953.Y3JvcCw4MDgsNjMyLDAsMA.png';
    const bayernURL = 'https://wallpapers.com/images/featured/bayern-munich-6o9jdslyd3fe267f.jpg';
    const chelseaURL = 'https://wallpapers.com/images/featured/chelsea-fc-logo-esvpoici90jl4fpx.jpg';
    const interURL = 'https://seeklogo.com/images/I/Inter_FC-logo-A600D6151E-seeklogo.com.png';
    const brightonURL = 'https://i.pinimg.com/originals/a8/3c/fa/a83cfad00ee6a7d9a3faffea5b70783e.png';
    const benficaURL = 'https://images7.alphacoders.com/989/989960.jpg';
    const juventusURL = 'https://c8.alamy.com/comp/DC36TJ/juventus-DC36TJ.jpg';
    const unitedURL = 'https://wallpapers.com/images/featured/manchester-united-logo-e45hfwpfz9aewlv4.jpg';

    const [barcaURL, setBarcaUrl] = useState(barcaLogo);
    const [cityURL, setCityUrl] = useState(cityLogo);


    const handleChangeImage = (url, setState) => {
        setTimeout(() => {
            setState(url);
        }, 300);
    }

    return (
        <div>
            <h1>Image Flipper</h1>
            <img
                className='barca-img'
                src={barcaURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(barcaTeam, setBarcaUrl)}
                onMouseLeave={() => handleChangeImage(barcaLogo, setBarcaUrl)}
                alt='barca'
            />
            <img
                className='city-img'
                src={cityURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(cityTeam, setCityUrl)}
                onMouseLeave={() => handleChangeImage(cityLogo, setCityUrl)}
                alt='city'
            />
            <img
                className='bayern-img'
                src={bayernURL}
                height={200}
                width={200}
                alt='bayern'
            />
            <br/>
            <img
                className='chelsea-img'
                src={chelseaURL}
                height={200}
                width={200}
                alt='barca'
            />
            <img
                className='inter-img'
                src={interURL}
                height={200}
                width={200}
                alt='city'
            />
            <img
                className='brighton-img'
                src={brightonURL}
                height={200}
                width={200}
                alt='bayern'
            />
            <br/>
            <img
                className='united-img'
                src={unitedURL}
                height={200}
                width={200}
                alt='barca'
            />
            <img
                className='benfica-img'
                src={benficaURL}
                height={200}
                width={200}
                alt='city'
            />
            <img
                className='juventus-img'
                src={juventusURL}
                height={200}
                width={200}
                alt='bayern'
            />

        </div>
    )
}