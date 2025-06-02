import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const skillsBySection = {
  "Desarrollador Python": [
    { name: "Python", level: "Experimentado" },
    { name: "Docker", level: "Intermedio" },
    { name: "AWS", level: "Intermedio" },
    { name: "Web Scraping", level: "Intermedio" },
    { name: "FastAPI", level: "Intermedio" },
    { name: "Flask", level: "Intermedio" },
    { name: "Django", level: "Intermedio" },
    { name: "Celery / Celery Beat", level: "Intermedio" },
  ],
  "Ciencia de Datos": [
    { name: "Pandas", level: "Intermedio" },
    { name: "Matplotlib", level: "Intermedio" },
    { name: "Seaborn", level: "Intermedio" },
    { name: "AI", level: "Intermedio" },
    { name: "NLP", level: "Intermedio" },
    { name: "SageMaker", level: "Intermedio" },
    { name: "DialogFlow", level: "Intermedio" },
    { name: "Scikit-learn", level: "Intermedio" },
  ],
  "Analista de Datos": [
    { name: "SQL / NoSQL", level: "Experimentado" },
    { name: "Power BI", level: "Intermedio" },
    { name: "Tableau", level: "Intermedio" },
    { name: "IBM Cognos", level: "Intermedio" },
    { name: "Storytelling", level: "Intermedio" },
    { name: "Amazon QuickSight", level: "Intermedio" },
  ],
  "Ingeniero de Datos": [
    { name: "AWS Glue", level: "Intermedio" },
    { name: "Kafka", level: "Intermedio" },
    { name: "Spark", level: "Intermedio" },
    { name: "Hadoop", level: "Intermedio" },
    { name: "ETL", level: "Intermedio" },
    { name: "Apache Airflow", level: "Intermedio" },
  ],
  "Arquitecto de Soluciones en la Nube": [
    { name: "Terraform", level: "Básico" },
    { name: "Amazon RDS", level: "Intermedio" },
    { name: "AWS Lambda", level: "Intermedio" },
    { name: "AWS S3", level: "Intermedio" },
    { name: "API Gateway", level: "Intermedio" },
    { name: "Data Pipeline", level: "Intermedio" },
    { name: "Azure", level: "Intermedio" },
    { name: "Arquitecturas ETL", level: "Intermedio" },
  ],
};

const Experience = () => {
  const skillsPerRow = 4; // Número de habilidades por fila

  return (
    <section id='experiences'>
      <h5>Experiencias que Tengo</h5>
      <h2>Mis Habilidades</h2>

      <div className="container experience__container">
        {Object.entries(skillsBySection).map(([section, skills]) => (
          <div key={section} className={`experience__${section.toLowerCase().replace(/\s+/g, '-')}`}>
            <h3 className="experience__title">{section}</h3>
            <div className="container extra"> 
              {skills.reduce((rows, skill, index) => {
                if (index % skillsPerRow === 0) {
                  rows.push([]); // Inicia una nueva fila
                }
                rows[rows.length - 1].push(skill); // Agrega la habilidad a la fila actual
                return rows;
              }, []).map((row, rowIndex) => (
                <div key={rowIndex} className="experience__row">
                  {row.map(({ name, level }) => (
                    <article key={name} className="experience__details">
                      <BsFillPatchCheckFill className="experience__details-icon" size={25}/>
                      <div>
                        <h4>{name}</h4>
                        <small className="text-light">{level}</small>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
