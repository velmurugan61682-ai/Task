

const Traffic = () => {
    const color="green"
    
    return (
    <div>
        {color==="red"?<p style={{backgroundColor:"red",width:"30px",margin:"10px",padding:"10px"}}>slow</p>:color==="yellow"?<p style={{backgroundColor:"yellow",width:"30px",margin:"10px",padding:"10px"}}>ready</p>:color==="green"?<p style={{backgroundColor:"green",width:"30px",margin:"10px",padding:"10px"}}>go</p>:""}  
    </div>
  )
}

export default Traffic