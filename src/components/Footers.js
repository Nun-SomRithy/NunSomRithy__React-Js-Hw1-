import React from 'react'



export default function Footers() {
  return (
    <>
  <footer className=" bg-danger page-footer font-small blue pt-4 text-light">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Click</h5>
                <ul className="list-unstyled text-text-decoration-none">
                    <li>contact</li>
                    <li>Other</li>
                    <li>Next</li>
                    <li>Back</li>

                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Click</h5>
                <ul className="list-unstyled">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Feedback</li>
                    <li>About us</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
       
    </div>

</footer>
    </>
  )
}
