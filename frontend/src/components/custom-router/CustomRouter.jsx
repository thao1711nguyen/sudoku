import { useState } from "react";

export default function CustomRouter({router}) {
    const indexPage = router.find((r) => r.path === "/")
    const [currentPage, setCurrentPage] = useState(indexPage)
    function navigate(e) {
        if(e.target.tagName == "A") {
            e.preventDefault()
            const path = e.target.getAttribute("href")
            let page = router.find((r) => r.path == path) 
            if (page) {
                history.pushState(null, "", path)
                setCurrentPage(page)
            } else {
                setCurrentPage({element: <h1>404</h1>})
            }
        } 
    }
    return (
        <div onClick={navigate}>
            { currentPage.element } 
        </div>
    )
}   