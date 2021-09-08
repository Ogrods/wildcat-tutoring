export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          We pride ourselves on our flexibility for every learner's needs. Between the difficulties of distance learning, virtual schooling, or multiple students on different schedules in the same space, Wildcat Tutors specialize in maximizing learning through virtual tutoring. 

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
                  className='btn btn-custom btn-lg page-scroll'
                >leARN mORE</a>
      </div>
    </div>
  )
}
