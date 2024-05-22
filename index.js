 let imgTag = document.querySelector('img')
    let divContainer = document.querySelector('.container')
    let newDog = document.querySelector('.newDog')
    console.log(newDog);

    function fetchPicture() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                imgTag.setAttribute('src', `${json.message}`)
                imgTag.setAttribute('width', '400px')
                imgTag.setAttribute('height', '400px')

            })
    }
    fetchPicture()


    newDog.addEventListener('click', fetchPicture)

    // https://dog.ceo/api/breeds/image/random