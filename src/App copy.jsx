import { useState } from "react";
import ClockCard from "./components/ClockCard";
import { CITIES } from "./data/cities";
import { TRANSLATIONS } from "./i18n";
import "./index.css";

const THEMES = [
  "bg-primary", "bg-success", "bg-danger", "bg-info", "bg-secondary", "bg-warning", "bg-dark"
];

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="py-3 shadow-sm bg-gradient fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="m-0 title-stroke">{TRANSLATIONS[lang].title}</h2>

          <select
            className="form-select"
            style={{ width: "150px" }}
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">🇺🇸 English</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="vi">🇻🇳 Tiếng Việt</option>
          </select>
        </div>
      </header>

      {/* Main content */}
      <main className="container" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
        <div className="row g-4 d-flex">
          {CITIES.map((city, index) => (
            <div key={city.id} className="col-sm-6 col-md-4 col-lg-3">
              <ClockCard
                id={city.id}
                name={city.name}
                tz={city.tz}
                country={city.country}
                theme={THEMES[index % THEMES.length]}
                lang={lang}
                texts={TRANSLATIONS[lang]}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 text-center bg-gradient shadow-sm fixed-bottom">
        <small className="title-stroke">
          © {new Date().getFullYear()} {TRANSLATIONS[lang].title} | React Demo
        </small>
      </footer>
    </div>
  );
}
