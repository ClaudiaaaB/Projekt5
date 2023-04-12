import Person from "./Person";

function People() {
  return (
    <section id="o nas" className="page-container2 ">
      <div class="container">
        <h2>Nasi specjaliści</h2>

        <Person
          title="Imię Nazwisko (dział)"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          expedita iusto at molestiae quisquam error eligendi maiores voluptatem
          ratione incidunt nulla id, tempore quasi sunt nostrum, cupiditate
          officia aspernatur laboriosam?"
        />
        <Person
          title="Imię Nazwisko (dział)"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          expedita iusto at molestiae quisquam error eligendi maiores voluptatem
          ratione incidunt nulla id, tempore quasi sunt nostrum, cupiditate
          officia aspernatur laboriosam?"
        />
      </div>
    </section>
  );
}

export default People;
