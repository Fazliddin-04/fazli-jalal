import React from 'react'

function Home() {
  return (
    <div className="container">
      <section id="starter"></section>
      <div className="intro">
        <div>
          <p className="text-primary">This is</p>
          <h1>
            <span data-text="Fazli">Fazli</span>
            <br /> <span data-text="Jalal">Jalal</span>
          </h1>
          <p className="text-primary">Entreprenuer and developer</p>
        </div>
        <div>
          <a
            href="../assets/cv-fazliddinpardayev.pdf"
            className="btn-anime"
            download
            type="pdf"
          >
            <span>
              <span>
                <span>{'<Download CV/>'}</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
