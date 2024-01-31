
export const PaginationSection = () => {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="pagination">
                    <li className="pagination__item pagination__item--prev"><i className="fa fa-angle-left" aria-hidden="true"></i><span>Back</span>
                    </li>
                    <li className="pagination__item"><span>1</span></li>
                    <li className="pagination__item pagination__item--active"><span>2</span></li>
                    <li className="pagination__item"><span>3</span></li>
                    <li className="pagination__item"><span>4</span></li>
                    <li className="pagination__item"><span>5</span></li>
                    <li className="pagination__item pagination__item--disabled">...</li>
                    <li className="pagination__item"><span>12</span></li>
                    <li className="pagination__item pagination__item--next"><span>Next</span><i className="fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}
