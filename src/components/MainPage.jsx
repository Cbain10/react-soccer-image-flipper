import { useState } from 'react';
import './MainPage.css';
import { data } from '../data/data';

export const MainPage = () => {

    const [barcaURL, setBarcaUrl] = useState(data.barcaLogo);
    const [cityURL, setCityUrl] = useState(data.cityLogo);
    const [bayernURL, setBayernURL] = useState(data.bayernLogo);
    const [chelseaURL, setChelseaURL] = useState(data.chelseaLogo);
    const [interURL, setInterURL] = useState(data.interLogo);
    const [brightonURL, setBrightonURL] = useState(data.brightonLogo);
    const [unitedURL, setUnitedURL] = useState(data.unitedLogo);
    const [liverpoolURL, setLiverpoolURL] = useState(data.liverpoolLogo);
    const [juventusURL, setJuventusURL] = useState(data.juventusLogo);


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
                onMouseOver={() => handleChangeImage(data.barcaTeam, setBarcaUrl)}
                onMouseLeave={() => handleChangeImage(data.barcaLogo, setBarcaUrl)}
                alt='barca'
            />
            <img
                className='city-img'
                src={cityURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(data.cityTeam, setCityUrl)}
                onMouseLeave={() => handleChangeImage(data.cityLogo, setCityUrl)}
                alt='city'
            />
            <img
                className='bayern-img'
                src={bayernURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(data.bayernTeam, setBayernURL)}
                onMouseLeave={() => handleChangeImage(data.bayernLogo, setBayernURL)}
                alt='bayern'
            />
            <br/>
            <img
                className='chelsea-img'
                src={chelseaURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(data.chelseaTeam, setChelseaURL)}
                onMouseLeave={() => handleChangeImage(data.chelseaLogo, setChelseaURL)}
                alt='chelsea'
            />
            <img
                className='inter-img'
                src={interURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(data.interTeam, setInterURL)}
                onMouseLeave={() => handleChangeImage(data.interLogo, setInterURL)}
                alt='inter'
            />
            <img
                className='brighton-img'
                src={brightonURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(data.brightonTeam, setBrightonURL)}
                onMouseLeave={() => handleChangeImage(data.brightonLogo, setBrightonURL)}
                alt='brighton'
            />
            <br/>
            <img
                className='united-img'
                src={unitedURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(data.unitedTeam, setUnitedURL)}
                onMouseLeave={() => handleChangeImage(data.unitedLogo, setUnitedURL)}
                alt='united'
            />
            <img
                className='liverpool-img'
                src={liverpoolURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(data.liverpoolTeam, setLiverpoolURL)}
                onMouseLeave={() => handleChangeImage(data.liverpoolLogo, setLiverpoolURL)}
                alt='liverpool'
            />
            <img
                className='juventus-img'
                src={juventusURL}
                height={200}
                width={200}
                onMouseOver={() => handleChangeImage(data.juventusTeam, setJuventusURL)}
                onMouseLeave={() => handleChangeImage(data.juventusLogo, setJuventusURL)}
                alt='juventus'
            />

        </div>
    )
}