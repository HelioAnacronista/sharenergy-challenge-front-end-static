import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaDog } from 'react-icons/fa';

import LoadingPage from '../../components/LoadingPage';
import { Container } from './style';

type dogJson = {
  fileSizeBytes: number,
  url: string
}

function PageDog() {

  const [loading, setLoading] = useState(true);

  const [dog, setDog] = useState<dogJson>({
    fileSizeBytes: 0,
    url: ""
  });

  function getRandomDog() {
    location.reload()
  }

  useEffect(() => {
    axios.get('https://random.dog/woof.json?filter=mp4')
      .then(res => {
        setDog(res.data);
      })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ?
        (<LoadingPage></LoadingPage>)
        :

        (
          <>
            <Container className='center container-main'>
              <div className='card-select mb-100'>
                <div className='card-dog'>
                  <div className='btn-card center'>
                    <button className="btn-style-global box-shadow-b" onClick={() => getRandomDog()}>
                      DOG <FaDog></FaDog>
                    </button>
                  </div>

                  <div>
                    <img className='card-img' src={dog.url} alt="cachorro" />
                  </div>
                </div>
              </div>
            </Container>
            
          </>
        )
      }
    </>
  );
}

export default PageDog;