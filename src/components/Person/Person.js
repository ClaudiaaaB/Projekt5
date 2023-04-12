function Person({ title, description }) {
  return (
    <article className="post-title">
      <div className="post-title_image second-image"></div>

      <div>
        <p className="post-title_title">{title}</p>
        <p className="post-title_text">{description}</p>
      </div>
    </article>
  );
}

export default Person;
