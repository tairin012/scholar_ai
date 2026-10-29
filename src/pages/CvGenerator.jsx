export default function CvGenerator() {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form_fillUp">
          <div className="personal_information">
            <h3 className="heading">
              Personal Information Section
            </h3>
            <div className="field">
              <label htmlFor="name">
                Name
              </label>
              {' '}
              <input type="text" id="name" className="input" />
            </div>
            <div className="field">
              <label htmlFor="email">
                E-mail
              </label>
              {' '}
              <input type="email" id="email" className="input" />
            </div>
            <div className="field">
              <label htmlFor="phone">
                Phone
              </label>
              {' '}
              <input type="text" id="phone" className="input" />
            </div>
            <div className="field">
              <label htmlFor="address">
                Address
              </label>
              {' '}
              <input type="text" id="address" className="input" />
            </div>
          </div>
          <div className="personal_information">
            <h3 className="heading">
              Personal Summary
            </h3>
            <textarea rows="12" cols="38" />
          </div>
          <div className="personal_information">
            <h3 className="heading">
              Skills and Additional Section
            </h3>
            <textarea rows="12" cols="38" />
          </div>
        </div>
        <div className="personal_information2">
          <h3 className="heading">
            Skills and Additional Section
          </h3>
          <textarea rows="12" cols="130" />
        </div>
        <button className="btn2">
          Preview
        </button>
        {' '}
        <button className="btn">
          Click here to get your CV
        </button>
      </form>
    </>
  );
}
