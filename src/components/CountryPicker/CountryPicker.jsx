import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';


const CountryPicker=({handleCountryChange})=> {

  const[fetchedCountries,setfetchedCountries] = useState([]);

  useEffect(()=>{
    const fetchedApi = async ()=>{
      setfetchedCountries( await fetchCountries());
    }
    fetchedApi();

  },[setfetchedCountries]);

  return (
    <FormControl className={styles.formcontrol}>
      <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        
        <option value="global">
          Global
        </option>
        
        {fetchedCountries.map((country, i)=><option key={i} value={country}>  {country}
        </option>)}

      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;