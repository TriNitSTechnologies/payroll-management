import axios from "axios";


const COMPANY_URL = "https://trinitstechnologies.com/demo/api/v1/companies"
 export  async function getData(setData, setLoading) {
    const Url = COMPANY_URL;
    axios.get(Url).then(response => {
     
        setData(response.data);
        setLoading(false);
       

    }).catch((error) => {
        
    })

}

