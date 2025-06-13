import { useParams } from 'react-router-dom';

export default function CourseDetails(){
    const { courseId } = useParams();

    const courses = {
        systemutvecklare : {
            title: 'Systemutvecklare',
            description: 'Som systemutvecklare hos oss lär du dig att utveckla komplexa IT-system från grunden. Du får kunskaper i backend-programmering, databashantering och systemarkitektur. Vi arbetar med språk som C#, Java och SQL och du får förståelse för både agila arbetssätt och systemintegration. Denna utbildning riktar sig till dig som gillar logik, struktur och teknik på djupet.'
        },
        'grafisk designer': {
            title: 'Grafisk Designer',
            description: 'Hos oss får du som studerar grafisk design lära dig att omvandla idéer till visuella budskap. Under utbildningen utvecklar du din känsla för färg, form, typografi och layout – samtidigt som du får praktiska kunskaper i program som Adobe Photoshop, Illustrator och InDesign. Vi tränar dig i både tryckt och digital design, och du lär dig skapa logotyper, affischer, webbgrafik och användargränssnitt. Utbildningen passar dig som är kreativ, nyfiken och vill arbeta med visuell kommunikation.'

        },
        frontendutvecklare: {
            title: 'Frontendutvecklare',
            description: 'Vår utbildning inom frontendutveckling ger dig de tekniska verktygen du behöver för att bygga moderna, responsiva webbplatser och applikationer. Du får lära dig HTML, CSS, JavaScript och populära ramverk som React. Du får förståelse för UX/UI-design, tillgänglighet och hur man skapar webbgränssnitt som fungerar på alla enheter. Här kombineras teknik och kreativitet – perfekt för dig som gillar problemlösning och design.'
    }
}

const course = courses[courseId];


return(
    <>
    <div className="bg-success p-5 text-white">
        <h1 className='text-center'>Kursdetaljer</h1>
        </div>
        <div>
        <h1 className='text-center mt-5 w-50 mx-auto'>{course.title}</h1>
        <p className='text-center mt-3 w-50 mx-auto'>{course.description}</p>
        </div>

    </>
)

}