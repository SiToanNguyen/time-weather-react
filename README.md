# World Time & Weather React Demo

A small React project that displays the current time, date, and weather for cities around the world. This project is designed as a learning tool for React beginners and demonstrates API integration, state management, and dynamic content rendering.

---

## Deployment on GitHub Pages
>[https://sitoannguyen.github.io/time-weather-react/](https://sitoannguyen.github.io/time-weather-react/)

---

## Features

- **Current Time & Date**: Each card shows the local time and date of a city.
- **Weather Information**: Displays temperature, weather conditions, humidity, and wind speed using the [OpenWeatherMap API](https://openweathermap.org/api).
- **Localized Country Names**: Country names are automatically translated based on the selected language using the
  [i18n-iso-countries](https://www.npmjs.com/package/i18n-iso-countries) library, which provides ISO 3166-1 country
  name translations without hardcoding.
- **Random Background Image**: Uses [Picsum](https://picsum.photos/) to display a different random background image each time the website is loaded.
- **Theme Colors**: Each card can have different Bootstrap-themed colors with semi-transparent backgrounds.
- **Responsive Layout**: Uses Bootstrap grid system to adapt to different screen sizes.
- **Language Support**: Switch between English, German, and Vietnamese.

---

## Advantages of Using React in This Project

- **Dynamic State Management**: Time, language selection, and weather data update in real time without reloading the page.
- **Declarative UI**: The interface automatically re-renders when state or props change, reducing manual DOM manipulation.
- **Clean API Integration**: React’s component model makes it easy to isolate external API logic and keep the UI predictable.

---

### Why These APIs?

- **OpenWeatherMap**  
  Chosen for its reliable global coverage, simple REST interface, and built-in localization of weather descriptions. It allows weather data to be fetched per city with minimal configuration while supporting multiple languages.

- **i18n-iso-countries**  
  Used to translate country names based on ISO 3166-1 codes without hardcoding translations. This keeps the project lightweight, avoids maintaining large translation tables, and cleanly separates geographic data from UI text.

- **Picsum Photos**  
  Provides an effortless way to add visual variety with random images, without authentication or complex configuration, making it ideal for demos and learning projects.

---

## Contributing

This project is for viewing only.  
If you'd like to make changes, feel free to clone the repository and modify it as you wish.

---

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.  
You are free to use, share, and modify the code, but **not for commercial purposes**.  
See the [LICENSE](LICENSE) file for more details.
