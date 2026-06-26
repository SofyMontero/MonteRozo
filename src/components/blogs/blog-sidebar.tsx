import { NavLink } from "react-router-dom";
import blog_data from "../../data/blog-data";

const BlogSidebar = () => {
  const recent_blogs = blog_data.filter((b) => b.page === "home").slice(-2);
  return (
    <div className="blog-sidebar md-mt-60 ps-xxl-4">
      <form action="#" className="sidebar-search">
        <input type="text" placeholder="Buscar" />
        <button className="tran3s">
          <i className="bi bi-search"></i>
        </button>
      </form>
      <div className="blog-category mt-60 lg-mt-40">
        <h3 className="sidebar-title">Categorias</h3>
        <ul className="style-none">
          <li>
            <NavLink to="#">
              Factoring
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Consejos Financieros
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Educación Financiera
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Normativa
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Noticias
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="blog-recent-news mt-60 lg-mt-40">
        <h3 className="sidebar-title">Lo último</h3>
        {recent_blogs.map((b,i) => (
        <article key={i} className="recent-news">
          <figure
            className="post-img"
            style={{
              backgroundImage: `url(${b.img})`,
            }}
          ></figure>
          <div className="post-data">
            <div className="date">{b.date}</div>
            <NavLink to={`/blog-factoring/${b.id}`} className="blog-title">
              <h3>{b.title}</h3>
            </NavLink>
          </div>
        </article>
        ))}
      </div>

      <div className="blog-keyword mt-60 lg-mt-40">
        <h3 className="sidebar-title">Palabras Claves</h3>
        <ul className="style-none d-flex flex-wrap">
          <li>
            <NavLink to="#">Finanzas</NavLink>
          </li>
          <li>
            <NavLink to="#">Factoring</NavLink>
          </li>
          <li>
            <NavLink to="#">Confirming</NavLink>
          </li>
          <li>
            <NavLink to="#">Financiamiento</NavLink>
          </li>
          <li>
            <NavLink to="#">Capital</NavLink>
          </li>
          <li>
            <NavLink to="#">Factura Electrónica</NavLink>
          </li>
          <li>
            <NavLink to="#">Soluciones Financieras</NavLink>
          </li>
          <li>
            <NavLink to="#">RADIAN</NavLink>
          </li>
        </ul>
      </div>
      <div className="contact-banner text-center mt-50 lg-mt-30">
        <h3 className="mb-20">
          ¿Alguna pregunta? <br />
          Hablemos
        </h3>
        <NavLink to="/contacto" className="tran3s fw-500">
          Agendar Reunión
        </NavLink>
      </div>
    </div>
  );
};

export default BlogSidebar;
