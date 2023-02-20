import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AllWebsites from "./Components/Website/allWebsites";
import WebsitePage from "./Components/Website/WebsitePage";

function App() {
  Aos.init()
  return (
    <div className="App">
      <>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/mamun" element={<Home></Home>} />
          <Route path="/website/" element={<AllWebsites></AllWebsites>} />
          <Route path="/website/:id" element={<WebsitePage></WebsitePage>} />
        </Routes>
      </>
    </div>
    /*
    {
  
    "name":"HTML5",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
    
  

},
  {  "name":"CSS3",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
   

},
  {  "name":"Javascript",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
    
  

},
  {  "name":"Bootstrap",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
   
  

},
  {  "name":"Tailwind CSS",
    
  "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
    
  

},
  {  "name":"MongoDB",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
    
  

},
  {  "name":"React JS, React router",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
   
  

},
  {  "name":"Firebase",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png"
    
  

},
  {  "name":"Github",
    "img":"https://cdn-icons-png.flaticon.com/512/25/25231.png"
    
  

},
  {  "name":"Netlify",
    "img":"https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png"
    

},
   { "name":"Render",
    "img":"https://d25hn4jiqx5f7l.cloudfront.net/companies/logos/medium/render_1563926046.png?1563926046"
   
}
    */

      );
}

export default App;
