export default function About () {
    return ( 
    <>
        <h1>Objetivo de la aplicación</h1>
        <p>El objetivo de la aplicación es facilitar un proceso de revisión en el que puedan participar otros estudiantes. Se persigue fomentar la lectura de código y la búsqueda de optimizaciones para mejorar la formación de los estudiantes.
        En estos momentos solo profesores y TA están involucrados en el proceso de revisión, lo que priva a los estudiantes de la posibilidad de valorar y juzgar el código de sus compañeros, proponiéndoles mejoras y alternativas y permitiéndoles asimilar otros planteamientos y estrategias o formas de resolver los problemas.
        </p>
        <h1>Puntos de dolor y enfoque para resolverlos</h1>
        <ul>
            <li>La estructura tecnológica actual no permite establecer un canal de comunicación durante el proceso de revisión, en que el alumnado pueda defender su posición o proponer alternativas. <ul><li>GitHub issues ofrece este canal y ha demostrado ser efectivo. Además, notifica a los interesados cuando hay novedades. Podemos aprovecharlo, ya que está presente en todos los proyectos entregados a través de la plataforma. La herramienta debe basarse en GitHub issues como canal de comunicación de incidencias y valoraciones.</li></ul></li>
        
        <li>La estructura tecnológica actual no está preparada para incorporar al alumnado en el proceso de revisión.<ul><li>GitHub issues solo nos brinda seguimiento sobre el hilo que abrimos teacher/TA. No podemos comprobar que el repo se haya revisado por otros estudiantes, o que estos hayan revisado otros repos. La herramienta debe permitirnos hacer este control de forma sencilla.</li></ul></li>
        
        </ul>
        <h1>Descripción de necesidades básicas</h1>
        <blockquote>Anotad en estas secciones lo que consideréis que es necesario para resolver el objetivo planteado</blockquote>
        <h1>Como Teacher quiero…</h1>
        <ul>
            <li>Poder crear clases, grupos o cohortes con los Students de cada curso</li>
            <li>Ver los proyectos de cada Student, visualizando de un vistazo:
                <ul>
                    <li>Cuáles están entregados</li>
                    <li>Cuáles están revisados por mí</li>
                    <li>Cuáles están revisados por TA</li>
                    <li>Cuáles están revisados por otros estudiantes, incluyendo su feedback</li>
                </ul>
            </li>
            <li>Poder dar feedback a cada proyecto. Se hará mediante un issue de GitHub, que tiene que quedar enlazado para que TA también pueda participar.</li>
        </ul>
        <h1>Como TA quiero…</h1>
        <ul>
            <li>Ver los proyectos de cada Student, visualizando de un vistazo:
                <ul>
                    <li>Cuáles están entregados</li>
                    <li> Cuáles están revisados por mí</li>
                    <li>Cuáles están revisados por TA</li>
                    <li>Cuáles están revisados por otros estudiantes, incluyendo su feedback</li>
                </ul>
            </li>
            <li>Poder dar feedback a cada proyecto. Se hará mediante un issue de GitHub, que tiene que quedar enlazado para que Teacher también pueda participar.</li>
        </ul>
        <h1>Como Student quiero…</h1>
        <ul>
            <li>Poder subir los ejercicios de forma sencilla</li>
            <li>Que mis compañeros puedan revisar mis proyectos</li>
            <li>Poder revisar los proyectos de mis compañeros</li>
        </ul>
        <h1>Enumeración de posibles mejoras o funcionalidades adicionales</h1>
        <blockquote> Anotad aquí funcionalidades convenientes o deseadas, pero no necesarias, de la app</blockquote>
        <ul>
            <li> Ejemplo: Al hacer login me aparece un feed con recursos recomendados (vídeos, posts, documentación, novedades…) en la pantalla de bienvenida</li>
        </ul>
        
        </>
        
        
        
        
        
       
        
        
        
        
        
        
        
        
       
       
        
    )
}