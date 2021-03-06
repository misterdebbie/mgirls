
module.exports.sampleHomeController = function (req, res, next) {
    res.render('m3', { title: 'Designers',
        pageHeader: {
            title: "Yang Edit",
            strapline: "Looks from Vogue.com"
        },
        designers: ["Etro"],
        entries: [
            {name: 'Etro',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/etro5.jpg",
                    "/images/mensrunwayimages/etro11.jpg"]}]
    });
};
/*module.exports.sampleHomeController = function (req, res, next) {
    res.render('m3', { title: 'Designers',
        pageHeader: {
            title: "Yang Edit",
            strapline: "Looks from Vogue.com"
        },
        designers: ["Acne","A.P.C.","Bally","Boglioli",
            "Canalli","Cerruti","Coach","Dior",
            "E.Tautz","Etro","E.Zegna","Ferragamo","Gucci",
            "Hermes","Issey Miyake","J.Crew","J.W.Anderson"],
        entries: [{
            name: 'Acne',
            notes: 'Street Sweet',
            looks:["/images/mensrunwayimages/acne14.jpg"]
        },{name: 'A.P.C.',
            notes: 'Fuzzy ',
            looks:["/images/mensrunwayimages/apc1.jpg",
                "/images/mensrunwayimages/apc3.jpg",
                "/images/mensrunwayimages/apc8.jpg"]},
            {name: 'Bally',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/bally1.jpg",
                    "/images/mensrunwayimages/bally2.jpg",
                    "/images/mensrunwayimages/bally15.jpg",
                    "/images/mensrunwayimages/bally16.jpg",
                    "/images/mensrunwayimages/bally17.jpg",
                    "/images/mensrunwayimages/bally18.jpg",
                    "/images/mensrunwayimages/bally19.jpg",
                    "/images/mensrunwayimages/bally23.jpg"]},
            {name: 'Boglioli',
                notes: 'Ciao',
                looks:["/images/mensrunwayimages/boglioli2.jpg",
                    "/images/mensrunwayimages/boglioli17.jpg"]},
            {name: 'Canalli',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/canalli1.jpg",
                    "/images/mensrunwayimages/canalli2.jpg",
                    "/images/mensrunwayimages/canalli6.jpg"]},
            {name: 'Cerruti',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/cerruti5.jpg",
                    "/images/mensrunwayimages/cerruti18.jpg"]},
            {name: 'Coach',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/coach1.jpg",
                    "/images/mensrunwayimages/coach2.jpg",
                    "/images/mensrunwayimages/coach6.jpg",
                    "/images/mensrunwayimages/coach29.jpg"]},
            {name: 'Dior',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/dior41.jpg"]},
            {name: 'E.Tautz',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/etautz25.jpg"]},
            {name: 'Etro',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/etro5.jpg",
                    "/images/mensrunwayimages/etro11.jpg"]},
            {name: 'E.Zegna',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/ezegna2.jpg",
                    "/images/mensrunwayimages/ezegna3.jpg",
                    "/images/mensrunwayimages/ezegna8.jpg"]},
            {name: 'Ferragamo',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/ferragamo1.jpg",
                    "/images/mensrunwayimages/ferragamo3.jpg",
                    "/images/mensrunwayimages/ferragamo4.jpg",
                    "/images/mensrunwayimages/ferragamo5.jpg"]},
            {name: 'Gucci',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/gucci6.jpg",
                    "/images/mensrunwayimages/gucci8.jpg",
                    "/images/mensrunwayimages/gucci10.jpg",
                    "/images/mensrunwayimages/gucci41.jpg"]},
            {name: 'Hermes',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/hermes1.jpg",
                    "/images/mensrunwayimages/hermes2.jpg",
                    "/images/mensrunwayimages/hermes13.jpg",
                    "/images/mensrunwayimages/hermes31.jpg"]},
            {name: 'Issey Miyake',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/issey16.jpg",
                    "/images/mensrunwayimages/issey19.jpg",
                    "/images/mensrunwayimages/issey20.jpg"]},
            { name: 'J.Crew',
                notes: 'pumpkin dranks',
                looks:["/images/mensrunwayimages/jcrew1.jpg",
                    "/images/mensrunwayimages/jcrew5.jpg",
                    "/images/mensrunwayimages/jcrew6.jpg",
                    "/images/mensrunwayimages/jcrew9.jpg",
                    "/images/mensrunwayimages/jcrew10.jpg",
                    "/images/mensrunwayimages/jcrew11.jpg"]},
            {name: 'J.W.Anderson',
                notes: 'very',
                looks:["/images/mensrunwayimages/jw4.jpg",
                    "/images/mensrunwayimages/jw14.jpg",
                    "/images/mensrunwayimages/jw17.jpg",
                    "/images/mensrunwayimages/jw19.jpg"]}
        ]
    });
};*/
/*module.exports.sampleHomeController = function (req, res, next) {
    res.render('men', { title: 'Designers',
        pageHeader: {
        title: "Yang Edit",
        strapline: "Looks from Vogue.com"
        },
        entries: [{
        name: 'Acne',
        notes: 'Street Sweet',
        looks:["/images/mensrunwayimages/acne14.jpg"]
        },{name: 'A.P.C.',
            notes: 'Fuzzy ',
            looks:["/images/mensrunwayimages/apc1.jpg",
                "/images/mensrunwayimages/apc3.jpg",
                "/images/mensrunwayimages/apc8.jpg"]},
            {name: 'Bally',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/bally1.jpg",
                    "/images/mensrunwayimages/bally2.jpg",
                    "/images/mensrunwayimages/bally15.jpg",
                    "/images/mensrunwayimages/bally16.jpg",
                    "/images/mensrunwayimages/bally17.jpg",
                    "/images/mensrunwayimages/bally18.jpg",
                    "/images/mensrunwayimages/bally19.jpg",
                    "/images/mensrunwayimages/bally23.jpg"]},
            {name: 'Boglioli',
                notes: 'Ciao',
                looks:["/images/mensrunwayimages/boglioli2.jpg",
                    "/images/mensrunwayimages/boglioli17.jpg"]},
            {name: 'Canalli',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/canalli1.jpg",
                    "/images/mensrunwayimages/canalli2.jpg",
                    "/images/mensrunwayimages/canalli6.jpg"]},
            {name: 'Cerruti',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/cerruti5.jpg",
                    "/images/mensrunwayimages/cerruti18.jpg"]},
            {name: 'Coach',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/coach1.jpg",
                    "/images/mensrunwayimages/coach2.jpg",
                    "/images/mensrunwayimages/coach6.jpg",
                    "/images/mensrunwayimages/coach29.jpg"]},
            {name: 'Dior',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/dior41.jpg"]},
            {name: 'E.Tautz',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/etautz25.jpg"]},
            {name: 'Etro',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/etro5.jpg",
                    "/images/mensrunwayimages/etro11.jpg"]},
            {name: 'E.Zegna',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/ezegna2.jpg",
                    "/images/mensrunwayimages/ezegna3.jpg",
                    "/images/mensrunwayimages/ezegna8.jpg"]},
            {name: 'Ferragamo',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/ferragamo1.jpg",
                    "/images/mensrunwayimages/ferragamo3.jpg",
                    "/images/mensrunwayimages/ferragamo4.jpg",
                    "/images/mensrunwayimages/ferragamo5.jpg"]},
            {name: 'Gucci',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/gucci6.jpg",
                    "/images/mensrunwayimages/gucci8.jpg",
                    "/images/mensrunwayimages/gucci10.jpg",
                    "/images/mensrunwayimages/gucci41.jpg"]},
            {name: 'Hermes',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/hermes1.jpg",
                    "/images/mensrunwayimages/hermes2.jpg",
                    "/images/mensrunwayimages/hermes13.jpg",
                    "/images/mensrunwayimages/hermes31.jpg"]},
            {name: 'Issey Miyake',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/issey16.jpg",
                    "/images/mensrunwayimages/issey19.jpg",
                    "/images/mensrunwayimages/issey20.jpg"]},
            { name: 'J.Crew',
                notes: 'pumpkin dranks',
                looks:["/images/mensrunwayimages/jcrew1.jpg",
                    "/images/mensrunwayimages/jcrew5.jpg",
                    "/images/mensrunwayimages/jcrew6.jpg",
                    "/images/mensrunwayimages/jcrew9.jpg",
                    "/images/mensrunwayimages/jcrew10.jpg",
                    "/images/mensrunwayimages/jcrew11.jpg"]},
            {name: 'J.W.Anderson',
                notes: 'very',
                looks:["/images/mensrunwayimages/jw4.jpg",
                    "/images/mensrunwayimages/jw14.jpg",
                    "/images/mensrunwayimages/jw17.jpg",
                    "/images/mensrunwayimages/jw19.jpg"]}
        ]
    });
};*/
