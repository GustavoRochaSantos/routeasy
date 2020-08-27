import axios from 'axios';

const apikey = 'AIzaSyB_SqOZ55viSANyGtvM_SRxzFvl6EEdbKU';

interface Params {
  endereco: string;
}

// class GeoLocationGoogle {
//   public async execute({ endereco }: Params) {
//     const parsedEndereco = endereco.replace(' ', '+');
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${parsedEndereco}&key=${apikey}`;

//     const response = await axios.get(url);
//     console.log(response);
//     if (response.status === 'OK') {
//       const { lat, lng } = response.results.geometry.location;
//     } else {
//       return {};
//     }
//   }
// }

// export default GeoLocationGoogle;
