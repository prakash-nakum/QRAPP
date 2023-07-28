import React, { useState, useEffect } from 'react';

const MyComponent = () => {

    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('http://192.168.192.76:8080/db-data')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            Afre HEllo
            <div className='col-md-4 m-auto'>
                <div className='display-mobile-main'>
                    <div className='firsl-fream'>

                        <div className='logo-img '>
                            {/* <img src={logo} alt="" /> */}
                        </div>
                        <div>
                            <p className='text-center' >Follow me on Social Media</p>
                            <p className='text-center' >I don’t copy trends, I create them.</p>
                        </div>

                        {
                            data && data.length > 0 && data.map((item, index) => {
                                return (
                                    <>
                                        <a href={item.urls}>
                                            <div key={index} className="scrollable-content"  >
                                                <div className='icons-in-mobile'>
                                                    <div className='sellected-components d-flex'>

                                                        <div>
                                                            <img src={item.image} alt="static img" />
                                                        </div>
                                                        <div>
                                                            <p>{
                                                                item.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
