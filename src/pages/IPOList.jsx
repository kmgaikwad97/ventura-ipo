import { useNavigate } from "react-router-dom";
import { ipoData } from "../data/ipoData";
import "./IPOList.css";

const IPOList = () => {
  const navigate = useNavigate();

  return (
    <div className="ipo-list-container">
      <h2 className="page-title">IPO List</h2>

      <div className="table-wrapper">
        <table className="ipo-table">
          <thead>
            <tr>
              <th>Company/ Issue date</th>
              <th>Issue size</th>
              <th>Price Range</th>
              <th>Min invest/qty</th>
            </tr>
          </thead>

          <tbody>
            {ipoData.map((ipo) => (
              <tr
                tabIndex={0}
                role="button"
                key={ipo.id}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigate(`/ipo/${ipo.id}`)
                }
                className="table-row"
                onClick={() => navigate(`/ipo/${ipo.id}`)}
              >
                <td data-label="Company / Issue date">
                  <div className="company-cell">
                    <img
                      src={ipo.logo}
                      alt={ipo.name}
                      className="company-logo"
                    />

                    <div>
                      <div className="company-name">{ipo.name}</div>
                      <div className="sub-text">{ipo.issueDates}</div>
                    </div>
                  </div>
                </td>

                <td data-label="Issue Size">{ipo.issueSize}</td>

                <td data-label="Price Range">{ipo.priceRange}</td>

                <td data-label="Min Invest / Qty">
                  <div className="company-name">{ipo.minInvestment}</div>
                  <div className="sub-text">{ipo.lotSize}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPOList;
