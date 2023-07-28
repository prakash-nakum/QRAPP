
import React, { useEffect, useState } from 'react'
import './social.css'
import logo from '../../../src/img/Arity.jpg'
import fbsvg from '../../../src/img/facebook.svg'
import envelope from '../../../src/img/envelope.svg'
import instagram from '../../../src/img/instagram.svg'
import link from '../../../src/img/link-45deg.svg'
import linkedin from '../../../src/img/linkedin.svg'
import quora from '../../../src/img/quora.svg'
import skype from '../../../src/img/skype.svg'
import snapchat from '../../../src/img/snapchat.svg'
import telephone from '../../../src/img/telephone.svg'
import tencent from '../../../src/img/tencent-qq.svg'
import wechat from '../../../src/img/wechat.svg'
import whatsapp from '../../../src/img/whatsapp.svg'
import close from '../../../src/img/x-circle-fill.svg'
import QRCode from 'qrcode.react';
import axios from 'axios';


const icons = [
    {
        id: 1,
        img: fbsvg,
        title: "Facebook",
    },
    {
        id: 2,
        img: envelope,
        title: "Envelope"
    },

    {
        id: 3,
        img: instagram,
        title: "Instagram"
    },
    {
        id: 4,
        img: link,
        title: "Link"
    },
    {
        id: 5,
        img: linkedin,
        title: "Linkdin"
    },
    {
        id: 6,
        img: quora,
        title: "Quora"
    },
    {
        id: 7,
        img: skype,
        title: "Skype"
    },
    {
        id: 8,
        img: snapchat,
        title: "Snapchat"
    },
    {
        id: 9,
        img: telephone,
        title: "TelePhone"
    },
    {
        id: 10,
        img: tencent,
        title: "Tecncent"
    },
    {
        id: 11,
        img: wechat,
        title: "WeChat"
    },
    {
        id: 12,
        img: whatsapp,
        title: "Whatsapp"
    }

]


const SocualMedia = () => {
    const [socialurl, setSocialurl] = useState('');
    const [qrCodes, setQrCodes] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleIconClick = (iconImg, iconTitle) => {

        const isItemSelected = selectedItems.some(item => item.img === iconImg);
        if (!isItemSelected) {
            setSelectedItems(prevSelectedItems => [
                ...prevSelectedItems,
                { img: iconImg, title: iconTitle, userTitle: '', urls: [] },
            ]);
        }
    };


    const handleTitleChange = (e, index) => {
        const { value } = e.target;

        setSelectedItems(prevSelectedItems => {
            const updatedItems = [...prevSelectedItems];
            updatedItems[index] = { ...updatedItems[index], userTitle: value };
            return updatedItems;
        });
    };

    const getTitleToDisplay = (item) => {
        return item.userTitle ? item.userTitle : item.title;
    };

    // const newdata = "teasting dtaa "
    const handlesubmit = (e) => {
        e.preventDefault();
        setSocialurl('');
        generateQRCodes();
    };

    const componetsC = () => {
        return (
            <>
                <div className='col-md-4'>
                    <div className='display-mobile-main'>
                        <div className='firsl-fream'>

                            <div className='logo-img '>
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <p className='text-center' >Follow me on Social Media</p>
                                <p className='text-center' >I don’t copy trends, I create them.</p>

                            </div>

                            {
                                selectedItems && selectedItems.length > 0 && selectedItems.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="scrollable-content"  >
                                                <div className='icons-in-mobile'>
                                                    <div className='sellected-components d-flex'>

                                                        <div>
                                                            <img src={item.img} alt="static img" />
                                                        </div>
                                                        <div>
                                                            <p>{getTitleToDisplay(item)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // Assuming this code is in your React component

    const generateQRCodes = async () => {




        const concatenatedUrls = selectedItems.map((item) => item.url);
        const datatitle = selectedItems.map((item) => item.title);
        const img = selectedItems.map((item) => item.img)
        try {
            const response = await fetch('http://192.168.192.76:8080/api/generate-link', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    urls: concatenatedUrls,
                    title: datatitle,
                    image: img,
                    // link : 
                }),
            });
            const { dynamicLink, dynamicToken } = await response.json();

            setQrCodes(
                <div>
                    <a href={dynamicLink}>
                        <QRCode value={dynamicLink} />
                    </a>
                    <a href={dynamicLink}>{dynamicLink} </a>
                    {dynamicToken}

                    {console.log(dynamicToken)}
                    { }

                </div>
            );
        } catch (error) {
            console.error('Error generating QR code:', error);
            setQrCodes(null);
        }
    };
    const handleURLChange = (e, iconIndex) => {
        const inputValue = e.target.value;
        const { value } = e.target;

        setSelectedItems(prevSelectedItems => {
            const updatedItems = prevSelectedItems.map((item, index) => {
                if (index === iconIndex) {
                    return { ...item, url: value };
                }
                return item;
            });
            return updatedItems;
        });
    };



    return (
        <div>
            <div className='url-wrapper'>
                <div className='container'>
                    <div className='rul-step-one'>
                        <div className='first-stpedd'>
                            <div className='step-text d-flex'>
                                <div className='steponetext mx-4'>
                                    <p>STEP 1</p>
                                </div>
                                <div className='enter-text'>
                                    <p>Set up your social media page  </p>
                                </div>
                            </div>
                        </div>
                        <div className='qrwith-social-media'>
                            <div className='social-some'>
                                <div className='d-flex suggetion '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                                    </svg>
                                    <p>Add Social Media</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            {
                                icons && icons.length > 0 && icons.map((item, index) => {
                                    return (
                                        <div className='rogdw' key={index}>
                                            <div className='cgfdol-mgdd-5g'>
                                                <button className='btn' onClick={() => handleIconClick(item.img, item.title)}>
                                                    <img src={item.img} alt="" />
                                                </button>
                                            </div>
                                            <div className='cogdl-mdgd-5fgd'></div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <form onSubmit={handlesubmit}>
                            <div className='row'>
                                <div className='col-md-4'>

                                    <div className='qrwith-social-media'>
                                        <div className='social-some'>
                                            <div className='d-flex suggetion '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
                                                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                                                </svg>
                                                <p>Manage Social Media</p>
                                            </div>

                                            <div className='manege-social-media'>


                                                {selectedItems.map((item, index) => {
                                                    return (
                                                        <div className='media-hendle border border-secondary' key={item.img}>
                                                            <div>
                                                                <img src={item.img} alt='static img' />
                                                                <input
                                                                    type='text'
                                                                    placeholder='Enter Your Title'
                                                                    value={item.userTitle ? item.userTitle : item.title}
                                                                    onChange={(e) => handleTitleChange(e, index)}
                                                                    name=''
                                                                    id=''
                                                                />
                                                            </div>
                                                            <div>
                                                                <img src={link} alt='static img' />
                                                                <input
                                                                    type='text'
                                                                    placeholder='Enter URL Link'
                                                                    value={item.url || ''}
                                                                    onChange={(e) => handleURLChange(e, index)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='display-mobile-main'>
                                        <div className='firsl-fream'>

                                            <div className='logo-img '>
                                                <img src={logo} alt="" />
                                            </div>
                                            <div>
                                                <p className='text-center' >Follow me on Social Media</p>
                                                <p className='text-center' >I don’t copy trends, I create them.</p>

                                            </div>

                                            {
                                                selectedItems && selectedItems.length > 0 && selectedItems.map((item, index) => {
                                                    return (
                                                        <>
                                                            <div key={index} className="scrollable-content"  >
                                                                <div className='icons-in-mobile'>
                                                                    <div className='sellected-components d-flex'>

                                                                        <div>
                                                                            <img src={item.img} alt="static img" />
                                                                        </div>
                                                                        <div>
                                                                            {/* <p>{item.title}</p> */}
                                                                            <p>{getTitleToDisplay(item)}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    {/* { value ==='' ? '' : ''  } */}
                                    <button type='submit' className='btn btn-outline-success'> Generate QR Code  </button>
                                </div>
                            </div>
                        </form>
                        <div className='qr-codes-wrapper'>
                            {qrCodes}

                            {/* {urlsDiv} */}
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default SocualMedia

