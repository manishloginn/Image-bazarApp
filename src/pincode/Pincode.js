import { useEffect, useState } from "react";
import "./style.css";

const Pincode = () => {
    const [data, setData] = useState(null);
    const [inputvalue, setPincodeInput] = useState("");
    const [selectedItem, setselectedItem] = useState(null)

    useEffect(() => {
        if (!inputvalue) return; 

        fetch(`https://api.postalpincode.in/pincode/${inputvalue}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data && data[0] && data[0].PostOffice) {
                    setData(data[0].PostOffice);
                } else {
                    setData([]);
                }
            })
            .catch((err) => {
                console.log(err);
                setData([]);
            });
    }, [inputvalue]);

    const handleInputChange = (e) => {
        setPincodeInput(e.target.value);
    };

    const haldelINdexClick = (index) => {
        setselectedItem(index)
    }


    return (
        <>
            <div className="pincode-container">
                <input
                    className="pincode-input"
                    placeholder="Enter postal code"
                    value={inputvalue}
                    onChange={handleInputChange}
                />
                <h1 className="pincode-title">Pincode data</h1>
                <div className="below">
                    {data === null ? (
                        <p>Enter a valid postal code</p>
                    ) : data.length ? (
                        <div className="table-container">
                            <table className="tabledata">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Index</th>
                                        {/* <th>Postal Code</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index} onClick={() => haldelINdexClick(index)} className={selectedItem === index ? 'selected' : ''}>
                                            <td>{item.Name}</td>
                                            <td>{index}</td>
                                            {/* <td>{item.Pincode}</td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="message">No data found for the provided postal code.</p>
                    )}
                </div>
            </div>
            {
                selectedItem !== null && data[selectedItem] && (
                    <div className="table-containerr">
                        <table className="tabledata">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Block</th>
                                    <th>District</th>
                                    <th>DeliveryStatus</th>
                                    <th>Division</th>
                                    <th>Postal Code</th>
                                    <th>Region</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data[selectedItem].Name}</td>
                                    <td>{data[selectedItem].Block}</td>
                                    <td>{data[selectedItem].District}</td>
                                    <td>{data[selectedItem].DeliveryStatus}</td>
                                    <td>{data[selectedItem].Division}</td>
                                    <td>{data[selectedItem].Pincode}</td>
                                    <td>{data[selectedItem].Region}</td>
                                    <td>{data[selectedItem].Country}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                )
            }

        </>
    );
};

export default Pincode;
