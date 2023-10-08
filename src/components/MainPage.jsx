import { useState } from 'react';
import './MainPage.css';
import { data, logoArray, teamArray } from '../data/data';

export const MainPage = () => {

    const logos = logoArray;
    const teams = teamArray;

    const [barcaURL, setBarcaUrl] = useState(data.barcaLogo);
    const [cityURL, setCityUrl] = useState(data.cityLogo);
    const [bayernURL, setBayernURL] = useState(data.bayernLogo);
    const [chelseaURL, setChelseaURL] = useState(data.chelseaLogo);
    const [interURL, setInterURL] = useState(data.interLogo);
    const [brightonURL, setBrightonURL] = useState(data.brightonLogo);
    const [unitedURL, setUnitedURL] = useState(data.unitedLogo);
    const [liverpoolURL, setLiverpoolURL] = useState(data.liverpoolLogo);
    const [juventusURL, setJuventusURL] = useState(data.juventusLogo);

    const stringArray = ['barca', 'city', 'bayern', 'chelsea', 'inter', 'brighton', 'united', 'liverpool', 'juventus'];
    const stateArray = [barcaURL, cityURL, bayernURL, chelseaURL, interURL, brightonURL, unitedURL, liverpoolURL, juventusURL];

    const getSetterFunction = (club) => {
        switch(club) {
            case 'barca':
                return setBarcaUrl;
            case 'city':
                return setCityUrl;
            case 'bayern':
                return setBayernURL;
            case 'chelsea':
                return setChelseaURL;
            case 'inter':
                return setInterURL;
            case 'brighton':
                return setBrightonURL;
            case 'united':
                return setUnitedURL;
            case 'liverpool':
                return setLiverpoolURL;
            case 'juventus':
                return setJuventusURL;
            default:
                break;
        }
    }


    const handleChangeImage = (url, setState) => {
        setTimeout(() => {
            setState(url);
        }, 300);
    }

    return (
        <div>
            <h1>Image Flipper</h1>
            {logos.map((logo, index) => {
                return <>
                            <img
                                src={stateArray[index]}
                                height={200}
                                width={200}
                                onMouseOver={() => handleChangeImage(teams[index], getSetterFunction(stringArray[index]))}
                                onMouseLeave={() => handleChangeImage(logo, getSetterFunction(stringArray[index]))}
                                alt={stringArray[index]}
                            />
                            {(index+1) % 3 === 0 &&
                                <br />
                            }
                        </>
            })
            }
        </div>
    )
}