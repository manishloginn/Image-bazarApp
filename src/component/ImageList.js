import Customimage from "./CustomImage"

const ImageLIst = ({list}) => {

    if (!list) return <h1>Fetching......</h1>

    return (
        <section className="images-list">
            {
                list.map(item => {
                    return (
                        <div className="image-wraper">
                        < Customimage url={item.urls.regular} key={item.id}/>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ImageLIst;