import { useEffect, useState } from 'react';
import { FaCat } from 'react-icons/fa';

import { Container } from './style';
import ImageCat from '../../components/ImageCat';

function PageCatCode() {

    const [value, setValue] = useState('100');


    function handleSubmit(event: any) {
        event.preventDefault();
    }

    function handleChange(event: any) {
        setValue(event.target.value)
    }

    function getRandomNumber() {
        return String(Math.floor(Math.random() * (525 - 100 + 1)) + 100);
    }

    return (
        <>
            <Container className='pg-2-container '>
                <div className='input-code center my-20'>

                    <div className='card-select box-shadow-b '>
                        <div className='card-title-two'>
                            <h2>Digite o status <FaCat></FaCat></h2>
                        </div>
                        <div className='center'>
                            <form onSubmit={handleSubmit}>
                                <div className='flex-c'>
                                    <div>
                                        <input
                                            value={value} onChange={handleChange}
                                            placeholder='Digite o codigo ex.100'
                                            className='input-cat border-radios-1px'>
                                        </input>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>


                    <div className='card-select box-shadow-b '>
                        <div className='card-title-two'>
                            <h2>Tente a sorte</h2>
                        </div>
                        <div className='card-select-input center flex-c'>
                            <div>
                                <button onClick={() => setValue(getRandomNumber())} className='btn-style-global-btn-cat'>
                                    <FaCat></FaCat>
                                </button>
                            </div>
                        </div>
                    </div>



                </div>

                <div className='card-cat-img center'>
                    {/**/}
                    <ImageCat code={value} ></ImageCat>
                </div>
                <div className='mb-100 '>

                </div>
            </Container>

        </>
    );
}

export default PageCatCode;