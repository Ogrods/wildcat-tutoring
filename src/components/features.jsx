export const Features = (props) => {
  return (
    <div id='subjects' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Subjects</h2>
          <p>We pride ourselves on our flexibility for every learner's needs. Between the difficulties of distance learning, virtual schooling, or multiple students on different schedules in the same space, Wildcat Tutors specialize in maximizing your learning through virtual tutoring. 
</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p className="subject">{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
