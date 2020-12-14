
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

function isValid (data) {
    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            let keys = Object.keys(data[i])

            for (let j = 0; j < keys.length; j++)
                if (!$.trim(data[i][keys[j]]))
                    return false
        }
    } else {
        let keys = Object.keys(data)
    
        for (let i = 0; i < keys.length; i++)
            if (!$.trim(data[keys[i]]))
                return false

    }

    return true
}

function saveEducation() {
    let educ = []
    $("#education table tbody tr").each((i, row) => {
        let obj = $(row)

        educ.push({
            name: obj.find('input[name=name]').val(),
            years: obj.find('input[name=years]').val(),
            image: obj.find('input[name=url]').val(),
            comment: obj.find('textarea[name=comment]').val()
        })
    })

    if (isValid(educ)) {
        db.collection('portfolio')
        .doc('Att61UClb4XtbZ7nox73')
        .update({
            education: educ
        })
        .then(() => {
            $('.toast-body').text("Success! Your educational background was updated!")
            $('.toast').toast('show');
        })
        .catch(() => {
            $('.toast-body').text("Uh oh! Looks like something went wrong while trying to update your information, try again later!")
            $('.toast').toast('show');
        })
    } else {
        $('.toast-body').text("Uh oh! Looks like you missed a few things, make sure that all data in the table is valid!")
        $('.toast').toast('show');
    }
}

function saveOrganization() {
    let org = []
    $("#organization table tbody tr").each((i, row) => {
        let obj = $(row)

        org.push({
            name: obj.find('input[name=name]').val(),
            years: obj.find('input[name=years]').val(),
            image: obj.find('input[name=url]').val(),
            comment: obj.find('textarea[name=comment]').val()
        })
    })

    if (isValid(org)) {
        db.collection('portfolio')
        .doc('Att61UClb4XtbZ7nox73')
        .update({
            organization: org
        })
        .then(() => {
            $('.toast-body').text("Success! Your organization background was updated!")
            $('.toast').toast('show');
        })
        .catch(() => {
            $('.toast-body').text("Uh oh! Looks like something went wrong while trying to update your information, try again later!")
            $('.toast').toast('show');
        })
    } else {
        $('.toast-body').text("Uh oh! Looks like you missed a few things, make sure that all data in the table is valid!")
        $('.toast').toast('show');
    }
}

function saveWork() {
    let work = []
    $("#work table tbody tr").each((i, row) => {
        let obj = $(row)

        work.push({
            name: obj.find('input[name=name]').val(),
            years: obj.find('input[name=years]').val(),
            image: obj.find('input[name=url]').val(),
            comment: obj.find('textarea[name=comment]').val()
        })
    })

    if (isValid(work)) {
        db.collection('portfolio')
        .doc('Att61UClb4XtbZ7nox73')
        .update({
            work: work
        })
        .then(() => {
            $('.toast-body').text("Success! Your work background was updated!")
            $('.toast').toast('show');
        })
        .catch(() => {
            $('.toast-body').text("Uh oh! Looks like something went wrong while trying to update your information, try again later!")
            $('.toast').toast('show');
        })
    } else {
        $('.toast-body').text("Uh oh! Looks like you missed a few things, make sure that all data in the table is valid!")
        $('.toast').toast('show');
    }
}

function updateIntroduction(det) {
    $("#introduction input[name=url]").prop("defaultValue", det.image)
    $("#introduction input[name=name]").prop("defaultValue", det.name)
    $("#introduction textarea[name=content]").prop("defaultValue", det.comment)
}

function updateEducation(edu) {
    $("#education table tbody").empty()
    $(edu).each((i, data) => {
        addEducationToTable(data)
    })
}

function addEducationToTable({image, name, years, comment}) {
    let educRow = $("<tr></tr>")
    let nameCol = $("<td><input type='text' name='name' class='form-control w-100 form-control-sm' value='" + name + "' required></td>")
    let yearsCol = $("<td><input type='text' name='years' class='form-control w-100 form-control-sm' value='" + years + "' required></td>")
    let imageCol = $("<td><input type='text' name='url' class='form-control w-100 form-control-sm' value='" + image + "' required></td>")
    let commentCol = $("<td><textarea name='comment' class='form-control w-100 form-control-sm' required>" + comment + "</textarea></td>")

    let updateBtn = $("<button type='button' class='btn btn-sm btn-primary mr-1'>Update</button>")
    let remBtn = $("<button type='button' class='btn btn-sm btn-danger'>Remove</button>")

    remBtn.click((e) => {
        e.preventDefault()

        educRow.remove()
        saveEducation()
    })

    updateBtn.click((e) => {
        e.preventDefault()

        saveEducation()
    })

    let actionCol = $("<td></td>")

    actionCol.append(updateBtn, remBtn)
    educRow.append(nameCol, yearsCol, imageCol, commentCol, actionCol)

    $("#education table tbody").append(educRow)
}

function updateOrganization(org) {
    $("#organization table tbody").empty()
    $(org).each((i, data) => {
        addOrganizationToTable(data)
    })
}

function addOrganizationToTable({image, name, years, comment}) {
    let orgRow = $("<tr></tr>")
    let nameCol = $("<td><input type='text' name='name' class='form-control w-100 form-control-sm' value='" + name + "' required></td>")
    let yearsCol = $("<td><input type='text' name='years' class='form-control w-100 form-control-sm' value='" + years + "' required></td>")
    let imageCol = $("<td><input type='text' name='url' class='form-control w-100 form-control-sm' value='" + image + "' required></td>")
    let commentCol = $("<td><textarea name='comment' class='form-control w-100 form-control-sm' required>" + comment + "</textarea></td>")

    let updateBtn = $("<button type='button' class='btn btn-sm btn-primary mr-1'>Update</button>")
    let remBtn = $("<button type='button' class='btn btn-sm btn-danger'>Remove</button>")

    remBtn.click((e) => {
        e.preventDefault()

        orgRow.remove()
        saveOrganization()
    })

    updateBtn.click((e) => {
        e.preventDefault()

        saveOrganization()
    })

    let actionCol = $("<td></td>")

    actionCol.append(updateBtn, remBtn)
    orgRow.append(nameCol, yearsCol, imageCol, commentCol, actionCol)

    $("#organization table tbody").append(orgRow)
}

function updateWork(work) {
    $("#work table tbody").empty()
    $(work).each((i, data) => {
        addWorkToTable(data)
    })
}

function addWorkToTable({image, name, years, comment}) {
    let workRow = $("<tr></tr>")
    let nameCol = $("<td><input type='text' name='name' class='form-control w-100 form-control-sm' value='" + name + "' required></td>")
    let yearsCol = $("<td><input type='text' name='years' class='form-control w-100 form-control-sm' value='" + years + "' required></td>")
    let imageCol = $("<td><input type='text' name='url' class='form-control w-100 form-control-sm' value='" + image + "' required></td>")
    let commentCol = $("<td><textarea name='comment' class='form-control w-100 form-control-sm' required>" + comment + "</textarea></td>")

    let updateBtn = $("<button type='button' class='btn btn-sm btn-primary mr-1'>Update</button>")
    let remBtn = $("<button type='button' class='btn btn-sm btn-danger'>Remove</button>")

    remBtn.click((e) => {
        e.preventDefault()

        workRow.remove()
        saveWork()
    })

    updateBtn.click((e) => {
        e.preventDefault()

        saveWork()
    })

    let actionCol = $("<td></td>")

    actionCol.append(updateBtn, remBtn)
    workRow.append(nameCol, yearsCol, imageCol, commentCol, actionCol)

    $("#work table tbody").append(workRow)
}

function updateContacts(cont) {
    $(Object.keys(cont)).each((i, key) => {
        let link = cont[key]

        $("#contacts input[name='" + key + "']").prop('defaultValue', link || "")
    })
}

$(document).ready(() => {
    particlesJS("loginBackground", particleSettings);
    $("#login form").on('submit', (e) => {
        e.preventDefault()

        $("#login .alert").addClass('d-none')
        firebase.auth().signInWithEmailAndPassword($("input[type=email]").val(), $("input[type=password]").val())
        .then((user) => {
            $("#login .alert-success").removeClass('d-none')
            $("#login").animate({ opacity: 0 }, 400, () => {
                $("#login .alert").addClass('d-none')
                $("#login form").trigger('reset')
                $("#login").addClass('d-none')

                $("#dashboard").removeClass('d-none')
                $("#dashboard").animate({ opacity: 1 }, 400)
            })
        })
        .catch((err) => {
            $("#login .alert-danger").removeClass('d-none')
        })
    })

    $("#logout").click((e) => {
        e.preventDefault()

        $("#dashboard").animate({ opacity: 0 }, 400, () => {
            $("#dashboard").addClass('d-none')
            $("#login").removeClass('d-none')
            $("#login").animate({ opacity: 1 }, 400)
        })
    })

    $("#introduction").on('submit', (e) => {
        e.preventDefault()
        
        $("#introduction .alert").addClass('d-none')
        let det = {
            comment: $("#introduction textarea").val(),
            image: $("#introduction input[name=url]").val(),
            name: $("#introduction input[name=name]").val()
        }

        if (!isValid(det)) {
            $("#introduction .alert-danger").removeClass('d-none')
        } else {
            db.collection('portfolio')
                .doc("Att61UClb4XtbZ7nox73")
                .update({
                    details: det
                })
                .then(() => {
                    $("#introduction .alert-success").removeClass('d-none')
                })
                .catch((err) => {
                    console.log(err)
                    $("#introduction .alert-danger").removeClass('d-none')
                })
        }
    })

    $("#education").on('submit', (e) => {
        e.preventDefault()
        
        $("#education .col-md-6 .alert").addClass('d-none')
        let edu = {
            comment: $("#education .col-md-6 textarea").val(),
            image: $("#education .col-md-6 input[name=url]").val(),
            name: $("#education .col-md-6 input[name=name]").val(),
            years: $("#education .col-md-6 input[name=years]").val()
        }

        if (!isValid(edu)) {
            $("#education .col-md-6 .alert-danger").removeClass('d-none')
        } else {
            addEducationToTable(edu)

            saveEducation()
        }
    })

    $("#organization").on('submit', (e) => {
        e.preventDefault()
        
        $("#organization .col-md-6 .alert").addClass('d-none')
        let edu = {
            comment: $("#organization .col-md-6 textarea").val(),
            image: $("#organization .col-md-6 input[name=url]").val(),
            name: $("#organization .col-md-6 input[name=name]").val(),
            years: $("#organization .col-md-6 input[name=years]").val()
        }

        if (!isValid(edu)) {
            $("#organization .col-md-6 .alert-danger").removeClass('d-none')
        } else {
            addOrganizationToTable(edu)

            saveOrganization()
        }
    })

    $("#work").on('submit', (e) => {
        e.preventDefault()
        
        $("#work .col-md-6 .alert").addClass('d-none')
        let work = {
            comment: $("#work .col-md-6 textarea").val(),
            image: $("#work .col-md-6 input[name=url]").val(),
            name: $("#work .col-md-6 input[name=name]").val(),
            years: $("#work .col-md-6 input[name=years]").val()
        }

        if (!isValid(work)) {
            $("#work .col-md-6 .alert-danger").removeClass('d-none')
        } else {
            addWorkToTable(work)

            saveWork()
        }
    })
    
    $("#contacts").on('submit', (e) => {
        e.preventDefault()
        let contacts = {
            facebook: $("#contacts input[name='facebook']").val() || "",
            twitter: $("#contacts input[name='twitter']").val() || "",
            github: $("#contacts input[name='github']").val() || "",
            linkedin: $("#contacts input[name='linkedin']").val() || "",
            instagram: $("#contacts input[name='instagram']").val() || "",
            email: $("#contacts input[name='email']").val() || "",
        }

        db.collection("portfolio")
        .doc("Att61UClb4XtbZ7nox73")
        .update({
            contacts: contacts
        })
        .then(() => {
            $('.toast-body').text("Success! Your work contacts were updated!")
            $('.toast').toast('show');
        })
        .catch(() => {
            $('.toast-body').text("Uh oh! Looks like something went wrong while trying to update your contacts, try again later!")
            $('.toast').toast('show');
        })
    })

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