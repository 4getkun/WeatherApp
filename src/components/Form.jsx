
// https://api.weatherapi.com/v1/current.json?key=dec1f80e9c2c41ff81e102253240904&q=London&aqi=no
const Form = (props) => {

  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={e=>props.setCity(e.target.value)} />
      
      <button type="submit" onClick={props.getWeather}>Get Weather</button>
    </form>
  );
};

export default Form;
