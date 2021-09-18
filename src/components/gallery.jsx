export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Wildcats</h2>
          <p>
            Meet some of our furry assistants you might see in class.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/toast1-large.png'
                    title='Toast'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Toast</h4>
                    </div>
                    <img
                      src='img/portfolio/toast1-small.png'
                      className='img-responsive'
                      alt='Toast'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/oogie1-large.png'
                    title='Oogie'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Oogie</h4>
                    </div>
                    <img
                      src='img/portfolio/oogie1-small.png'
                      className='img-responsive'
                      alt='Oogie'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/boogie1-large.png'
                    title='Boogie'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Boogie</h4>
                    </div>
                    <img
                      src='img/portfolio/boogie1-small.png'
                      className='img-responsive'
                      alt='Boogie'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/sherlock1-large.png'
                    title='Sherlock'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sherlock</h4>
                    </div>
                    <img
                      src='img/portfolio/sherlock1-small.png'
                      className='img-responsive'
                      alt='Sherlock'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/oogieboogie1-large.png'
                    title='Oogie & Boogie'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Oogie & Boogie</h4>
                    </div>
                    <img
                      src='img/portfolio/oogieboogie1-small.png'
                      className='img-responsive'
                      alt='Oogie & Boogie'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/toast2-large.png'
                    title='Toast'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Toast</h4>
                    </div>
                    <img
                      src='img/portfolio/toast2-small.png'
                      className='img-responsive'
                      alt='Toast'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/oogie2-large.png'
                    title='Oogie'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Oogie</h4>
                    </div>
                    <img
                      src='img/portfolio/oogie2-small.png'
                      className='img-responsive'
                      alt='Oogie'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/boogie2-large.png'
                    title='Boogie'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Boogie</h4>
                    </div>
                    <img
                      src='img/portfolio/boogie2-small.png'
                      className='img-responsive'
                      alt='Boogie'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/sherlock2-large.png'
                    title='Sherlock & Watson'
                    target='_blank'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sherlock & Watson</h4>
                    </div>
                    <img
                      src='img/portfolio/sherlock2-small.png'
                      className='img-responsive'
                      alt='Sherlock & Watson'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
