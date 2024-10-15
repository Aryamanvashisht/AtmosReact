import { useEffect, useState } from "react";

type TWeather = {
  name: string;
  main: {
    temp: number;
  };
  weather: [{ main: string }];
  message?: string;
};

function App() {
  let [city, setCity] = useState<string>("Pathankot");
  const [weatherData, setWeatherData] = useState<TWeather | null>(null);
  const [error, setError] = useState<string | null>(null);

  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }&units=metrics`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
      // setError((error as Error).message)
      setError(weatherData?.message ?? null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputElement = form.querySelector("input") as HTMLInputElement;
    if (inputElement.value) fetchData();
    inputElement.value = "";
  };

  const getWeatherIconUrl = (value: string) => {
    switch (value) {
      case "Clouds":
        return "public/thunder.png";
      case "Rain":
        return "public/rain_with_cloud.png";
      case "Mist":
        return "public/Tornado.png";
      case "Haze":
        return "public/sun.png";
      default:
        return "public/sun.png";
    }
  };

  return (
    <div className="overflow-y-auto">
      <h1 className="text-center justify-center text-5xl text-yellow-300 shadow-md w-fit ml-[23%] rounded-xl mt-10 sm:ml-[41%] sm:mt-3">
        Weather
      </h1>
      <div className="text-2xl font-sans shadow-lg bg-blue-400 text-yellow-200 p-2 m-5 rounded-xl  sm:ml-[28%] sm:w-[40%] sm:text-2xl">
        {weatherData?.message !== "city not found" ? (
          <>
            <div className="justify-center text-center">
              <h1>{formattedDate}</h1>
            </div>
            <div className="justify-center text-center mt-2">
              <h2>{weatherData?.name}</h2>
            </div>
            <div>
              <img
                src={getWeatherIconUrl(
                  weatherData?.weather[0]?.main ?? "unknown"
                )}
                alt="thunder image"
                className="ml-15 -mt-14 sm:ml-[17%]"
              />
            </div>
            <div className="justify-center text-center -mt-12 ml-5">
              <h2>{((weatherData?.main.temp ?? 0) - 273.15).toFixed(2)}°</h2>
            </div>
            <div className="justify-center text-center mt-2 ml-3">
              <h2>{weatherData?.weather[0].main}</h2>
            </div>
            <div className="">
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full mt-2 rounded-xl text-center h-10 text-black"
                  type="text"
                  placeholder="Enter the city name"
                  onChange={(e) => setCity(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-zinc-950 rounded-xl p-1 w-full mt-5 cursor-pointer h-10 text-white pl-2"
                >
                  Get
                </button>
              </form>
            </div>
          </>
        ) : (
            <h1 className="text-white text-4xl mt-[50%] mb-[50%] font-semibold sm:text-4xl sm:mb-[30%] sm:mt-[30%] text-center justify-center">{error}City Not Found !</h1>
        )}
      </div>
    </div>
  );
}

export default App;
