document.addEventListener("DOMContentLoaded", function () {

    // var buttons = document.querySelectorAll("#book-list .delete");

    // Array.from(buttons).forEach(function(button) {
    //     button.addEventListener("click", function(e) {

    //         const li = e.target.parentElement; //to grab our target

    //         li.parentNode.removeChild(li)  //to delete

    //     });
    // });

    // const link = document.querySelector('#page-banner a')

    // link.addEventListener("click", function(e){
    //     e.preventDefault()
    //     console.log("navigation to", e.target.textContent, "was prevented")
    // })




    const list = document.querySelector('#book-list ul')

    list.addEventListener("click", function (e) {

        if (e.target.className == "delete") {
            const li = e.target.parentElement
            list.removeChild(li)
        }

    })  // deleting using event bubbling


    // add books

    const addForm = document.forms["add-book"]

    addForm.addEventListener("submit", function (e) {
        e.preventDefault()
        const value = addForm.querySelector('input[type="text"]').value

        // create elements
        const li = document.createElement('li')
        const bookName = document.createElement('span')
        const deleteBtn = document.createElement('span')

        // // add content
        deleteBtn.textContent = "delete"
        bookName.textContent = value

        // // add classes
        bookName.classList.add('name')
        deleteBtn.classList.add('delete')

        // append to document
        li.appendChild(bookName)
        li.appendChild(deleteBtn)
        list.append(li)

    })

    // var book = document.querySelector("li:first-child .name")
    // book.getAttribute("class")

    // book.setAttribute("class", "name-2") // to change attribute

    // book.hasAttribute("class")
    // book.hasAttribute("href")  // to check for attribute

    // bookList.removeAttribute("class") // to remove attribute



    const hideBox = document.querySelector("#hide")

    hideBox.addEventListener("change", function (e) {
        if (hideBox.checked) {
            list.style.display = "none"
        } else {
            list.style.display = "initial"
        }
    })

    const searchBar = document.forms["search-books"]

    searchBar.addEventListener("keyup", function (e) {
        const term = e.target.value.toLowerCase()
        const books = list.getElementsByTagName("li")
        Array.from(books).forEach(function (book) {
            const title = book.firstElementChild.textContent
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = "block"
            } else {
                book.style.display = "none"
            }
        })
    })

    const tabs = document.querySelector(".tabs")
    const panel = document.querySelectorAll(".panel")

    tabs.addEventListener("click", function (e) {
        if (e.target.tagName == "LI") {
            const targetPanel = document.querySelector(e.target.dataset.target)
            panel.forEach(function (panel) {
                if (panel == targetPanel) {
                    panel.classList.add("active")
                }
                else {
                    panel.classList.remove("active")
                }

            })
        }
    })

})