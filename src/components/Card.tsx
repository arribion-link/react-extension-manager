type CardProps = {
    imgUrl: string,
    extensionName: string,
    extensionDescription: string
}

const Card = ({imgUrl, extensionName, extensionDescription}:CardProps) => {
    return (
      <>
        <div className="extension-card">
                
            <div className="extension-card-header">
                <div>
                    <img src={imgUrl} alt={extensionName} />
                </div>
                <div>
                    <h2>{extensionName}</h2>
                    <p>{extensionDescription}</p>
                </div>
            </div>
            <div className="extension-footer">
                <button>Remove</button>
                <button>
                <span></span>
                </button>
            </div>
        </div>
      </>
    );
}

export default Card
