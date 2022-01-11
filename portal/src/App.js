import ReactMarkdown from 'react-markdown'
import './style.css'

function App() {
  const md = `
  
  ###### Creating pages
  
  You can generate directories by creating a screens/pages folder in the root directory. Components can also be created and the app can be simply extended in the same way we do in case of a CRA app. There are no constraint to possibilities.
  
  --- 
  
  You can edit the attributes according to html. The icon can be manually replaced as well. The styling (style.css in  / css) can be manually changed according to need as can be changed the font (in  / build_scripts).
  
  The pages are generated in the build directory on root after you run npm run build which you can use to deploy your site.

  --- 

  ###### Dependencies
  - react-dom
  - bootstrap
  - react-bootstrap
  - sass
  
  `
  return (
    <div className="App body">
      <h1 className="name">scriptag <hr /> </h1>
      <p className='content'>Installation:</p>
      <img src="https://telegra.ph/file/8606b84df6389087be656.png" alt="" /><br /><br />
      <p className='content'> <br /> <br /> <br />
        <ReactMarkdown children={md} />
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><footer className="footer">
        <a href="https://github.com/sambhavsaxena/scriptag" target={"_blank"} rel='noreferrer' className='link'>Visit official repository</a>
      </footer></div> <br />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><footer className="footer">
        <a href="https://github.com/sambhavsaxena/scriptag" target={'_blank'} rel='noreferrer'><img src="https://img.shields.io/github/license/sambhav2612/staticgen.svg" alt="" /></a>
      </footer></div> <br /><br />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><footer className="footer">
        With love, <a href="https://github.com/sambhavsaxena" target={"_blank"} rel='noreferrer' className='link'>Sambhav Saxena</a>
      </footer></div> <br />
    </div>
  );
}

export default App;
