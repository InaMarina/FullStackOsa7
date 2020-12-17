import { useState, useEffect } from "react";
import axios from "axios";

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;

  useEffect(() => {
    const getCountry = async () => {
      try {
        if (name) {
          const response = await axios(url);

          if (response) {
            console.log(response);
            const data = response.data[0];
            const found = true;
            setCountry({ data, found });
          }
        }
      } catch (error) {
        console.error(error);
        const data = null;
        const found = false;
        setCountry({ data, found });
      }
    };

    getCountry();
  }, [name, url]);
  return country;
};
