export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>An education built for today's world.</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h4>Our tutors have worked with learners of all ages, including:</h4>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/cat2.png" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
