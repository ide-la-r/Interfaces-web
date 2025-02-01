import { useState } from "react"

//el igualar el userName es por si no te viene ninguno por parametro
export function TwitterFollowCard({img, userName = 'unknow', children}){
    const [isFollowing, setIsFollowing] = useState(false)
    
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={img} 
                alt="El avatar de Ismael" />
                <div className="tw-followCard-info">
                    {/*children es una propiedad comun que se usa siempre que quieras acceder a los hijos, puede haber cualquier cosa, en este caso el name*/}
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}

//children es una propiedad comun que se usa siempre que quieras acceder a los hijos, puede haber cualquier cosa, en este caso el name