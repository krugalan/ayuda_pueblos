import { useState } from 'react'


type FaqItemQuestionType = {
    questionTitle: string;
    hiddenAnswer: string;
    questionName: string;
}

export const FaqItemQuestion = ({ questionTitle, questionName }: FaqItemQuestionType) => {

    const [accordionOpen, setAccordionOpen] = useState(true);

    const handleAccordionButton = () => {
        setAccordionOpen((accordionState) => (!accordionState))
    }

    return (<>
        <div className='accordion'>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className={`accordion-button ${accordionOpen ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${questionName}`}
                        aria-expanded={accordionOpen}
                        aria-controls="collapseOne"
                        onClick={handleAccordionButton}
                    >
                        {questionTitle}
                    </button>
                </h2>
                <div id={questionName}
                    className={`accordion-collapse collapse ${(accordionOpen) ? 'show' : ''}`}
                    data-bs-parent="#accordionExample"
                >
                    {
                        accordionOpen &&
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong>
                            It is shown by default, until the collapse plugin adds t
                            he appropriate classes that we use to style each element.
                            These classes control the overall appearance, as well as the showing
                            and hiding via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                            {/* <span>
                                {hiddenAnswer}
                            </span> */}
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
    )
}
