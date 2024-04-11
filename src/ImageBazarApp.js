
import ImageLIst from './component/ImageList';
import Pagination from './component/Pagination';
import Searchbar from './component/Searchbar'
import "./style/imagebazar.scss"
import data from "./component/data"
import { useEffect, useState } from 'react';
import axios from 'axios'; 


const ImageBazarApp = () => {


    const [pagenumber, setpagenumber] = useState(1)
    const [query, setquery] = useState('nature')
    const [data, setdata] = useState([])

    useEffect(() => {

        ( async  () => {
            try {
                const response = await axios({
                    url:`https://api.unsplash.com/search/photos`,
                    params : {
                        page: pagenumber, 
                        query, 
                        client_id: "zhwdy9BcFZgIp55KHH2nTzzX12Zexyl0s-r6-U5zEkM",
                    },
                })
                setdata(response.data); 
                console.log(response.data);
            } catch (error) {
                alert(error)
            }
        })();
    }, [pagenumber, query])


    
    return (
        <div className="container">
            <Searchbar setquery = {setquery} />
            <ImageLIst list = {data?.results} />
            <Pagination pagenumber ={pagenumber} setpagenumber={setpagenumber}/>


        </div>
        
    )
}


export default ImageBazarApp;