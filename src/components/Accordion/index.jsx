import React, { useState } from "react";
import AccordionUI from "./Ui";

export default function Accordion() {

    const [index, setIndex] = useState(false)

    const data = [
        {
            id: 1,
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien. Scelerisque habitant felis sit mi. Justo gravida leo non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien.'
        },
        {
            id: 2,
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien. Scelerisque habitant felis sit mi. Justo gravida leo non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien.'
        },
        {
            id: 3,
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien. Scelerisque habitant felis sit mi. Justo gravida leo non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien.'
        },
        {
            id: 4,
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien. Scelerisque habitant felis sit mi. Justo gravida leo non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien.'
        },
        {
            id: 5,
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien. Scelerisque habitant felis sit mi. Justo gravida leo non bibendum accumsan lacus justo venenatis morbi aliquet quisque sapien.'
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center p-6">
            {
                data.map((data) => {
                    return (
                        <AccordionUI title={data.question} Id={data.id} children={data.answer} Index={index} setIndex={setIndex} ></AccordionUI>
                    )
                })
            }
        </div>
    )
}
