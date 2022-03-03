const buttonModal = document.querySelectorAll(".btn-modal")


        for (let btnmodal of buttonModal) {
            btnmodal.onclick = function () {
                const cardId = btnmodal.getAttribute('card-id')
                const cardTitle = document.querySelector(`#card-${cardId}-title`);
                const modalTitle = document.getElementById("modal-title")

                const cardText = document.querySelector(`#card-${cardId}-text`)
                const modalText = document.getElementById("modal-text")

                const cardImg = document.querySelector(`#card-${cardId}-image`)
                const modalImg = document.getElementById("modal-image")

                var cardsrc = cardImg.getAttribute("src")
                var modalsrc = modalImg.setAttribute("src", cardsrc)

                modalTitle.innerHTML = cardTitle.innerHTML
                modalText.innerHTML = cardText.innerHTML
            }
        }
