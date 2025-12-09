const Resume =()=>{
    const resume=[{data:{name:"P.VELMURUGAN",role:"Frontend developer",summary:
        "I am a passionate frontend developer skilled in React, JavaScript, and modern UI development.",
        image:"src/assets/WhatsApp Image 2025-12-09 at 17.41.54_eed1b26a.jpg"},
        skills: ["React", "JavaScript", "HTML", "CSS", "Git", "Tailwind"],
      experience: [
        {
          company: "ABC Tech",
          position: "Frontend Developer ",
          year: "2025",
          details: "Worked on UI components using React & Tailwind.",
        },
      ],education: [
        {
          course: "B.Sc Information Technology",
          college: "Bharath University",
          year: "2025",
        },
      ],
      }]

    return(<>
    <div style={{backgroundColor:"black",color:"white",padding:"20px",margin:"20px", textAlign:"center"}}>
      {resume.map((e,i)=>(
        <div>
        <h1 key={i}>{e.section}</h1>
        <img src={e.data.image} alt="picture" style={{ width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginTop: "10px",
                objectFit: "cover",
                border: "2px solid white"}} />
        <h1>{e.data.name} </h1>
        <h1>{e.data.role}</h1>
        <p>{e.data.summary}</p>
        <h1>{e.data.name}</h1>
            <h3>{e.data.role}</h3>
            <p style={{ width:"60%",margin:"auto"}}>{e.data.summary}</p>

          <hr style={{ margin:"20px",borderColor:"gray"}}/>
            <h2>Skills</h2>
            <ul style={{ listStyle:"none",padding:0}}>
              {e.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
             <hr style={{margin:"20px",borderColor:"gray"}}/>
             <h2>Experience</h2>
            {e.experience.map((exp, idx) => (
              <div key={idx}>
                <h3>{exp.company}</h3>
                <p>
                  {exp.position} - {exp.year}
                </p>
                <p>{exp.details}</p>
              </div>
            ))}
            <hr style={{margin:"20px",borderColor:"gray"}}/>
            <h2>Education</h2>
            {e.education.map((edu, idx) => (
              <div key={idx}>
                <h3>{edu.course}</h3>
                <p>{edu.college}</p>
                <p>{edu.year}</p>
              </div> ))}
               </div>
        
      ))}
    </div>



    </>)
}
export default Resume;