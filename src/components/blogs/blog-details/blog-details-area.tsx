import BlogSidebar from "../blog-sidebar";
import { IBlog } from "../../../types/blog-d-t";
import { NavLink } from "react-router-dom";
import ContentOne from "../content-one";
import ContentTwo from "../content-two";

const BlogDetailsArea = ({ blog }: { blog: IBlog }) => {
  const { id, date, title, author, reading_time, company_position, img, introduction, author_note} = blog || {};
  return (
    <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <div className="date">{date}</div>
              </figure>
              <div className="post-data">
                <div className="post-info">{author}. {reading_time}</div>
                <div className="blog-title">
                  <h4>{title}</h4>
                </div>
                <div className="post-details-meta">
                  {introduction?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <div className="quote-wrapper">
                    <div className="wrapper">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <img
                          src="/assets/images/icon/icon_93.svg"
                          alt="icon"
                          className="lazy-img"
                        />
                      </div>
                      <div className="row">
                        <div className="col-xxl-9 col-xl-11 m-auto">
                          <h3>
                            {author_note}
                          </h3>
                        </div>
                      </div>
                      <h6>
                        {author}. <span>{company_position}</span>
                      </h6>
                    </div>
                  </div>
                  <div className="row img-gallery">
                    <div className="col-sm-8">
                      <img
                        src="/assets/images/blog/blog_img_des1.jpg"
                        alt="blog-img"
                        className="lazy-img w-100"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        src="/assets/images/blog/blog_img_des2.jpg"
                        alt="blog-img"
                        className="lazy-img w-100"
                      />
                    </div>
                  </div>
                  {id == 1 ? <ContentOne /> : <ContentTwo />}
                </div>
                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  <ul className="d-flex align-items-center tags style-none pt-20">
                    <li>Tag:</li>
                    <li>
                      <NavLink to="#">Factoring</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Financiamiento Empresas</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Capital de Trabajo</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Radian</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-md-8">
            {/* blog sidebar start */}
            <BlogSidebar />
            {/* blog sidebar end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
