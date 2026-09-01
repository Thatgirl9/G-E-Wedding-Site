import React from "react";
import { Link } from "react-router-dom";

const RegistrySection = () => {
  return (
    <section className="registry-section">
      <div className="registry-remarks">
        <div>
          <h2>
            For Our
            <br />
            <em>New Chapter.</em>
          </h2>
        </div>

        <div className="registry-copy">
          <p>
            Your presence is the best gift we could receive. However, if you
            wish to contribute to our new life together, you can do so via bank
            transfer or visiting our registry.
          </p>

          <div className="registry-account-mobile">
            <div className="account-details-container">
              <p className="eyebrow">BANK DETAILS</p>

              <div className="account-details">
                <p>
                  <span className="account-label">Account Name: </span>
                  <span className="account-value">Glory Ukonu</span>
                </p>
                <p>
                  <span className="account-label">Account Number: </span>
                  <span className="account-value">2150295732</span>
                </p>
                <p>
                  <span className="account-label">Bank Name: </span>
                  <span className="account-value">Zenith Bank</span>
                </p>
              </div>

              <p className="eyebrow">OR</p>

              <div className="account-details">
                <p>
                  <span className="account-label">Account Name: </span>
                  <span className="account-value">Eseoghene Palmer</span>
                </p>
                <p>
                  <span className="account-label">Account Number: </span>
                  <span className="account-value">8085505004</span>
                </p>
                <p>
                  <span className="account-label">Bank Name: </span>
                  <span className="account-value">Opay</span>
                </p>
              </div>

              <p className="small-note">
                {" "}
                Thank you for your love and generosity
              </p>
            </div>
          </div>

        <div className="button-mobile">
          <Link to="/gift" className="button">
            Visit our gift page
          </Link>
        </div>
          
        </div>
      </div>
      <div className="registry-account">
        <div className="account-details-container">
          <p className="eyebrow">BANK DETAILS</p>

          <div className="account-details">
            <p>
              <span className="account-label">Account Name: </span>
              <span className="account-value">Glory Ukonu</span>
            </p>
            <p>
              <span className="account-label">Account Number: </span>
              <span className="account-value">2150295732</span>
            </p>
            <p>
              <span className="account-label">Bank Name: </span>
              <span className="account-value">Zenith Bank</span>
            </p>
          </div>

          <p className="eyebrow">OR</p>

          <div className="account-details">
            <p>
              <span className="account-label">Account Name: </span>
              <span className="account-value">Eseoghene Palmer</span>
            </p>
            <p>
              <span className="account-label">Account Number: </span>
              <span className="account-value">8085505004</span>
            </p>
            <p>
              <span className="account-label">Bank Name: </span>
              <span className="account-value">Opay</span>
            </p>
          </div>

          <p className="small-note-p">
            {" "}
            Thank you for your love and generosity
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrySection;
