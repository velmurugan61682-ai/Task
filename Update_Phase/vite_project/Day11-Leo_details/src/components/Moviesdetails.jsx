const Moviedetails = () => {
    
    
    return (<>
    <div style={{backgroundColor:"black", color:"white",textAlign:"center"}}>
     <img src=".\src\assets\Leo_(2023_Indian_film).jpg" alt="poster" />
     <h1>Movie name is : LEO</h1>
    <DirectorName/>
    <MovieStory/>
    <ActorName/>
    <Heroines/>
    <ReleaseDetails/>
    </div>
    
     
    </>)
}
export default Moviedetails

export const DirectorName =()=>{
    return(<>
   <h2> Director: Lokesh Kanagaraj </h2>
    </>)
}

export const MovieStory =()=>{
    return(<>
        <p>The plot centres on a character named Parthi (played by Vijay), who leads a seemingly peaceful life until gangsters accuse him of being “Leo” — a man presumed dead and associated with a violent past. This twist triggers conflict and chaos around him.</p>

        </>)

}
export const ActorName =()=>{
    return(<>
    <h1>Actor Name: Joseph Vijay Chandrasekhar (known as Thalapathy Vijay)</h1>
     <p> Profession: Indian Actor, Playback Singer, Producer
       Industry: Tamil Cinema (Kollywood)
       Born: 22 June 1974
Birthplace: Chennai, Tamil Nadu, India</p>
        </>)
}
export const Heroines=()=>{
    return(<>
    <h1>Trisha 

Full Name: Trisha Krishnan</h1>

<p>Born: 4 May 1983

Profession: Actress, Model

Debut: Mounam Pesiyadhe (2002)

Industries: Tamil & Telugu Cinema

Known for roles in 96, Vinnaithaandi Varuvaayaa, Ghilli, Varsham, a</p>
    </>)
}
export const ReleaseDetails=()=>{
    return(<><h1>Leo Release</h1>
    Release Date: 19 October 2023

Languages Released: Tamil, Telugu, Hindi, Kannada, Malayalam

Runtime: 164 minutes

Genre: Action / Thriller</>)
}