import React, { useState } from "react";
import "./../css/Home.css";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  document.title = "weeink - link shortener";
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resultstate, setResultState] = useState("hide");
  const isMobile = window.matchMedia("(max-width: 768px)");
  const [code, setCode] = useState({
    short_link: "",
    short_link2: "",
    short_link3: "",
    share_link: "",
    full_share_link: "",
    full_short_link: "",
    full_short_link2: "",
    full_short_link3: "",
  });

  const handleURL = (fieldname, value) => {
    if (fieldname === "url") {
      setUrl(value);
    }
  };

  const shortenURL = async (e) => {
    e.preventDefault();
    if (url !== "") {
      setIsLoading(true); // loading now
      axios.get(process.env.REACT_APP_VERCEL_URL + url)
      .then((res) => {
        let data = res.data
        setIsLoading(false);
        setResult(data);
      })
      .catch((err) => {
        toast.error("Error occured " + err, {
          position: isMobile ? "top-right" : "bottom-right",
        });
        setIsLoading(false);
      });
    } else {
      toast.info("Please enter url to shorten", {
        position: isMobile ? "top-right" : "bottom-right",
      });
    }
  };

  const setResult = (data) => {
    if (data != null) {
      setResultState("show");
      setCode({
        short_link: data.result.short_link,
        short_link2: data.result.short_link2,
        short_link3: data.result.short_link3,
        share_link: data.result.share_link,
        full_share_link: data.result.full_share_link,
        full_short_link: data.result.full_short_link,
        full_short_link2: data.result.full_short_link2,
        full_short_link3: data.result.full_short_link3,
      });
    }
  };

  const resetEverything = () => {
    if (url !== null) {
      setUrl("");
    }
    if (url !== null && code !== null) {
      setUrl("");
      setResultState("hide");
      setCode({
        short_link: "",
        short_link2: "",
        short_link3: "",
        share_link: "",
        full_share_link: "",
        full_short_link: "",
        full_short_link2: "",
        full_short_link3: "",
      });
    }
  };

  const copyText = (entryText) => {
    let txt = String(entryText);
    try {
      if (txt !== "") {
        navigator.clipboard.writeText(txt);
        toast.success("Copied to clipboard 📋", {
          position: isMobile ? "top-right" : "bottom-right",
        });
      }
    } catch (error) {
      toast.info("Browser unsupported,copy-paste url manually", {
        position: isMobile ? "top-right" : "bottom-right",
      });
    }
  };

  return (
    <div className="container shrinkurl">
      <div className="row elem justify-content-center">
        <div className="col-sm-6">
          <div className="d-flex justify-content-center">
            <p
              className="brand"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Powered by ShrtCo.de"
            >
              😉weeink
            </p>
          </div>
          <form>
            <div className="me-5 ms-5">
              <input
                type="text"
                className="form-control rounded-pill"
                name="url"
                aria-describedby="urlHelp"
                placeholder="Enter long url to shorten.."
                value={url || ""}
                onChange={(e) => {
                  handleURL("url", e.target.value);
                }}
              />
            </div>
            <div className="mt-3 mb-3 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-info shortenbtn"
                onClick={(e) => {
                  shortenURL(e);
                }}
                disabled={isLoading}
              >
                🤏 shorten
              </button>
              <button
                type="button"
                className="btn btn-danger mx-3 resetbtn"
                onClick={() => resetEverything()}
              >
                <i className="bi bi-backspace"></i> clear
              </button>
            </div>
          </form>
        </div>
        <div className="row result">
          {isLoading && (
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {resultstate !== "hide" ? (
            <div className="col-sm-10 pt-3 pb-3 result-items">
              <h6>Here's your wee-inked url:</h6>
              <div className="mt-4 mb-2">
                <label htmlFor="typ1">Short Link #1</label>
                <input
                  type="text"
                  className="res-val-input"
                  name="typ1"
                  value={code.short_link || ""}
                  readOnly
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Short link"
                />
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    copyText(code.short_link);
                  }}
                >
                  📋
                </button>
              </div>
              <div className="mt-2 mb-2">
                <label htmlFor="typ2">Short Link #2</label>
                <input
                  type="text"
                  className="res-val-input"
                  name="typ2"
                  value={code.short_link2 || ""}
                  readOnly
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Short link #2"
                />
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    copyText(code.short_link2);
                  }}
                >
                  📋
                </button>
              </div>
              <div className="mt-2 mb-2">
                <label htmlFor="typ3">Short Link #3</label>
                <input
                  type="text"
                  className="res-val-input"
                  name="typ3"
                  value={code.short_link3 || ""}
                  readOnly
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Short link #3"
                />
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    copyText(code.short_link3);
                  }}
                >
                  📋
                </button>
              </div>
              <div className="mt-2 mb-2">
                <label htmlFor="typ6">Short Link #4</label>
                <input
                  type="text"
                  className="res-val-input"
                  name="typ6"
                  value={code.full_short_link || ""}
                  readOnly
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Full short link"
                />
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    copyText(code.full_short_link);
                  }}
                >
                  📋
                </button>
              </div>
              <div className="mt-2 mb-2">
                <label htmlFor="typ7">Short Link #5</label>
                <input
                  type="text"
                  className="res-val-input"
                  name="typ7"
                  value={code.full_short_link2 || ""}
                  readOnly
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Full short link #2"
                />
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    copyText(code.full_short_link2);
                  }}
                >
                  📋
                </button>
              </div>
              <div className="mt-2 mb-2">
                <label htmlFor="typ8">Short Link #6</label>
                <input
                  type="text"
                  className="res-val-input"
                  name="typ8"
                  value={code.full_short_link3 || ""}
                  readOnly
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Full short link #3"
                />
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    copyText(code.full_short_link3);
                  }}
                >
                  📋
                </button>
              </div>
              <div className="mt-2 mb-2">
                <label htmlFor="typ4">Share Link #1</label>
                <input
                  type="text"
                  className="res-val-input"
                  name="typ4"
                  value={code.share_link || ""}
                  readOnly
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Share link"
                />
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    copyText(code.share_link);
                  }}
                >
                  📋
                </button>
              </div>
              <div className="mt-2 mb-2">
                <label htmlFor="typ5">Share Link #2</label>
                <input
                  type="text"
                  className="res-val-input"
                  name="typ5"
                  value={code.full_share_link || ""}
                  readOnly
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Full share link"
                />
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    copyText(code.full_share_link);
                  }}
                >
                  📋
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
