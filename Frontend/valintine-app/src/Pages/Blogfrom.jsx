import React from 'react'

const Blogfrom = () => {

 const handlesubmit=(e)=>{
  e.preventDefault();

  const authorheading=document.querySelector(".author-heading").value;

  const authordescription=document.querySelector(".author-description").value;

  const authorname=document.querySelector(".author-name").value;
  
  const authordate=document.querySelector(".author-date").value;

  const authorimage=document.querySelector(".author-image").value;
  
  const  blogimage=document.querySelector(".blog-image").value;
  
  const blogdescription=document.querySelector(".blog-description").value;
  
  const subimage1=document.querySelector(".sub-image-1").value;
  
  const subcontent1=document.querySelector(".sub-content-1").value;
  
  const subimage2=document.querySelector(".sub-image-2").value;
  
  const subcontent2=document.querySelector(".sub-content-2").value;

  const subimage3=document.querySelector(".sub-image-3").value;
  
  const subcontent3=document.querySelector(".sub-content-3").value;

  let obj={
    authorheading,authordescription,authorname,authordate,authorimage,
    blogimage, blogdescription,subimage1,subcontent1,subimage2,subcontent2,
    subimage3,subcontent3
  }
   
 }   

  

  return (
    <div>
    <form onSubmit={handlesubmit}>
    
<label>AUTHOR HEADING</label>
<input type="text" placeholder="Type author heading" className="author-heading"></input>

<label>AUTHOR DESCRIPTION</label>
<input type="text" placeholder="Type author description" className="author-description"></input>

<label>AUTHOR NAM</label>
<input type="text" placeholder="Type author name" className="author-name"></input>

<label>AUTHOR DATE</label>
<input type="text" placeholder="Type author date" className="author-date"></input>

<label>AUTHOR IMAGE</label>
<input type="text" className="author-image"></input>

<label>BLOG IMAGE</label>
<input type="text" className="blog-image"></input>

<label>BLOG DESCRIPTION</label>
<input type="" placeholder="Type blog description" className="blog-description"></input>

<label>SUB IMAGE 1</label>
<input type="" placeholder="Type sub image 1" className="sub-image-1"></input>

<label>SUB CONTENT 1</label>
<input type="" placeholder="Type sub content 1" className="sub-content-1"></input>

<label>SUB IMAGE 2</label>
<input type="text" className="sub-image-2"></input>

<label>SUB CONTENT 2</label>
<input type="" placeholder="Type sub content 2" className="sub-content-2"></input>

<label>SUB IMAGE 3</label>
<input type="text" className="sub-image-3"></input>

<label>SUB CONTENT 3</label>
<input type="text" placeholder="Type sub content 3" className="sub-content-3"></input>

<button type="submit">Submit</button>

    </form>
    </div>
  )
}

export default Blogfrom