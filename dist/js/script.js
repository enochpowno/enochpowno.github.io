const particleSettings = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

function updateIntroduction(det) {
    $("#introduction .container img").attr('src', det.image)
    $("#introduction .container h4").text(det.name)
    $("#introduction .container p").text(det.comment)
}

function updateEducation(edu) {
    $("#education #educationDetails > .col").empty()
    $(edu).each((i, {image, name, years, comment}) => {
        let educRow = $("<div class='row' data-aos='fade-up'></div>")
        let imgCol = $("<div class='col-md-3 my-3'><img src='" + image + "'/></div>")
        let detCol = $("<div class='col-md-9 my-3'><b>" + name + "</b> | <i>" + years + "</i><p>" + comment + "</p></div>")

        educRow.append(imgCol, detCol)

        $("#education #educationDetails > .col").append(educRow)
    })
}

function updateOrganization(org) {
    $('#orgCarousel .carousel-indicators').empty()
    $('#orgCarousel .carousel-inner').empty()

    $(org).each((i, o) => {
        let indicator = $("<li data-target='#orgCarousel' data-slide-to='" + i + "' class='" + (i == 0 ? 'active' : '') + "'></li>")
        $('#orgCarousel .carousel-indicators').append(indicator)

        let carouselItem = $("<div class='carousel-item " + (i == 0 ? 'active' : '') + "'></div>")
        let itemData = $("<img class='d-block w-100' src='" + o.image + "'/>")

        carouselItem.append(itemData)

        $('#orgCarousel .carousel-inner').append(carouselItem)
    })

    $("#orgDetails h4").text(org[0].name)
    $("#orgDetails h5").text(org[0].years)
    $("#orgDetails p").text(org[0].comment)
    
    $("#orgCarousel").off('slide.bs.carousel')
    $("#orgCarousel").on('slide.bs.carousel', (e) => {
        $("#orgDetails h4").text(org[e.to].name)
        $("#orgDetails h5").text(org[e.to].years)
        $("#orgDetails p").text(org[e.to].comment)
    })
}

function updateWork(work) {
    $("#workList").empty()
    $(work).each((i, o) => {
        let previewComment = o.comment.substr(0, (o.comment.length > 103) ? 100 : o.comment.length - 1)
        if (o.comment.length > 103) previewComment += '...'

        let cardCol = $("<div class='col-md-4 my-3' data-aos='fade-up'></div>")
        let card = $("<div class='card w-100'></div>")
        let cardImg = $("<img class='card-img-top' src='" + o.image + "'/>")
        let cardBody = $("<div class='card-body'><h5>" + o.name + "</h5><i>" + o.years + "</i><p>" + previewComment + "</p></div>")

        card.on('click', (e) => {
            $("#workModal .modal-title").text(o.name)
            $("#workModal .col-md-4").html("<img class='card-img-top' src='" + o.image + "'/>")
            $("#workModal .col-md-8").html("<b>" + o.years + "</b><br/><p>" + o.comment + "</p>")

            $("#workModal").modal('show')
        })
        
        card.append(cardImg, cardBody)

        cardCol.append(card)

        $("#workList").append(cardCol)
    })
}

function updateContacts(cont) {
    $("#contacts a").removeAttr('href')
    $("#contacts a").removeAttr('disabled')

    $(Object.keys(cont)).each((i, key) => {
        let link = cont[key]

        if (link) {
            $("#contacts a#" + key).attr('href', (key != 'email') ? link : "mailto:" + link)
        } else {
            $("#contacts a#" + key).attr('disabled', 'disabled')
        }
    })
}

$(document).ready(() => {
    AOS.init()
    particlesJS("introductionBackground", particleSettings);
    particlesJS("contactsBackground", particleSettings);

    let nav = $("nav"),
        navHeight = nav.outerHeight(true),
        sections = nav.find('a').map((i, item, arr) => {
            try {
                let section = $($(item).attr('href'))

                if (section.length) 
                    return section
            } catch (error) {}
        })
    
    $("nav a").click((e) => {
        let top = $($(e.target).attr('href')).offset().top - navHeight
        e.preventDefault()

        $('html, body').stop().animate({ scrollTop: top }, 400)
    })

    // change active section when scrolling
    $(window).scroll((e) => {
        let top = $(window).scrollTop() + navHeight
        let cur = sections.map((i, item, arr) => {
            if ($(item).offset().top <= top)
                return item
        })
        cur = cur[cur.length - 1]
        let id = cur && cur.length ? cur[0].id : "";
        nav.find('li').removeClass('active')
        nav.find("a[href='#" + id + "']").parent().addClass('active')
    })

    // initiate firestore things
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyAHxAXB1XZX_gs61xBcxtr6pdg61B22Pkg",
        authDomain: "ccapdev-resume-6dd12.firebaseapp.com",
        projectId: "ccapdev-resume-6dd12",
        storageBucket: "ccapdev-resume-6dd12.appspot.com",
        messagingSenderId: "36426167554",
        appId: "1:36426167554:web:c74f2c0978d858817e3e1b",
        measurementId: "G-MG4KT2L33B"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore()

    let initial = true
    const unsubscribe = db.collection("portfolio")
        .doc("Att61UClb4XtbZ7nox73")
        .onSnapshot((doc) => {
            let data = doc.data()

            updateIntroduction(data.details)
            updateEducation(data.education)
            updateWork(data.work)
            updateOrganization(data.organization)
            updateContacts(data.contacts)

            if (initial) {

                initial = false
            }
        }, (error) => {
            console.log("Error: ")
            console.dir(error)
        })
})