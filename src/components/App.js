import "./App.css";
import { BUTTON_DATA, BLOG_DATA } from "./data";

function App() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-col">
          <div className="col-title">Studio</div>
          {BUTTON_DATA.studio.map((name) => {
            return <button className="footer-btn">{name}</button>;
          })}
        </div>
        <div className="footer-col">
          <div className="col-title">Company</div>
          {BUTTON_DATA.company.map((name) => {
            return <button className="footer-btn">{name}</button>;
          })}
        </div>
        <div className="footer-col">
          <div className="col-title">From The Blog</div>
          <div className="card-wrap">
            {BLOG_DATA.map((blog) => {
              return (
                <div className="footer-card" key={blog.title}>
                  <div className="footer-card-text">
                    <h4>{blog.title}</h4>
                    <span>by {blog.by}</span>
                  </div>
                  <div className="footer-card-image">
                    <img src={blog.imgsrc} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
