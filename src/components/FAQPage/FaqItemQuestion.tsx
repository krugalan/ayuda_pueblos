import { useState } from 'react'


type FaqItemQuestionType = {
    questionTitle: string;
    hiddenAnswer: string;
    questionName: string;
}

export const FaqItemQuestion = ({ questionTitle, hiddenAnswer, questionName }: FaqItemQuestionType) => {

    const [accordionOpen, setAccordionOpen] = useState(true);

    const handleAccordionButton = () => {
        setAccordionOpen((accordionState) => (!accordionState))
    }

    console.log(accordionOpen)
    return (<>
        {/* <div className="accordion accordion-flush">
            <div className="accordion__title-block accordion-item">
                <h6 className="accordion-header">{questionTitle}</h6>
                <button
                    onClick={handleAccordionButton}
                    className={`accordion__close ${(accordionOpen) ? '' : 'accordion__close--active collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded={accordionOpen}
                    data-bs-target={`#${questionName}`}
                    aria-controls={questionName}
                >
                    <span ></span>
                </button>
            </div>

            <div
                className={`${(accordionOpen) ? 'accordion__text-block' : ''} accordion-collapse collapse show `}
                id={questionName}
            >
                <div className='accordion-body' >
                    <p>{hiddenAnswer}</p>
                </div>

            </div>
        </div> */}

        <div
            className='accordion accordion-flush'
            id={`id${questionName}`}
        >

            <div className="accordion-item">
                <h5 className="accordion-header accordion__title-block">
                    {questionTitle}
                    <button
                        className={`accordion__close ${(accordionOpen) ? '' : 'accordion__close--active collapsed'}`}
                        type="button"
                        onClick={handleAccordionButton}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${questionName}`}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    />

                </h5>
                <div
                    id={questionName}
                    className={`accordion-collapse collapse ${(accordionOpen) ? 'show' : ' '}`}
                    // className='accordion-collapse collapse '
                    data-bs-parent={`id${questionName}`}
                >
                    <div className={`accordion-body `}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <div className='accordion'>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div> */}
    </>
    )
}
