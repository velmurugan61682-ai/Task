

const Movies = () => {
    const story=false
    const location="chennai"
    
  return (
    <div>
        {story?<p>💔 
            If he doesn’t love her
        If he doesn’t love her, his heart feels quiet and empty around her. 
        He doesn’t wait for her messages, he doesn’t miss her voice, and her presence doesn’
        t change anything in his day. He speaks normally, without excitement or nervousness,
         and he doesn’t think about her when she leaves. Even the places they meet feel ordinary, because no feelings are attached. For him, life moves the same with or without her, 
showing clearly that love was never there<br/> location:{location}.</p>:<p>Loving someone feels warm and peaceful, 
            like carrying a small light inside your heart. When he loves someone, 
            he becomes softer, more caring, and notices even the smallest things about her. 
            He waits for her messages, smiles for no reason, and thinks about her even during busy moments. 
            His day feels complete when he sees her happy,
            and even simple places become special just because she was there in his thoughts<br/>location:{location}</p>}


    </div>
  )
}

export default Movies