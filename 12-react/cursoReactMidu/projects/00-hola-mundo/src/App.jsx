import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

//cuando ponemos clases es siemore con clasName
export function App(){
    //const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@midudev</span>

    const ismaeelrg = {img: 'https://avatars.githubusercontent.com/u/159941470?v=4', userName: 'ide-la-r'}
    const justmanuva = {img: 'https://avatars.githubusercontent.com/u/168720630?v=4', userName: 'justmanuva'}

    return (
        //Esto es lo mismo que el React.fragment
        <div className="App">
            <TwitterFollowCard {...ismaeelrg}>
                Ismael de la rosa
            </TwitterFollowCard>
            <TwitterFollowCard {...justmanuva}>
                Manuel vidal
            </TwitterFollowCard>
            <TwitterFollowCard 
                //formattedUserName={formattedUserName} 
                img="https://avatars.githubusercontent.com/u/168720357?v=4" 
                userName="Sergio8spider" 
                //name="Sergio Alvarez" 
                
            >
                Sergio Alvarez
            </TwitterFollowCard>
        </div>
    )
} 