function accordion() {

    const accordionWrapper = document.querySelector(".accordion-wrapper")
    const accordionItem = document.querySelector(".accordion-item")
    const accordionTitle = document.querySelector(".accordion-title")
    const accordionBody = document.querySelector(".accordion-body")


    accordionTitle.forEach((accordionItem) => {
        accordionItem.addEventListener('click', () => {
        const accordionBody = accordionItem.nextElementSibling
    
        accordionBody.classList.toggle('show-accordion-body')
    
        })
    })
      
      
      


}

export default accordion