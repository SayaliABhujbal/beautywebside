export default function Signin() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center border"
        style={{ height: "100vh" }}
      >
        <div className="container border rounded p-4 shadow" style={{ maxWidth: "400px" }}>
          <h3 className="text-center mb-4">Welcome Back</h3>

          <div className="mb-3">
            <label className="form-label">Example label</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleinput"
              placeholder="Example input placeholder"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Another label</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleinput2"
              placeholder="Another input placeholder"
            />
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-warning">Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
}
