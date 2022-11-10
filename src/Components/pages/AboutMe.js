import React from "react";
import '../../Styles/AboutMe.css';

function AboutMe(){
    return (
        <div className="aboutMe-container">
            <h1 className="window-title p">Un poco de <span className="red mi">mi</span></h1>
            <div className="parrafoAboutMe">
            • Bienvenido/a a mi <span className="red">portfolio</span>!<br /> <br />
                <br /><hr className="linea"/>
                • Donde además de mostrar mi experiencia y habilidades dentro de la programación, también comparto algunas de las que son mis pasiones.
                <br />
                • Primero te cuento un poco de mí, y si te interesa mi perfil podés contactarme a través de el formulario de <span className="red">contacto</span>, o cualquiera de las plataformas
                donde frecuento, las cuales están todas a un botón de distancia, más abajo.
                <br />
                • Me llamo <span className="red">German</span> Soto y soy de <span className="red">Corrientes</span> Capital, al nordesde de Argentina, donde viví toda mi infancia y gran parte de mi adolescencia. 
                De más grande por diferentes circunstancias recorrí el resto del Nordeste, hasta que llegué a donde vivo hace varios años (no recuerdo cuántos), en
                la Gran Ciudad de <span className="red">Buenos Aires</span>.
                <br /><hr className="linea"/>
                
                • Muchos años me dediqué al teatro y la escritura. Estudié la carrecta de Escritura y dirección de artes en CABA. Pero siempre miré de reojo la programación y 
                el mundo IT.
                <br />
                • Poco a poco me fui abriendo paso y conociendo mucho más acerca de las diferentes tecnologías. Hasta que un día me di cuenta que también con programación
                se puede hacer arte, y empecé a experimentar.
                <br />
                • Empecé aprendiendo un poco de python, fundamentos de programación y algunas cositas de <span className="red">JavaScript</span>. 
                Al principio muy abrumado por la cantidad de información, 
                pero como no tenía apuro, continué por ese camino.<br /><hr className="linea"/>
                <br />
                • Después empecé a experimentar con HTML y CSS, y me di cuenta que habían muchas cosas de esa rama que me interesaban. Empecé a hacer páginas webs muy simples
                para poner en práctica lo que iba aprendiendo.
                <br />
                • Y pronto me di cuenta que me identificaba mucho más con el backend, por lo que continué mi camino estudiando <span className="red">NodeJs</span>, ExpressJS, Bases de datos (SQL, MONGODB, MYSQL)
                <br />
                • De todo un poco. Hasta que me decidí por encontrar un trabajo que me permita continuar por este camino de aprendizaje, y ahí me metí en <span className="red">JAVA</span>.
                <br />
                • Con Java encontré rápidamente nuevos desafíos que me llamaban mucho más la atención, por la cantidad de posibilidades frente a las cuales me enfrentaba.
                <br />
                • El resto de la historia se encuentra en mi CV, que también está disponible para descagar en el <span className="red">ícono de CV</span> al pie de página.
                <br />
                • En resumen, continúo este camino, aprendiendo de cada lenguaje y recoveco donde me lleva la programación. 
                <hr />
            </div>
        </div>
    );
}

export default AboutMe;