function ProfileCard({title,handle,image, description}){
    return(
        <div className='card'>
            <div className='card-image'>
                <figure class="image is-4">
                    <img src={image} alt="pda logo"/>
                </figure>
            </div>
            <div className="media-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
            <div className="content">{description}</div>
        </div>
    </div>
    );
}

export default ProfileCard;