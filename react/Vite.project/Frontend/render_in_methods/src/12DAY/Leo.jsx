

const Leo = () => {
    const Movies=[{data:{image:"src/assets/Leo_(2023_Indian_film).jpg"},Director:{name:"Director:Lokesh Kanagaraj"},Actor:{ Name:"Actor: Joseph Vijay Chandrasekhar (known as Thalapathy Vijay"},
      Profession:{Actor:"Indian Actor, Playback Singer, Producer", Industry: "Tamil Cinema (Kollywood)",
        born:"Born: 22 June 1974",Birth:"Birthplace: Chennai, Tamil Nadu, India",Heroines:"Heroines:Trisha Krishnan"
      },Born: {born: "born:4 May 1983",

Profession:"Profession: Actress, Model",

Debut:"Debut: Mounam Pesiyadhe (2002)",

Industries:"Industries: Tamil & Telugu Cinema"
 } ,ReleaseDetails:{name:"leo Release",Release: "Release Date: 19 October 2023",languages:

"Languages Released: Tamil, Telugu, Hindi, Kannada, Malayalam",runtime:

"Runtime: 164 minutes",Genre:

"Genre: Action / Thriller"}}]
  return (
    <><div style={{background:"black",color:"white" ,textAlign:"center"}}>
    {Movies.map((e,i)=>(
        <>
    
        <img src={e.data.image} alt="picture" />
        <h2>{e.Director.name}</h2>
        <h1>{e.Actor.Name}</h1>
        <p>{e.Profession.Actor}</p>
        <p>{e.Profession.Industry}</p>
        <p>{e.Profession.born}</p>
        <p>{e.Profession.Birth}</p>
        <h1>{e.Profession.Heroines}</h1>
        <p>{e.Born.born}</p>
        <p>{e.Born.Profession}</p>
        <p>{e.Born.Debut}</p>
        <p>{e.Born.Industries}</p>
        <h1>{e.ReleaseDetails.name}</h1>
        <p>{e.ReleaseDetails.Release}</p>
        <p>{e.ReleaseDetails.languages}</p>
        <p>{e.ReleaseDetails.runtime}</p>
        <p>{e.ReleaseDetails.Genre}</p>
        
</>

    ))}
    </div>
    </>
  )
}

export default Leo