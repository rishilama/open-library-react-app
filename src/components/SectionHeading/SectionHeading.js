function SectionHeading({section_title}) {
    return (
        <div className="category">
            <div className="category-main-heading category-list-container">
                <h2 className="category-heading">
                    {section_title ? section_title : 'Section Name Here'}
                </h2>
            </div>
        </div>
    )
}

export default SectionHeading;