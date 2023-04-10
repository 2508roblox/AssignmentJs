document.querySelectorAll(".photo-album ul li img ").forEach((element, i) => {
    element.addEventListener("click", (e) => {
        console.log();
        // chon cai image chinhs 
        document.querySelector('.photo-main img').setAttribute('src', element.attributes.src.value)
        if (i === 0) {
            document.querySelector('.photo-main img').style.marginTop = "70px"
            document.querySelector('.photo-main img').style.marginLeft = "10px"
        } else if (i === 1) {
            document.querySelector('.photo-main img').style.marginLeft = "50px"

        } else if (i === 2) {
            document.querySelector('.photo-main img').style.marginTop = "140px"

        } else {
            document.querySelector('.photo-main img').style.marginTop = "140px"

        }

    })
})
console.log(document.querySelector('.photo-main img'))
    ;

// click
// - chon cai image chinhs
// thay src anh chinh bang src cai moi click vao