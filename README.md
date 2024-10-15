# Weather App

A simple weather application built using **React**, **Tailwind CSS**, and **TypeScript**. This app allows users to fetch and display weather information for different cities.

## Features

- Fetches current weather information for a city.
- Displays weather status, temperature, and weather condition.
- Responsive UI using Tailwind CSS.
- TypeScript support for type safety.

## Screenshot
![weatherApp](https://github.com/user-attachments/assets/0124031a-e50f-40d4-bd94-79786939cd01)

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **TypeScript**: For static typing and better development experience.

## Installation and Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Aryamanvashisht/AtmosReact.git
```

2. Navigate into the project directory:

```bash
cd weather-app
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:5173`.

## How to Use

1. Enter a city name in the input field.
2. Click the **Get** button to retrieve the current weather information for the city.
3. The weather details including temperature and condition (e.g., haze, clear, rain) will be displayed.

## Environment Variables

The app requires an API key for fetching weather data from a third-party service (like OpenWeatherMap). You should store this key in an `.env` file at the root of your project.

Create an `.env` file and add your API key:

```bash
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

## Commands

- `npm start`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run format`: Formats the code using Prettier.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
