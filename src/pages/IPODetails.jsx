import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ipoData } from "../data/ipoData";
import { fullText } from "../data/fullText";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import "./IPODetails.css";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";

const IPODetails = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const ipo = ipoData.find((item) => item.id === Number(id));

  if (!ipo) return <h2>IPO Not Found</h2>;

  const wordLimit = 30;
  const words = fullText.split(" ");
  const shouldTruncate = fullText.length > wordLimit;
  const displayedText = expanded
    ? fullText
    : words.slice(0, wordLimit).join(" ") + "...";
  return (
    <div className="company">
      <Navbar />

      <div className="company-details">
        {/* left */}
        <div className="company-left">
          <div className="back-comp-btn">
            <button
              className="back-btn"
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <IoChevronBackOutline />
            </button>
          </div>

          <div className="company-logo-wrap">
            <img className="company-logo" src={ipo.logo} alt={ipo.name} />
          </div>

          <div className="company-meta">
            <h2 className="company-title">{ipo.name}</h2>
            <p className="company-subtitle">{ipo.company}</p>
          </div>
        </div>

        {/* Right side: download + apply */}
        <div className="company-actions">
          <button
            className="download-btn"
            type="button"
            title="Download"
            onClick={() => console.log("Download clicked")}
            aria-label="Download"
          >
            <BsFileEarmarkArrowDown />
          </button>

          <button
            className="apply-btn"
            type="button"
            onClick={() => console.log("Apply clicked")}
          >
            Apply now
          </button>
        </div>
      </div>

      <div className="card-style">
        <h3>IPO Details</h3>

        <div className="ipo-details-box">
          <div className="ipo-details-grid">
            <div className="detail-item">
              <p className="detail-label">Issue Size</p>
              <p className="detail-value">{ipo.issueSize}</p>
            </div>

            <div className="detail-item">
              <p className="detail-label">Price Range</p>
              <p className="detail-value">{ipo.priceRange}</p>
            </div>

            <div className="detail-item">
              <p className="detail-label">Minimum Amount</p>
              <p className="detail-value">{ipo.minInvestment}</p>
            </div>

            <div className="detail-item">
              <p className="detail-label">Lot Size</p>
              <p className="detail-value">{ipo.lotSize}</p>
            </div>

            <div className="detail-item">
              <p className="detail-label">Issue Dates</p>
              <p className="detail-value">{ipo.issueDates}</p>
            </div>

            <div className="detail-item mobile-hide">
              <p className="detail-label">Listed On</p>
              <p className="detail-value">{ipo.listedOn}</p>
            </div>

            <div className="detail-item mobile-hide">
              <p className="detail-label">Listed Price</p>
              <p className="detail-value">{ipo.listedPrice}</p>
            </div>

            <div className="detail-item mobile-hide">
              <p className="detail-label">Listing Gains</p>
              <p className="detail-value">
                {ipo.listingGains}
                <span className="red-percent">
                  {" "}
                  ({ipo.listingGainsPercent})
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Timeline steps={ipo.timeline} />

      <div className="about">
        <h3>About the Company</h3>

        <p className="about-text">
          {displayedText}

          {shouldTruncate && (
            <span
              className="read-toggle"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? " Read less" : " Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default IPODetails;
