import React, { useState, useEffect } from "react";

const WEATHER_TTL_MS = 10 * 60 * 1000;

export default function ClockCard({ id, name, tz, country, theme, lang, texts }) {
  const [now, setNow] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [error, setError] = useState(null);

  // Fallback texts if undefined
  const t = texts || {
    loading: "Loading weather…",
    error: "Weather error",
    humidity: "Humidity",
    wind: "wind",
    celsius: "°C",
  };

  // Clock tick
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  function formatTime(date) {
    return new Intl.DateTimeFormat(lang || "en", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: tz
    }).format(date);
  }

  function formatDateShort(date) {
    return new Intl.DateTimeFormat(lang || "en", {
      day: "2-digit", month: "short",
      timeZone: tz
    }).format(date);
  }

  // Fetch weather
  useEffect(() => {
    let aborted = false;
    const cacheKey = `weather_${id}_${lang}`;
    const cached = sessionStorage.getItem(cacheKey);

    async function fetchWeather() {
      setLoadingWeather(true);
      setError(null);

      const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
      if (!apiKey) {
        setError("No API key configured");
        setLoadingWeather(false);
        return;
      }

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          name
        )}&appid=${apiKey}&units=metric&lang=${lang || "en"}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (aborted) return;
        const payload = { ts: Date.now(), data };
        sessionStorage.setItem(cacheKey, JSON.stringify(payload));
        setWeather(data);
      } catch (err) {
        if (!aborted) setError(err.message || t.error);
      } finally {
        if (!aborted) setLoadingWeather(false);
      }
    }

    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.ts < WEATHER_TTL_MS) {
          setWeather(parsed.data);
        } else {
          fetchWeather();
        }
      } catch {
        fetchWeather();
      }
    } else {
      fetchWeather();
    }

    const interval = setInterval(fetchWeather, WEATHER_TTL_MS);
    return () => {
      aborted = true;
      clearInterval(interval);
    };
  }, [id, name, tz, lang, t.error]);

  return (
    <div className={`card text-white ${theme} bg-opacity-75 shadow-sm h-100`}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{country}</p>
        <p className="card-text display-6">{formatTime(now)}</p>
        <p className="card-text">{formatDateShort(now)}</p>

        <div className="weather mt-2">
          {loadingWeather && <div className="small">{t.loading}</div>}
          {error && <div className="small">{t.error}: {error}</div>}
          {weather && (
            <div className="d-flex align-items-center">
              <img
                alt={weather.weather?.[0]?.description || 'weather'}
                src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon || '01d'}@2x.png`}
                width="48"
                height="48"
              />
              <div className="ms-2">
                <div>
                  {Math.round(weather.main.temp)}{t.celsius} — {weather.weather?.[0]?.description}
                </div>
                <div className="small">
                  {t.humidity} {weather.main.humidity}% • {t.wind} {weather.wind.speed} m/s
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
