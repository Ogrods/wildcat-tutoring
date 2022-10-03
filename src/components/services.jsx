export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
              All sessions are online, recorded by the host, and hosted privately online for student access (Recorded sessions are hosted online for one year). Refer a new client and get a free one hour session!
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-6'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <h2>{d.price}</h2>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}

        </div>
        <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll services-btn-learn-more
                >leARN mORE</a>
      </div>
    </div>
  )
}
