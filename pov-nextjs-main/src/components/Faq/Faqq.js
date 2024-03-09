import React, {useState} from 'react'
import { questions } from "@/data/Faqdata";
import Myfaq from './Myfaq';


const Faqq = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <section className="faqq">
                <h1 className="faqh">Frequently Asked questions</h1>
        {
                data.map((curElem) => {
                    return <Myfaq key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
        }
                 </section>
        </>
    )
}

export default Faqq
