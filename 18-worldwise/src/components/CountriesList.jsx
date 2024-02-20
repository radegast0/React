import styles from './CountriesList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';

const CountriesList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message='Add your first city by clicking on the map' />;

  const countries = cities.reduce((arr, city) => {
    const existingCountry = arr.find(
      (el) => el.country === city.country && el.emoji === city.emoji
    );
    if (!existingCountry) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
};

export default CountriesList;
