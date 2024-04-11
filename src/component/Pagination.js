const Pagination = ({pagenumber, setpagenumber}) => {
    return (
        <div className="pagination-box" >

            <button className="material-icons" 
            disabled={pagenumber===1} 
            onClick={() => {
                setpagenumber(prev => prev - 1)
            }} 
            > chevron_left</button>
            <p>{pagenumber}</p>
            <button className="material-icons" 
            onClick={() => {setpagenumber(prev => prev+1)}}
            > chevron_right</button>

        </div>

    )
}

export default Pagination;